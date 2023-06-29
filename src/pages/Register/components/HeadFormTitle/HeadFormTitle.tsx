import React from 'react';
import './styles/HeadFormTitle.css';

export interface HeadFormTitleProps {
	title: string;
}

const HeadFormTitle: React.FC<HeadFormTitleProps> = ({ title }) => {
	return <div className='headFormTitle greyDarkText'>{title}</div>;
};

export default HeadFormTitle;
