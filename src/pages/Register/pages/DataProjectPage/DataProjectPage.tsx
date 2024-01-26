import { Alert } from '@mui/material';
import { FormProvider, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PrivateRegisterRoutes, ProjectInput } from '@/models';
import { ButtonPrimary } from '@/styled-components';
import { FormFrame, HeadFormTitle, InputCustom } from '../../components';

import './styles/DataProjectPage.css';

import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@/services';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { createProject } from '@/redux/asyncState/project.async';
import { getProject } from '@/services/projectDocument.service';
import { dataProjectFormSchema } from './schema/dataProjectForm.schema';


export interface DataProjectPageProps {}

const DataProjectPage: React.FC<DataProjectPageProps> = () => {
	const navigation = useNavigate();
	const currentUSer = getCurrentUser();
	const dispatch = useDispatch<AppDispatch>();
	const uid = currentUSer?.uid!;

	const {
		register,
		handleSubmit,
		formState,
		reset
	} = useForm<ProjectInput>({
		defaultValues: {
			user_id: '',
			name_proj: '',
			description: '',
			assigment: '',
			professor: '',
			date_release: new Date()
		},
		mode: 'onChange',
		resolver: yupResolver(dataProjectFormSchema) as Resolver<ProjectInput>
	});

	const formContextValues = { register, formState };

	const handleSubmitRegister: SubmitHandler<ProjectInput> = async data => {
		const {
			name_proj,
			description,
			assigment,
			professor,
			date_release,
		} = data;
		const projectData: ProjectInput = {
			user_id: uid,
			name_proj,
			description,
			assigment,
			professor,
			date_release,
		}
		const { isSuccess, message, id_project } = await dispatch(createProject(projectData)).unwrap();
		const project = await getProject(id_project!);

		if (isSuccess) {
			navigation(
				`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.TEAMCODE}`,
				{
					replace: true,
					state: {
						id_project,
						codeProject: project?.code_project
					}
				}
			);
		} else {
			<Alert severity="error">{ message }</Alert>
		}
		reset();
	};

	return (
		<FormFrame>
			<HeadFormTitle title='Datos básicos del Proyecto que trabajaras con tu equipo. (Importante) ' />
			<FormProvider {...formContextValues as any}>
				<form
					onSubmit={handleSubmit(handleSubmitRegister)}
					className='columnContainer containerForm'
				>
					<InputCustom
						id = 'name_proj'
						name = 'name_proj'
						label = 'Nombre del proyecto'
						type = 'text'
						required = { true }
						disabled = { false }
					/>
					<InputCustom
						id = 'description'
						name = 'description'
						label = 'Breve descripción del proyecto'
						type='text'
						maxRows={4}
						required = { true }
						disabled = { false }
					/>
					<InputCustom
						id = 'assigment'
						name = 'assigment'
						label = 'Nombre de la materia'
						type = 'text'
						required = { true }
						disabled = { false }
					/>
					<InputCustom
						id = 'professor'
						name = 'professor'
						label = 'Nombre del docente'
						type = 'text'
						required = { true }
						disabled = { false }
					/>
					<InputCustom
						id = 'date_release'
						name = 'date_release'
						label = 'Fecha de entrega del proyecto'
						type='date'
						inputLabelProps={{
							shrink: true,
						}}
						required = { true }
						disabled = { false }
					/>

					<span className='greyTextCustom mt-3'>
						Revisa bien el rol y las tareas que tienes que cumplir como encargado
						del equipo. <br />
						La aplicación te brindara ayuda y te guiara durante el camino, Buena
						suerte!!!
					</span>
					<div className='button'>
						<ButtonPrimary type='submit'>Continuar</ButtonPrimary>
					</div>
				</form>
			</FormProvider>
		</FormFrame>
	);
};

export default DataProjectPage;
