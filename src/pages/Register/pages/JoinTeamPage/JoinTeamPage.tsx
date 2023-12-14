import React, { useEffect, useState } from 'react';
import './style/index.css';
import { RegisterFrame } from '../../components';
import { ButtonGrey, ButtonPrimary, LabelTitle } from '@/styled-components';
import { TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PrivateDashboardRoutes, PrivateRegisterRoutes, Project, UserTeamInput } from '@/models';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { joinTeam } from '@/redux/asyncState/team.async';
import { getCurrentUser } from '@/services';
import { getProjectsByUser } from '@/redux/asyncState/project.async';

interface IJoinTeamPageProps {

}

const JoinTeamPage: React.FC<IJoinTeamPageProps> = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const currentUSer = getCurrentUser();

	const uid = currentUSer?.uid;
	const { register, handleSubmit} = useForm<UserTeamInput>();
	const [showHoverText, setShowHoverText] = useState(false);
	const [hasProjects, setHasProjects] = useState(false);
	const [emptyCode, setEmptyCode] = useState(false)
	
	const userHasProjects = async ():Promise<Project[]> => {
		const projects = await dispatch(getProjectsByUser(uid!)).unwrap();
		return projects;
	}

	const joinTeamAction: SubmitHandler<UserTeamInput> = async (data) => {
		console.log(data.code_project);
		if (data.code_project !== '') {
			setEmptyCode(true);
			const userData: UserTeamInput = {
				user_id: uid!,
				code_project: data.code_project
			}
			const { isSuccess, message, id_project } = await dispatch(joinTeam(userData)).unwrap();
			navigate(
				`/${PrivateDashboardRoutes.PRIVATE}/${PrivateDashboardRoutes.DASHBOARD}/project=${id_project}`,
				{ replace: true, state: id_project }
			)
			return {
				isSuccess,
				message
			}
		} else {
			return;
		}

	}

	useEffect(() => {
		userHasProjects.length > 0
			? setHasProjects(true)
			: setHasProjects(false)
	}, [hasProjects])
	
	return (
		<RegisterFrame>
			<LabelTitle>Únete a un Equipo</LabelTitle>

			<form
				onSubmit={handleSubmit(joinTeamAction)}
				className='columnContainerCentered mt-3'
			>
			<div
				className='input-wrapper'
				onMouseEnter={() => setShowHoverText(true)}
				onMouseLeave={() => setShowHoverText(false)}
			>	
				<TextField
					id='textField'
					label='Código de equipo'
					type='text'
					margin='normal'
					fullWidth
					{...register('code_project', {
					required: 'Debe ingresar un código valido',
					minLength: 5,
					})}
				/>
				{showHoverText && (
					<div className='hover-text textLight'>Ingrese el código de equipo</div>
				)}
			</div>
				
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
					disabled={ hasProjects }
					onClick={() => navigate(`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.TEAMLIST}`, { replace: true })}
				>
					Ver tus equipos
				</ButtonGrey>
			</div>
		</RegisterFrame>
	);
}

export default JoinTeamPage;