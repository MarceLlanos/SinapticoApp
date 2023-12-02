import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Chip, TextField } from '@mui/material';

import { FormFrame, HeadFormTitle } from '../../components';
import { PrivateRegisterRoutes, TeamCode } from '@/models';

import { ButtonPrimary } from '@/styled-components';

import './style/index.css';
import { useLocation, useNavigate } from 'react-router-dom';

interface ITeamCodePageProps {}

const TeamCodePage: React.FC<ITeamCodePageProps> = props => {
	const navigate = useNavigate();
	const location = useLocation();
	const { id_project, codeProject } = location.state;

	const { register, handleSubmit } = useForm<TeamCode>();
	const [copiedValue, setCopiedValue] = useState<Boolean>(false);

	const handleCopieOnClick: SubmitHandler<TeamCode> = async (data) => {
		try {
			const { value } = data;
			await navigator.clipboard.writeText(value);
			setCopiedValue(true);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setCopiedValue(false);
		}, 3000);
	}, [copiedValue]);
	

	return (
		<FormFrame>
			<HeadFormTitle title='Añadir miembros a tu equipo de trabajo. (Importante)' />
			<div className='mt-1'>
				<span className='greyTextCustom'>
					Usa el siguiente código para que los demás miembros se puedan sumar a
					tu equipo.
				</span>
			</div>
			<form
				onSubmit={handleSubmit(handleCopieOnClick)}
				className='mt-3 inline-row form-container'>
				<TextField
					id='outlined-code-input'
					label='Codigo del Equipo'
					type='text'
					margin='normal'
					InputLabelProps={{
						shrink: true,
					}}
					value={codeProject}
					{...register('value')}
				/>
				<ButtonPrimary type='submit' className='ml-3 mr-3'>
					Copiar código
				</ButtonPrimary>
				{
					copiedValue &&
					<Chip label="Código copiado correctamente!" color="success" variant="outlined" />
				}
			</form>
			
			<span className=' greyText mt-3 '>
				Este codigo es importante para que sumes integrantes a tu equipo.
				<br></br>
				Lo puedes obtener también ingresando a la sección “Equipo” en el
				escritorio de trabajo de Sinaptico.
			</span>
			<div className='mt-6'>
				<ButtonPrimary
					onClick={() =>
						navigate(
							`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CONFIGUREDRIVE}`,
							{
							state: id_project
							}
						)
					}
				>
					Continuar
				</ButtonPrimary>
			</div>
		</FormFrame>
	);
};

export default TeamCodePage;
