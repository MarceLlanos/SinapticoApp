import { PrivateRegisterRoutes } from '@/models';
import { ButtonTransparent } from '@/styled-components';
import { useNavigate } from 'react-router-dom';

import { InformationBody, NavbarCover } from './components';
import { CoverPageBlur, CoverPageContainer } from './styled-components';

import './styles/CoverPage.css';

export interface CoverPageProps {}

const CoverPage: React.FC<CoverPageProps> = () => {
	const navigate = useNavigate();
	
	return (
		<CoverPageContainer>
			<CoverPageBlur>
				<NavbarCover />
				<InformationBody />
				<div className='buttonContainer'>
					<ButtonTransparent
						onClick={() =>
							navigate(`/${PrivateRegisterRoutes.PRIVATE}/${PrivateRegisterRoutes.CREATEPROJECT}`, { replace: true })
						}
					>
						<span>Crear un equipo de trabajo</span>
					</ButtonTransparent>
					<ButtonTransparent
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
