import {
	AuthUserCredential,
	PrivateRegisterRoutes,
} from '@/models';
import { ButtonPrimary, LabelTitle } from '@/styled-components';
import { 
	Alert,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ButtonGoogleIcon, OrDivider, RegisterFrame } from '../../components';

import './styles/RegisterPage.css';
import { RefObject, createRef, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { AppDispatch, createUser, loginWithGoogle } from '@/redux';
import { UserInput } from '@/models/redux';


export interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const dispatch = useDispatch<AppDispatch>();

	const urlRef: RefObject<HTMLElement> = createRef<HTMLElement>();
	const loginRef: HTMLElement = document.getElementById('login')!;
	const createProjectRef: HTMLElement = document.getElementById('create-project')!;
	console.log(createProjectRef);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCredential>();

	const goToPage = (isSuccess: boolean, message: string) => {
		if (isSuccess) {
				switch (urlRef.current) {
					case loginRef:
						navigate(
							`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.JOINTEAM}`,
							{ replace: true }
						)
						break;
					case createProjectRef:
						navigate(
							`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`,
							{ replace: true }
						)
						break;
					default:
						navigate(
							`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.JOINTEAM}`,
							{ replace: true }
						)
						break;
				}
			} else {
				(<Alert severity="error">{ message }</Alert>)
			}
	}

	const onHandleRegister: SubmitHandler<UserInput> = async dataUser => {
		try {

			const result = await dispatch(createUser(dataUser)).unwrap();
			const { isSuccess, message, user } = result;

			goToPage(isSuccess, message);
		} catch (error) {
			throw error;
		}
	};

	const registerGoogleHandle = async () => {
		try {
			const result = await dispatch(loginWithGoogle()).unwrap();
			const { isSuccess, message, user } = result;
			goToPage(isSuccess, message);

		} catch (error) {
			throw error;
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
