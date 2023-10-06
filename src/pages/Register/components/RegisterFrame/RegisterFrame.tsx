import React from 'react';
import './styles/RegisterFrame.css';
import { LogoSinpatico } from '../../styled-components';

export interface RegisterFrameProps {
	children: JSX.Element[] | JSX.Element;
}

const RegisterFrame: React.FC<RegisterFrameProps> = ({ children }) => {
	return (
		<div className='formContainer'>
			<div className='formContainerItem'>{children}</div>
			<div className='formContainerItem'>
				<LogoSinpatico src='../src/assets/images/logo-color.svg' />
			</div>
		</div>
	);
};

export default RegisterFrame;
