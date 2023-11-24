import { TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { DataProject, PrivateRegisterRoutes, Project } from '@/models';
import { ButtonPrimary } from '@/styled-components';
import { FormFrame, HeadFormTitle } from '../../components';

import './styles/DataProjectPage.css';

import { createProjectDocService } from '@/services/projectDocument.service';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@/services';
import { dateProjectVerification } from '@/helpers/dateProjectVerification.helper';

export interface DataProjectPageProps {}

const DataProjectPage: React.FC<DataProjectPageProps> = () => {
	const navigation = useNavigate();
	

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DataProject>();

	const handleSubmitRegister: SubmitHandler<DataProject> = async data => {
		const { assigment, description, nameProject, proffessorName, dateDeliverProject} = data;
		const date = new Date(dateDeliverProject);
		if (!dateProjectVerification(dateDeliverProject)) {
			return ``
		} else {
			const dataRef = {
				assigment,
				dateDeliverProject: date,
				description,
				nameProject,
				proffessorName,
			};
			await createProjectDocService(dataRef);
			navigation(
				`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.TEAMCODE}`,
				{ replace: true }
			);
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
					{...register('nameProject', {
						required: 'Nombre del proyecto es requerido',
						minLength: 10,
					})}
					error={errors.nameProject ? true : false}
				/>
				{errors.nameProject && (
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
					{...register('proffessorName', {
						required: 'El nombre del docente es requerido',
					})}
					error={errors.proffessorName ? true : false}
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
					{...register('dateDeliverProject', {
						required: 'La fecha de entrega del proyecto es requerido',
					})}
					error={errors.dateDeliverProject ? true : false}
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
