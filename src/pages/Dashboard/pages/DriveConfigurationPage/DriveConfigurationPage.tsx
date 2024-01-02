
import React, { useEffect, useState } from 'react';
import './style/index.css';
import { BarTitle, DashboardFrameContainer } from '../../components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Project } from '@/models';
import { AppDispatch } from '@/redux';
import { getAProject } from '@/redux/asyncState/project.async';
import { updateDriveLinkToSharing } from '@/helpers';

interface IDriveConfigurationPageProps {

}

const DriveConfigurationPage: React.FC<IDriveConfigurationPageProps> = (props) => {
    const { project } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const [driveLink, setDriveLink] = useState<string >('');

    const projectData =  async (id_project: string): Promise<Project> => {
        try {
            const data = await dispatch(getAProject(id_project)).unwrap();
            if (data.drive_link.length > 0) {
                const link = updateDriveLinkToSharing(data.drive_link);
                setDriveLink(link);
            }
            console.log(data);
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
                {
                    driveLink && (
                        <iframe
                            title="Archivo de Google Drive"
                            src={ driveLink }
                            width='100%'
                            height={510}
                            frameBorder={0}
                            allowFullScreen
                        >
                        </iframe>
                    )
                }
            </div>
        </DashboardFrameContainer>
    );
}

export default DriveConfigurationPage;
