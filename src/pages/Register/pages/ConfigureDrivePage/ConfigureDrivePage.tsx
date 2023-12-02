
import React, { useEffect, useState } from 'react';
import './style/configureDrive.css';

import { ButtonGoogleIcon, HeadFormTitle, SideImageFrame } from '../../components';
import { Chip, TextField } from '@mui/material';
import { ButtonGrey, ButtonPrimary } from '@/styled-components';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { PrivateDashboardRoutes, PrivateRegisterRoutes } from '@/models';
import { AppDispatch } from '@/redux';
import { useDispatch } from 'react-redux';
import { addDriveToProject } from '@/redux/asyncState/project.async';

interface IConfigureDrivePageProps {

} 

const ConfigureDrivePage: React.FC<IConfigureDrivePageProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();

    const [savedDrive, setsavedDrive] = useState<Boolean>(false);
    const { register, handleSubmit, control, setValue } = useForm();
    const urlData = location.state;

    const openGoogleDrive = () => {
         window.open('https://drive.google.com', '_blank');
    }

    const handleInputPaste = () => {
        navigator.clipboard.readText().then((clipboardText:string) => {
            setValue('link', clipboardText)
        })
    }

    const savedDriveLinkToProject: SubmitHandler<FieldValues> = async (data) => {
        const { drive_link } = data;
        const dataLink = {
            id_project: urlData,
            drive_link
        }
        const result = await dispatch(addDriveToProject(dataLink)).unwrap();
        const { isSuccess, message } = result;
        isSuccess ? setsavedDrive(isSuccess) : setsavedDrive(isSuccess);
    }

    useEffect(() => {
        setTimeout(() => {
            setsavedDrive(false);
        }, 3000);
    }, [savedDrive]);
    

    const goToNexPage = async () => {
        navigate(
            `/${PrivateDashboardRoutes.DASHBOARD}/project=${urlData}`,
            { replace: true, state: urlData }
        )
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
            <form className='driveForm' onSubmit={handleSubmit(savedDriveLinkToProject)}>
                <Controller
                    name='drive_link'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id='drive_link'
                            label='Pega el link aquí… '
                            type='text'
                            onClick={handleInputPaste}
                            sx={{
                                marginRight: "10px"
                            }}
                            {...register('drive_link', {
                            	required: 'Debe ingresar el link de drive donde se realizara el proyecto!',
                            })}
                        />
                    )}
                />
                <ButtonGrey type='submit'>Guardar</ButtonGrey>
            </form>
            {
                savedDrive &&
                <Chip 
                    label="Drive agregado con exito!"
                    color="success"
                    variant="outlined"
                    className='mt-1'
                />
            }
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
            <ButtonPrimary
                onClick={goToNexPage}
            >
                Continuar y terminar
            </ButtonPrimary>

        </SideImageFrame>
    );
}

export default ConfigureDrivePage;
