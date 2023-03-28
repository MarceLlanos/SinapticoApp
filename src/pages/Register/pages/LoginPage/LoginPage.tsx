import { TextField } from '@mui/material';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RegisterFrame } from '../../components';
import { Label } from '../../styled-components';
import { ButtonGrey, ButtonPrimary, LinkPrimary } from '@/styled-components';
import { PublicRegisterRoutes } from '@/models';

export interface LoginPageProps {}
interface IFormLogin {
	email: string;
	password: string;
}

export const LoginPage: React.FC<LoginPageProps> = () => {
	// const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormLogin>();

	const handleSubmitLogin: SubmitHandler<IFormLogin> = userData => {
		console.log('logged');
	};

	return (
		<RegisterFrame>
			<Label>Ingresa a tu cuenta</Label>
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
						pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
				<span className='text-grey mb-1 '>¿No tienes una cuenta?</span>
				<ButtonGrey
					onClick={() => navigate(`/${PublicRegisterRoutes.REGISTER}`)}
				>
					Crear cuenta
				</ButtonGrey>
			</div>
		</RegisterFrame>
	);
};
