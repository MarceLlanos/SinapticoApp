
import React from 'react';
import './style/cardButton.css';
import { useNavigate } from 'react-router-dom';
import { PrivateDashboardRoutes } from '@/models';
import { formatDate } from '@/helpers/formatDate.helper';

interface ICardButtonProjectProps {
    projectRelease: Date;
    materia: string;
    proyecto: string;
    project_id: string;
}

const CardButtonProject: React.FC<ICardButtonProjectProps> = (props) => {
    const { materia, proyecto, projectRelease, project_id } = props;
    const navigate = useNavigate();
    const date = formatDate(projectRelease);
    
    const goToProjectDashboard = () => {
        navigate(
				`/${PrivateDashboardRoutes.DASHBOARD}/project=${project_id}`,
				{ replace: true, state: project_id }
			)
    }

    return (
        <div className="cardContainer grow" onClick={goToProjectDashboard}>
            <div className="imageCardContainer">
                <img src="../src/assets/icons/users.svg" alt="Siluetas de un grupo de usuarios" />
            </div>
            <div className="descriptionCardContainer greyDarkText textLight">
                <span>{ date }</span>
                <p>Equipo</p>
                <p>Materia: { materia }</p>
                <p>Proyecto: { proyecto }</p>
            </div>
        </div>
    );
}

export default CardButtonProject;
