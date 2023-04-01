import React from 'react';
import './styles/RegisterPage.css';
import { RegisterFrame } from '../../components';
import { Label } from '../../styled-components';
import { TextField } from '@mui/material';
import { ButtonPrimary } from '@/styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerEmailAndPassword } from '@/redux/slices/authentication.slice';
import { DataAuth, PrivateRegisterRoutes } from '@/models';

export interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DataAuth>();

	const onHandleRegister: SubmitHandler<DataAuth> = dataUser => {
		try {
			dispatch(registerEmailAndPassword(dataUser));
			navigate(
				`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`,
				{ replace: true }
			);
		} catch {

		}
	};
	return (
		<RegisterFrame>
			<Label>Crea tu cuenta</Label>
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
