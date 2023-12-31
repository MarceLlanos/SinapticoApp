
import React, { useEffect, useState } from 'react';
import './style/index.css';
import { BarTitle, DashboardFrameContainer } from '../../components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Project } from '@/models';
import { AppDispatch } from '@/redux';
import { getAProject } from '@/redux/asyncState/project.async';

interface IDriveConfigurationPageProps {

}

const DriveConfigurationPage: React.FC<IDriveConfigurationPageProps> = (props) => {
    const { project } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const [driveLink, setDriveLink] = useState<string>('');

    const projectData =  async (id_project: string): Promise<Project> => {
        try {
            const data = await dispatch(getAProject(id_project)).unwrap();
            setDriveLink(data.drive_link);
            return data;
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        const fetchData = async () => (projectData(project!));
        fetchData();
    }, []);
    
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
