import React, { useEffect, useState } from 'react';
import './style/index.css';
import { RegisterFrame } from '../../components';
import { ButtonGrey, ButtonPrimary, LabelTitle } from '@/styled-components';
import { TextField } from '@mui/material';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
	PrivateDashboardRoutes,
	PrivateRegisterRoutes,
	Project,
	UserTeamInput
} from '@/models';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { joinTeam } from '@/redux/asyncState/team.async';
import { getCurrentUser } from '@/services';
import { getProjectsByUser } from '@/redux/asyncState/project.async';

interface IJoinTeamPageProps {}

const JoinTeamPage: React.FC<IJoinTeamPageProps> = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const currentUser = getCurrentUser();
	const { register, handleSubmit, control, setValue } = useForm();

	const uid = currentUser?.uid;
	const [hasProjects, setHasProjects] = useState(false);
	
	const userHasProjects = async ():Promise<Project[]> => {
		const projects = await dispatch(getProjectsByUser(uid!)).unwrap();
		return projects;
	}

	const handleInputPaste = () => {
		navigator.clipboard.readText().then((clipboardText:string) => {
			setValue('code', clipboardText)
		})
	}

	const joinTeamAction: SubmitHandler<FieldValues> = async (data) => {
		try {
			const { code_project } = data;
			if (code_project !== '') {
				const userData: UserTeamInput = {
					user_id: uid!,
					code_project: code_project
				}
				const { isSuccess, id_project } = await dispatch(joinTeam(userData)).unwrap();
				if (isSuccess) {
					navigate(
						`/${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.DASHBOARD}/${id_project}`,
						{ replace: true, state: id_project }
					)
				}
			} 
			
		} catch (error) {
			throw error;
		}
	}

	useEffect(() => {
		userHasProjects.length > 0
			? setHasProjects(true)
			: setHasProjects(false)
	}, [hasProjects]);
	
	return (
		<RegisterFrame>
			<LabelTitle>Únete a un Equipo</LabelTitle>

			<form
				className='columnContainerCentered mt-3'
				onSubmit={handleSubmit(joinTeamAction)}
			>
				<Controller
					name='code_project'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<TextField
							{...field}
							id='code_project'
							label='Código de equipo'
							type='text'
							onClick={handleInputPaste}
							sx={{
								marginRight: "10px"
							}}
							{...register('code_project', {
								required: 'Debe ingresar el link de drive donde se realizara el proyecto!',
							})}
						/>
					)}
				/>
				<span className='smallTextItalic'>
					<strong>Importante:</strong> Debes ingresar el código que te será facilitado por el <br/>encargado de tu equipo.
				</span>

				<div className='rowContainer mb-3 mt-1'>
					<ButtonPrimary type='submit'>Siguiente</ButtonPrimary>
				</div>
			</form>
			
			<div className='columnContainer mt-3'>
				<span className='greyTextCustom mb-1 '>Si no tienes un equipo de trabajo, puedes crear uno o seguir <br/>trabajando en los que ya estas registrado.</span>
				<ButtonGrey
					className='mb-1'
					onClick={() =>
							navigate(`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`, { replace: true })
						}
				>
					Crear equipo
				</ButtonGrey>

				<ButtonGrey
					onClick={() => navigate(`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.TEAMLIST}`, { replace: true })}
				>
					Ver tus equipos
				</ButtonGrey>
			</div>
		</RegisterFrame>
	);
}

export default JoinTeamPage;