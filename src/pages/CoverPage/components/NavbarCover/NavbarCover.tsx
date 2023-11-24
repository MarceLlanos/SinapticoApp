import { useNavigate } from 'react-router-dom';
import { PublicRegisterRoutes, PublicInformationRoutes } from '@/models';

import './styles/NavbarCover.css';

export interface NavbarCoverProps {}

const NavbarCover: React.FC<NavbarCoverProps> = () => {
	const navigate = useNavigate();

	return (
		<div className='container-list'>
			<a
				className='link-nav-items'
				onClick={() => navigate(`${PublicRegisterRoutes.LOGIN}`)}
			>
				Ingresar
			</a>
			<a
				className='link-nav-items'
				onClick={() => navigate(`${PublicInformationRoutes.INFORMATION}`)}
			>
				Información
			</a>
			<a className='link-nav-items' onClick={() => navigate('/contact')}>
				Contacto
			</a>
		</div>
	);
};

export default NavbarCover;
