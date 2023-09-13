import React from 'react';
import './styles/ButtonGoogleIcon.css';
import { ButtonIcon } from '@/styled-components';

export interface ButtonGoogleIconProps {
	handleClick: any;
	title: String;
}

const ButtonGoogleIcon: React.FC<ButtonGoogleIconProps> = ({
	handleClick,
	title,
}) => {
	return (
		<ButtonIcon onClick={handleClick} className='buttonGoogle'>
			<img
				src='../../src/assets/icons/google.svg'
				alt='Google icon'
				className='googleIcon'
			/>
			{title}
		</ButtonIcon>
	);
};

export default ButtonGoogleIcon;
