import './styles/FormFrame.css';
import { SinapticoImagotipo } from '@/styled-components';

export interface FormFrameProps {
	children: JSX.Element[] | JSX.Element;
}

const FormFrame: React.FC<FormFrameProps> = ({ children }) => {
	return (
		<div className='columnContainer'>
			<div className='headForm'>
				<SinapticoImagotipo
					src={`../src/assets/images/imagotipo-sinaptico.svg`}
					alt='Logo Sinaptico'
				/>
			</div>
			<div className='bodyForm'>{children}</div>
		</div>
	);
};

export default FormFrame;
