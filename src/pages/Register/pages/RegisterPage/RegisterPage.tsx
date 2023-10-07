import {
	AuthUserCredential,
	FirebaseUser,
	PrivateRegisterRoutes,
} from '@/models';
import { ButtonPrimary, LabelTitle } from '@/styled-components';
import { TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ButtonGoogleIcon, RegisterFrame } from '../../components';

import './styles/RegisterPage.css';
import {
	addDocument,
	loginWithGoogle,
	registerEmailPassword,
} from '@/services';
import { User, UserCredential } from 'firebase/auth';
import { createUserAdapted, createUserCredentialAdapted } from '@/adapters';
import OrDivider from '../../components/OrDivider';

export interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCredential>();

	const onHandleRegister: SubmitHandler<
		AuthUserCredential
	> = async dataUser => {
		try {
			const data: User = await registerEmailPassword(dataUser);
			const user: FirebaseUser = (await createUserAdapted(
				data
			)) as FirebaseUser;

			await addDocument('user', user);
			navigate(
				`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`,
				{ replace: true }
			);
		} catch {}
	};

	const registerGoogleHandle = async () => {
		try {
			const data: UserCredential = (await loginWithGoogle()) as UserCredential;
			const user: FirebaseUser = (await createUserCredentialAdapted(
				data
			)) as FirebaseUser;

			await addDocument('user', user);
			navigate(
				`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`
			);
		} catch (error) {
			console.log(error);
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
					id='email'
					label='Correo electrónico'
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
				<TextField
					id='password-input'
					label='Contraseña'
					type='password'
					margin='normal'
					required
					{...register('password', {
						required: 'La contraseña debe tener mas de 6 caracteres',
						minLength: 5,
					})}
					error={errors.password ? true : false}
				/>
				{errors.password ? (
					<span className='smallTextItalic redText'>
						<strong>Error:</strong> Debes ingresar una constraseña de mas de 5
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
				<span className='primaryText'>
					Sinaptico te apoya con la gestión de tus proyectos y tareas.
				</span>
			</div>
		</RegisterFrame>
	);
};

export default RegisterPage;
