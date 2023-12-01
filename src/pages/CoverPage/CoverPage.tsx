import { PrivateRegisterRoutes } from '@/models';
import { ButtonTransparent } from '@/styled-components';
import { useNavigate } from 'react-router-dom';

import { InformationBody, NavbarCover } from './components';
import { CoverPageBlur, CoverPageContainer } from './styled-components';

import './styles/CoverPage.css';
import { useRef } from 'react';

export interface CoverPageProps {}

const CoverPage: React.FC<CoverPageProps> = () => {
	const createProjectRef = useRef<HTMLButtonElement>(null);
	const joinTeamRef = useRef<HTMLButtonElement>(null);
	const navigate = useNavigate();

	return (
		<CoverPageContainer>
			<CoverPageBlur>
				<NavbarCover />
				<InformationBody />
				<div className='buttonContainer'>
					<ButtonTransparent
						ref={createProjectRef}
						id='create-project'
						onClick={() =>
							navigate(`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`, { replace: true })
						}
					>
						<span>Crear un equipo de trabajo</span>
					</ButtonTransparent>
					<ButtonTransparent
						ref={joinTeamRef}
						id='joint-team'
						onClick={() =>
							navigate(`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.JOINTEAM}`, { replace: true })
						}
					>
						<span>Unirse a un Equipo</span>
					</ButtonTransparent>
				</div>
			</CoverPageBlur>
		</CoverPageContainer>
	);
};

export default CoverPage;
