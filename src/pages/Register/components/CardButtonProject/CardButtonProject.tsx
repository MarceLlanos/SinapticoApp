
import React from 'react';
import './style/cardButton.css';
import { useNavigate } from 'react-router-dom';
import { PrivateDashboardRoutes } from '@/models';

interface ICardButtonProjectProps {
	projectRelease: string;
	materia: string;
	proyecto: string;
	project_id: string;
	uid: string
}

const CardButtonProject: React.FC<ICardButtonProjectProps> = (props) => {
	const { materia, proyecto, projectRelease, project_id, uid } = props;
	const navigate = useNavigate();
	
	const goToProjectDashboard = () => {
		navigate(
			`/${PrivateDashboardRoutes.DASHBOARD}/${project_id}/${uid}`,
			{ replace: true, state: project_id }
		)
	}

	return (
		<div className="cardContainer grow" onClick={goToProjectDashboard}>
			<div className="imageCardContainer">
				<img src="../src/assets/icons/users.svg" alt="Siluetas de un grupo de usuarios" />
			</div>
			<div className="descriptionCardContainer greyDarkText textLight">
				<span>{ projectRelease }</span>
				<p>Equipo</p>
				<p>Materia: { materia }</p>
				<p>Proyecto: { proyecto }</p>
			</div>
		</div>
	);
}

export default CardButtonProject;
