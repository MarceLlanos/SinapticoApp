
import React from 'react';
import './style/configureDrive.css';

import { ButtonGoogleIcon, HeadFormTitle, SideImageFrame } from '../../components';
import { TextField } from '@mui/material';
import { ButtonGrey, ButtonPrimary } from '@/styled-components';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PrivateRegisterRoutes } from '@/models';

interface IConfigureDrivePageProps {

} 

const ConfigureDrivePage: React.FC<IConfigureDrivePageProps> = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, control, setValue } = useForm();

    const openGoogleDrive = () => {
         window.open('https://drive.google.com', '_blank');
    }

    const handleInputPaste = () => {
        navigator.clipboard.readText().then((clipboardText:string) => {
            setValue('link', clipboardText)
        })
    }

    const handleOnSave = () => {
        console.log('form');
    }

    return (
        <SideImageFrame image='fondoGoogleDrive.svg'>
            <HeadFormTitle title='Configuración de Google Drive'/>
            <article className='textLight mt-1 greyDarkText'>
                <h3 className='textLight'>Paso 1</h3>
                <ul>
                    <li>Ve a tu drive <em className='italic'>(Con la cuenta gmail con la que te registraste en este equipo)</em></li>
                    <li>Dar click en Guardar y pasar al Paso 2.</li>
                    <li>Crea una carpeta exclusiva para trabajar en este proyecto</li>
                    <li>Click derecho sobre la carpeta y selecciona “Obtener enlace para compartir”</li>
                    <li>Obtendras un link en el paso anterior, copialo y pegalo aquí en el espacio <strong>Enlace</strong></li>
                </ul>
            </article>
            <div className="driveButtonContainer">
                <ButtonGoogleIcon
                    handleClick={openGoogleDrive}
                    title='Ir a Google Drive'
                    iconLink='../../src/assets/icons/drive.png'
                />
            </div>
            <form className='driveForm' onSubmit={handleSubmit(handleOnSave)}>
                <Controller
                    name='link'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id='link'
                            label='Pega el link aquí… '
                            type='text'
                            onClick={handleInputPaste}
                            sx={{
                                marginRight: "10px"
                            }}
                            {...register('link', {
                            	required: 'Debe ingresar el link de drive donde se realizara el proyecto!',
                            // 	pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/,
                            })}
                            // error={errors.link ? true : false}
                        />
                    )}
                />
                <ButtonGrey type='submit'>Guardar</ButtonGrey>
            </form>
            <article className='textLight greyDarkText mt-1'>
                <h3 className='textLight mb-1'>Paso 2</h3>
                <p>Crea los archivos que necesitaras para el proyecto.</p>
                <p className='ml-3'>En la carpeta exclusiva para este proyecto, crea todos los documentos que necesitaras.</p>
                <p className='ml-3'>Estos pueden ser:</p>
                <ul className='ml-3'>
                    <li>Google Docs (Similar a Word)</li>
                    <li>Google Sheets (Similar a Excel)</li>
                    <li>Google Slides (Similar a Power Point)</li>
                </ul>
                <p className='ml-3 mb-1'>Ademas que puedes usarlo para almacenar PDF’s, imágenes, videos, etc.</p>
            </article>
            <ButtonPrimary onClick={() => navigate(PrivateRegisterRoutes.TEAMLIST, { replace: true }) }>Continuar y terminar</ButtonPrimary>

        </SideImageFrame>
    );
}

export default ConfigureDrivePage;
