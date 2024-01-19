import {
	AuthUserCredential,
	PrivateRegisterRoutes,
} from '@/models';
import { ButtonPrimary, LabelTitle } from '@/styled-components';
import { 
	Alert
} from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonGoogleIcon, InputCustom, InputPasswordCustom, OrDivider, RegisterFrame } from '../../components';


import { useDispatch } from 'react-redux';
import { AppDispatch, createUser, loginWithGoogle } from '@/redux';
import { UserInput } from '@/models/redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from './schemas/register-form.schemas';


export interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch<AppDispatch>();
	const urlBefore = location.state;


	const {
		register,
		handleSubmit,
		formState,
		reset,
		watch
	} = useForm<AuthUserCredential>({
		defaultValues: {
			userName: '',
			email: '',
			password: ''
		},
		mode: 'onChange',
		resolver: yupResolver(registerFormSchema)
	});

	const formContextValues = { register, formState };

	const goToPage = (isSuccess: boolean, message: string) => {
		if (isSuccess) {
			switch (urlBefore) {
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
				default:
					navigate(
						`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.JOINTEAM}`
					);
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
			reset();
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
			<FormProvider {...formContextValues as any}>
				<form
					onSubmit={handleSubmit(onHandleRegister)}
					className='columnContainerCentered mt-3'
				>
					<InputCustom
						id = 'userName'
						name = 'userName'
						label = 'Nombre Completo'
						type = 'text'
						required = { true }
						disabled = { false }
					/>
					<InputCustom
						id = 'email'
						name = 'email'
						label = 'Correo electrónico'
						type = 'email'
						required = { true }
						disabled = { false }
					/>
					<span className='smallTextItalic'>
						<strong>Importante:</strong> Debes de registrarte con un correo
						gmail.
					</span>
					<InputPasswordCustom
						name='password'
						label='Contraseña'
					/>
					<span className='smallTextItalic'>
						<strong>Importante:</strong> La contraseña debe tener por lo menos 6
						caracteres.
					</span>

					<div className='mt-1'>
						<ButtonPrimary type='submit'>Guardar</ButtonPrimary>
					</div>
				</form>
			</FormProvider>
			<div className='mt-3'>
				<span className='primaryText textNormal'>
					Sinaptico te apoya con la gestión de tus proyectos y tareas.
				</span>
			</div>
		</RegisterFrame>
	);
};

export default RegisterPage;
