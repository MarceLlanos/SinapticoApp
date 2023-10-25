
import React, { Fragment } from 'react';
import './style/index.css';
import { BarTitle, DashboardFrameContainer } from '../../components';
import { isFulfilled } from '@reduxjs/toolkit';

interface IDriveConfigurationPageProps {

}

const DriveConfigurationPage: React.FC<IDriveConfigurationPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <BarTitle title='Archivos del proyecto en el repositorio Google Drive' />
            <div className="driveContainer">
                <iframe
                    title="Archivo de Google Drive"
                    src='https://drive.google.com/drive/folders/1jZh3RxIVELEy7lZL9wNCK0Fu5V46X8h3?usp=sharing'
                    width='100%'
                    height={510}
                    frameBorder={0}
                    allowFullScreen
                >
                </iframe>
            </div>
        </DashboardFrameContainer>
    );
}

export default DriveConfigurationPage;
