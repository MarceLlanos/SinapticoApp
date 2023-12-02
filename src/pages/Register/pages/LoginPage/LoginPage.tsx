import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import {
	AuthUserCredential,
	PrivateRegisterRoutes,
	Project,
	PublicRegisterRoutes,
} from '@/models';

import {
	ButtonGrey,
	ButtonPrimary,
	LabelTitle,
	LinkPrimary,
} from '@/styled-components';
import {
	Alert,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { ButtonGoogleIcon, OrDivider, RegisterFrame } from '../../components';
import { AppDispatch, login, loginWithGoogle } from '@/redux';
import { useDispatch } from 'react-redux';
import { getProjectsByUser } from '@/redux/asyncState/project.async';
import { getCurrentUser } from '@/services';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentUser = getCurrentUser();
	const dispatch = useDispatch<AppDispatch>();
	const [showPassword, setShowPassword] = useState(false);
	const uid = currentUser?.uid!;
	const beforeUrl = location.state;
	
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthUserCredential>();
	
	const goToPage = (isSuccess: boolean, message: string, projects: Array<Project>) => {
		if (isSuccess) {
			switch (beforeUrl) {
				case PrivateRegisterRoutes.CREATEPROJECT:
					navigate(
						`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`
					);
					break;
				case PrivateRegisterRoutes.JOINTEAM:
					navigate(
						`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.JOINTEAM}`
					);
					break;
				case PublicRegisterRoutes.LOGIN:
					projects.length > 0
					? navigate(
						`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.TEAMLIST}`
					)
					:
					navigate(
						`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.JOINTEAM}`
					);
				default:
					projects.length > 0
					? navigate(
						`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.TEAMLIST}`
					)
					: navigate(
						`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.JOINTEAM}`
					);
					break;
			}
			
		} else {
			(<Alert severity="error">{ message }</Alert>)
		}
	}

	const handleSubmitLogin: SubmitHandler< AuthUserCredential > = async dataUser => {
		try {
			const { isSuccess, message } = await dispatch(login(dataUser)).unwrap();
			const projects = await dispatch(getProjectsByUser(uid)).unwrap();
			
			goToPage(isSuccess, message, projects);
		} catch (error) {
			throw error;
		}
	};

	const handleGoogleLogin = async () => {
		try {
			const { isSuccess, message, user } = await dispatch(loginWithGoogle()).unwrap();
			const projects = await dispatch(getProjectsByUser(uid)).unwrap();
			goToPage(isSuccess, message, projects);
		} catch (error) {
			throw error;
		}
	};

	return (
		<RegisterFrame>
			
			<LabelTitle>Ingresa a tu cuenta</LabelTitle>

			<div className='columnContainerCentered mt-3'>
				<ButtonGoogleIcon
					handleClick={ handleGoogleLogin }
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

				<FormControl sx={{ width: '100%' }} variant="outlined" className='mt-1'>
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

				<div className='rowContainer mb-3 mt-1'>
					<ButtonPrimary type='submit'>Ingresar</ButtonPrimary>

					<LinkPrimary>¿Olvidaste tu contraseña?</LinkPrimary>
				</div>
			</form>
			<div className='columnContainer mt-3'>
				<span className='greyTextCustom mb-1 '>¿No tienes una cuenta?</span>
				<ButtonGrey
					onClick={() => navigate(`/${PublicRegisterRoutes.REGISTER}`)}
				>
					Crear cuenta
				</ButtonGrey>
			</div>
		</RegisterFrame>
	);
};

export default LoginPage;