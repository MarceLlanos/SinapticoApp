import { createUserAdapted } from '@/adapters/FirebaseUser.adapter';
import {
	AuthUserCredential,
	FirebaseUser,
	PrivateRegisterRoutes,
	PublicRegisterRoutes,
} from '@/models';
import { loginEmailPassword, loginWithGoogle } from '@/services';
import {
	ButtonGrey,
	ButtonPrimary,
	LabelTitle,
	LinkPrimary,
} from '@/styled-components';
import { TextField } from '@mui/material';
import { User, UserCredential } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ButtonGoogleIcon, RegisterFrame } from '../../components';
import { createUserCredentialAdapted } from '@/adapters';
import OrDivider from '../../components/OrDivider';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
	const navigate = useNavigate();


	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCredential>();

	const handleSubmitLogin: SubmitHandler<
		AuthUserCredential
	> = async dataUser => {
		try {
			const data: User = await loginEmailPassword(dataUser);
			const user: FirebaseUser = (await createUserAdapted(
				data
			)) as FirebaseUser;
			navigate(
				`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`
			);
		} catch (error) {}
	};

	const handleGoogleLogin = async () => {
		try {
			const data: UserCredential = (await loginWithGoogle()) as UserCredential;
			const user: FirebaseUser = (await createUserCredentialAdapted(
				data
			)) as FirebaseUser;

			navigate(
				`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<RegisterFrame>
			
			<LabelTitle>Ingresa a tu cuenta</LabelTitle>

			<div className='columnContainerCentered mt-3'>
				<ButtonGoogleIcon
					handleClick={handleGoogleLogin}
					title='Ingrese con Google'
					iconLink='../../src/assets/icons/google.svg'
				/>
			</div>

			<OrDivider />

			<form
				onSubmit={handleSubmit(handleSubmitLogin)}
				className='columnContainerCentered mt-3'
			>
				<TextField
					id='outlined-email-input'
					label='Correo electrónico'
					type='email'
					autoComplete='current-password'
					margin='normal'
					{...register('email', {
						required: 'Email es requerido',
						pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/,
					})}
					error={errors.email ? true : false}
				/>
				{errors.email && (
					<span className='small-text-italic redText'>
						<strong>Error:</strong> Debes ingresar un email valido.
					</span>
				)}

				<TextField
					id='outlined-password-input'
					label='Contraseña'
					type='password'
					autoComplete='current-password'
					margin='normal'
					{...register('password', {
						required: true,
						minLength: 5,
					})}
					error={errors.password ? true : false}
				/>
				{errors.password && (
					<span className='small-text-italic redText'>
						<strong>Error:</strong> Debes ingresar una constraseña de mas de 5
						caracteres.
					</span>
				)}

				<div className='rowContainer mb-3 mt-1'>
					<ButtonPrimary type='submit'>Ingresar</ButtonPrimary>

					<LinkPrimary>¿Olvidaste tu contraseña?</LinkPrimary>
				</div>
			</form>
			<div className='columnContainer mt-3'>
				<span className='greyText mb-1 '>¿No tienes una cuenta?</span>
				<ButtonGrey
					onClick={() => navigate(`/${PublicRegisterRoutes.REGISTER}`)}
				>
					Crear cuenta
				</ButtonGrey>
			</div>
		</RegisterFrame>
	);
};
