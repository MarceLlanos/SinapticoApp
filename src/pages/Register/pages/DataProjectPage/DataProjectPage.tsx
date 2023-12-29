import { Alert, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PrivateRegisterRoutes, ProjectInput } from '@/models';
import { ButtonPrimary } from '@/styled-components';
import { FormFrame, HeadFormTitle } from '../../components';

import './styles/DataProjectPage.css';

import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@/services';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { createProject } from '@/redux/asyncState/project.async';
import { getProject } from '@/services/projectDocument.service';


export interface DataProjectPageProps {}

const DataProjectPage: React.FC<DataProjectPageProps> = () => {
	const navigation = useNavigate();
	const currentUSer = getCurrentUser();
	const dispatch = useDispatch<AppDispatch>();
	const uid = currentUSer?.uid!;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProjectInput>();

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

	};

	return (
		<FormFrame>
			<HeadFormTitle title='Datos básicos del Proyecto que trabajaras con tu equipo. (Importante) ' />
			<form
				onSubmit={handleSubmit(handleSubmitRegister)}
				className='columnContainer containerForm'
			>
				<TextField
					id='outlined-project-input'
					label='Nombre del proyecto'
					type='text'
					autoComplete='current-password'
					margin='normal'
					{...register('name_proj', {
						required: 'Nombre del proyecto es requerido',
						minLength: 10,
					})}
					error={errors.name_proj ? true : false}
				/>
				{errors.name_proj && (
					<span className='small-text-italic redText'>
						<strong>Error:</strong>.
					</span>
				)}
				<TextField
					id='outlined-description-input'
					label='Breve descripción del proyecto'
					type='text'
					multiline
					maxRows={4}
					autoComplete='current-password'
					margin='normal'
					{...register('description', {
						required: 'La descripcion de proyecto es requerido',
						minLength: 10,
					})}
					error={errors.description ? true : false}
				/>
				<TextField
					id='outlined-assigment-input'
					label='Nombre de la materia'
					type='text'
					autoComplete='current-password'
					margin='normal'
					{...register('assigment', {
						required: 'El nombre de la materia es requerid',
						minLength: 10,
					})}
					error={errors.assigment ? true : false}
				/>
				<TextField
					id='outlined-proffessor-input'
					label='Nombre del docente'
					type='text'
					autoComplete='current-password'
					margin='normal'
					{...register('professor', {
						required: 'El nombre del docente es requerido',
					})}
					error={errors.professor ? true : false}
				/> 
				<TextField
					id='outlined-date-input'
					label='Fecha de entrega del proyecto'
					type='date'
					autoComplete='current-date'
					margin='normal'
					InputLabelProps={{
						shrink: true,
					}}
					{...register('date_release', {
						required: 'La fecha de entrega del proyecto es requerido',
					})}
					error={errors.date_release ? true : false}
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
		</FormFrame>
	);
};

export default DataProjectPage;
