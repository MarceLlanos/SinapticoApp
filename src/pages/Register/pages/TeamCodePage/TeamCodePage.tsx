import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Chip, TextField } from '@mui/material';

import { codeGenerator } from '@/helpers';
import { FormFrame, HeadFormTitle } from '../../components';
import { PrivateRegisterRoutes, TeamCode } from '@/models';

import { ButtonPrimary } from '@/styled-components';

import './style/index.css';
import { useNavigate } from 'react-router-dom';

interface ITeamCodePageProps {}

const TeamCodePage: React.FC<ITeamCodePageProps> = props => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<TeamCode>();
	const [copiedValue, setCopiedValue] = useState<Boolean>(false);

	const handleCopieOnClick: SubmitHandler<TeamCode> = (data) => {
		const { value } = data;

		const textArea = document.createElement('textarea');
		textArea.value = value;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand('copy');
		document.body.removeChild(textArea);
		setCopiedValue(true);
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
					value='CHY4'
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
				<ButtonPrimary onClick={() => navigate(PrivateRegisterRoutes.CONFIGUREDRIVE)}>Continuar</ButtonPrimary>
			</div>
		</FormFrame>
	);
};

export default TeamCodePage;
