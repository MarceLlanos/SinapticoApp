
import React, { Fragment, useEffect, useState } from 'react';
import './style/index.css';
import { BarTitle, DashboardFrameContainer } from '../../components';
import { isFulfilled } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProject } from '@/services';
import { Project } from '@/models';

interface IDriveConfigurationPageProps {

}

const DriveConfigurationPage: React.FC<IDriveConfigurationPageProps> = (props) => {
    const { project } = useParams();
    const [driveLink, setDriveLink] = useState<string>('');

    useEffect(() => {
        async () => {
            try {
                const data = await getProject(project!);
                setDriveLink(data.drive_link);
            } catch (error) {
                throw error;
            }
        }
    }, [])
    
    return (
        <DashboardFrameContainer>
            <BarTitle title='Archivos del proyecto en el repositorio Google Drive' />
            <div className="driveContainer">
                <iframe
                    title="Archivo de Google Drive"
                    src={ driveLink }
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
