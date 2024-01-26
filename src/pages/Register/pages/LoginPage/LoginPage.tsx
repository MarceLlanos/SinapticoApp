import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	LoginAuthCredential,
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
	OutlinedInput
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ButtonGoogleIcon, InputCustom, InputPasswordCustom, OrDivider, RegisterFrame } from '../../components';
import { AppDispatch, login, loginWithGoogle } from '@/redux';
import { useDispatch } from 'react-redux';
import { getCurrentUser, getProjectsByUserId } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from './schemas/login-form-schema';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentUser = getCurrentUser();
	const dispatch = useDispatch<AppDispatch>();
	const uid = currentUser?.uid!;
	const beforeUrl = location.state;

	const {
		register,
		handleSubmit,
		watch,
		formState,
		reset,
	} = useForm<LoginAuthCredential>({
		defaultValues: { email: '', password: '' },
		mode: 'onChange',
		resolver: yupResolver(loginFormSchema)
	});

	const formContextValues = { register, formState };
	
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

	const handleSubmitLogin: SubmitHandler< LoginAuthCredential > = async dataUser => {
		try {

			const { isSuccess, message } = await dispatch(login(dataUser)).unwrap();
			const projects = await getProjectsByUserId(uid);
			
			goToPage(isSuccess, message, projects);
			reset();
		} catch (error) {
			throw error;
		}
	};

	const handleGoogleLogin = async () => {
		try {
			const { isSuccess, message, user } = await dispatch(loginWithGoogle()).unwrap();
			const projects = await getProjectsByUserId(uid);
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
			<FormProvider {...formContextValues as any}>
				<form
					onSubmit={handleSubmit(handleSubmitLogin)}
					className='columnContainerCentered mt-3'
				>
					<InputCustom
						id = 'email'
						name = 'email'
						label = 'Correo electrónico'
						type = 'email'
						required = { true }
						disabled = { false }
					/>

					<InputPasswordCustom
						id='password-input-login'
						name='password'
						label='Contraseña'
					/>

					<div className='rowContainer mb-3 mt-1'>
						<ButtonPrimary type='submit'>Ingresar</ButtonPrimary>

						<LinkPrimary>¿Olvidaste tu contraseña?</LinkPrimary>
					</div>
				</form>
			</FormProvider>
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