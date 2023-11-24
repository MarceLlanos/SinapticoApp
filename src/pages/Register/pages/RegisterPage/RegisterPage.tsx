import {
	AuthUserCredential,
	FirebaseUser,
	PrivateRegisterRoutes,
} from '@/models';
import { ButtonPrimary, LabelTitle } from '@/styled-components';
import { Alert, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ButtonGoogleIcon, OrDivider, RegisterFrame } from '../../components';

import './styles/RegisterPage.css';
import {
	addDocument,
	loginWithGoogle
} from '@/services';
import { UserCredential } from 'firebase/auth';
import { createUserCredentialAdapted } from '@/adapters';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useMutation } from '@apollo/client';
import { CREATE_ACCOUNT } from '../../schemas';


export interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const [createAccount, { data }] = useMutation(CREATE_ACCOUNT);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCredential>();

	const onHandleRegister: SubmitHandler<AuthUserCredential> = async dataUser => {
		try {
			await createAccount({
				variables: {
					createAccountInput: {
						email: dataUser.email,
						password: dataUser.password,
						userName: dataUser.userName
					}
				}
			});
			const { isSuccess, message } = data.createAccount;
			isSuccess ? 
				navigate(
					`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`,
					{ replace: true }
				)
			:(<Alert severity="error">{ message }</Alert>)
		} catch (error) {
			console.log(error);
		}
	};

	const registerGoogleHandle = async () => {
		try {
			const data: UserCredential = (await loginWithGoogle()) as UserCredential;
			const user: FirebaseUser = (await createUserCredentialAdapted(
				data
			)) as FirebaseUser;

			await addDocument('users', user);
			navigate(
				`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`
			);
		} catch (error) {
			throw new Error(`No se pudo realizar el registro debido a ${error}`)
		}
	};

	return (
		<RegisterFrame>
			<LabelTitle>Crea tu cuenta</LabelTitle>
			<div className='columnContainerCentered mt-3'>
				<ButtonGoogleIcon
					iconLink='../../src/assets/icons/google.svg'
					handleClick={registerGoogleHandle}
					title='Crear cuenta con Google'
				/>
			</div>
			<OrDivider />
			<form
				onSubmit={handleSubmit(onHandleRegister)}
				className='columnContainerCentered mt-3'
			>
				<TextField
					id='userName'
					label='Nombre Completo*'
					type='text'
					margin='normal'
					{...register('userName', {
						required: 'El nombre completo de usuario es requerido',
					})}
					error={errors.userName ? true : false}
				/>
				{errors.userName ? (
					<span className='smallTextItalic redText'>
						<strong>Error:</strong> Debes ingresar tu nombre completo.
					</span>
				) : (
					<span className='smallTextItalic'>
						<strong>Importante:</strong> Debes tu nombre completo.
					</span>
				)}
				<TextField
					id='email'
					label='Correo electrónico*'
					type='email'
					margin='normal'
					{...register('email', {
						required: 'Email es requerido',
						pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					})}
					error={errors.email ? true : false}
				/>
				{errors.email ? (
					<span className='smallTextItalic redText'>
						<strong>Error:</strong> Debes ingresar un email valido.
					</span>
				) : (
					<span className='smallTextItalic'>
						<strong>Importante:</strong> Debes de registrarte con un correo
						gmail.
					</span>
				)}
				<FormControl sx={{ width: '100%' }} variant="outlined">
					<InputLabel htmlFor="password-input">Contraseña * </InputLabel>
					<OutlinedInput
						id="password-input"
						type={showPassword ? 'text' : 'password'}
						required
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									edge="end"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						{...register('password', {
							required: 'La contraseña debe tener mas de 6 caracteres',
							minLength: 5,
						})}
						error={errors.password ? true : false}
						label="Contraseña"
					/>
				</FormControl>
				{errors.password ? (
					<span className='smallTextItalic redText'>
						<strong>Error:</strong> Debes ingresar una constraseña de más de 5
						caracteres.
					</span>
				) : (
					<span className='smallTextItalic'>
						<strong>Importante:</strong> La contraseña debe tener por lo menos 6
						caracteres.
					</span>
				)}

				<div className='mt-1'>
					<ButtonPrimary type='submit'>Guardar</ButtonPrimary>
				</div>
			</form>
			<div className='mt-3'>
				<span className='primaryText textNormal'>
					Sinaptico te apoya con la gestión de tus proyectos y tareas.
				</span>
			</div>
		</RegisterFrame>
	);
};

export default RegisterPage;
