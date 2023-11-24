
import React, { useState } from 'react';
import './style/index.css';
import { RegisterFrame } from '../../components';
import { ButtonGrey, ButtonPrimary, LabelTitle } from '@/styled-components';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PrivateRegisterRoutes } from '@/models';


interface IJoinTeamPageProps {

}

const JoinTeamPage: React.FC<IJoinTeamPageProps> = () => {

	const { handleSubmit, control, setValue } = useForm();
	const [showHoverText, setShowHoverText] = useState(false);
	const navigate = useNavigate();

	const handleInputPaste = () => {
		navigator.clipboard.readText().then((clipboardText:string) => {
			setValue('textField', clipboardText)
		})
	}

	const onSubmit = (data: any) => {
		console.log(data);
	}
	return (
		<RegisterFrame>
			<LabelTitle>Únete a un Equipo</LabelTitle>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='columnContainerCentered mt-3'
			>
				<Controller
					name='textField'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<div
							className='input-wrapper'
							onMouseEnter={() => setShowHoverText(true)}
							onMouseLeave={() => setShowHoverText(false)}
						>				
							<TextField
								{...field}
								id='textField'
								label='Código de equipo'
								type='text'
								margin='normal'
								onClick={handleInputPaste}
								fullWidth
							/>
							{showHoverText && (
								<div className='hover-text textLight'>Haz clic para pegar el código</div>
							)}
						</div>
					)}
				/>
				
				{/* {errors.teamCode ? (
					<span className='smallTextItalic redText'>
						<strong>Error:</strong> Debes ingresar el código de 5 digitos facilitado por el encargado de tu equipo.
					</span>
				) : ( */}
					<span className='smallTextItalic'>
						<strong>Importante:</strong> Debes ingresar el código que te será facilitado por el <br/>encargado de tu equipo.
					</span>
				{/* )} */}

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
