
import React, { useEffect, useState } from 'react';
import {
    CardButtonProject,
    HeadFormTitle,
    SideImageFrame
} from '../../components';

import './style/teamList.css';
import { getCurrentUser, getProjectsByUserId } from '@/services';

import { Project } from '@/models';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { getProjectsByUser } from '@/redux/asyncState/project.async';

interface ITeamListPageProps {

}

const TeamListPage: React.FC<ITeamListPageProps> = (props) => {
    const user = getCurrentUser();
    const [projects, setProjects] = useState<Project[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await dispatch(getProjectsByUser(user?.uid!)).unwrap();
                setProjects(data);
            } catch (error) {
                throw error;
            }
        }
        fetchData();
    }, [])
    
    return (
        <SideImageFrame image='Evaluacion-proyectos.png'>
            <HeadFormTitle title='Tus equipos' />
            <h3 className='textLight greyDarkText mt-1'>Selecciona un equipo para trabajar</h3>
            <div className="listContainer mt-3">
                {
                    projects.map((project, index) => (
                        <CardButtonProject
                            key={index}
                            projectRelease={project.date_release!}
                            materia= {project.assigment}
                            proyecto= {project.name_proj}
                            project_id={project.id_project}
                            uid = {user?.uid!}
                        />
                    ))
                }
            </div>
        </SideImageFrame>
    );
}

export default TeamListPage;
