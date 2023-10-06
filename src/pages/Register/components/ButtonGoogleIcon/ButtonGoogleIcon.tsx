import React from 'react';
import './styles/ButtonGoogleIcon.css';
import { ButtonIcon } from '@/styled-components';

export interface ButtonGoogleIconProps {
	handleClick: any;
	title: String;
	iconLink: string;
}

const ButtonGoogleIcon: React.FC<ButtonGoogleIconProps> = ({
	handleClick,
	title,
	iconLink
}) => {
	return (
		<ButtonIcon onClick={handleClick} className='buttonGoogle'>
			<img
				src={iconLink}
				alt='Google icon'
				className='googleIcon'
			/>
			{title}
		</ButtonIcon>
	);
};

export default ButtonGoogleIcon;
