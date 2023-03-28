import { useNavigate } from 'react-router-dom';
import './styles/NavbarCover.css';
import { PublicRegisterRoutes, PublicInformationRoutes } from '@/models';

export interface NavbarCoverProps {}

const NavbarCover: React.FC<NavbarCoverProps> = () => {
	const navigate = useNavigate();

	return (
		<div className='container-list'>
			<a
				className='link'
				onClick={() => navigate(`${PublicRegisterRoutes.LOGIN}`)}
			>
				Ingresar
			</a>
			<a
				className='link'
				onClick={() => navigate(`${PublicInformationRoutes.INFORMATION}`)}
			>
				Información
			</a>
			<a className='link' onClick={() => navigate('/contact')}>
				Contacto
			</a>
		</div>
	);
};

export default NavbarCover;
