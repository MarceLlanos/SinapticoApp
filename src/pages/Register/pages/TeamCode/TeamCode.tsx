import { codeGenerator } from '@/helpers';
import { useEffect, useState } from 'react';
import { FormFrame, HeadFormTitle } from '../../components';
import { TextField } from '@mui/material';
import { ButtonPrimary } from '@/styled-components';

interface ITeamCodeProps {}

const TeamCode: React.FC<ITeamCodeProps> = props => {
	const [codeGenerated, setCodeGenerated] = useState<String>('');

	const handleOnClick = () => {
		const code = codeGenerator();
		console.log(typeof codeGenerated);
		setCodeGenerated(code);
	};
	useEffect(() => {
		setCodeGenerated(codeGenerated);
	}, [codeGenerated]);

	return (
		<FormFrame>
			<HeadFormTitle title='Añadir miembros a tu equipo de trabajo. (Importante)' />
			<span className='greyText mt-3'>
				Usa el siguiente código para que los demas miembros se puedan sumar a tu
				equipo.
			</span>
			<form>
				<TextField
					id='outlined-code-input'
					label='Codigo del Equipo'
					type='text'
					margin='normal'
					InputLabelProps={{
						shrink: true,
					}}
					value='CHY4'
				/>
				<ButtonPrimary type='submit'>Copiar</ButtonPrimary>
			</form>
			<span className=' greyText mt-3'>
				Este codigo es importante para que sumes integrantes a tu equipo.
				<br className=' mt-1'></br>
				Lo puedes obtener también ingresando a la sección “Equipo” en el
				escritorio de trabajo de Sinaptico.
			</span>

			<ButtonPrimary>Continuar</ButtonPrimary>
		</FormFrame>
	);
};

export default TeamCode;
