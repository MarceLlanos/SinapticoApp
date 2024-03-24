
import React from 'react';
import './style/index.css';
import { Box } from '@mui/material';

interface ICommentProps {
	comment: string;
	userName: string;
}

const Comment: React.FC<ICommentProps> = ({comment, userName}) => {
	return (
		<Box component="section" sx={{ p: 1, border: '0.5px solid grey', fontSize: '0.8rem' }}>
			<h4 className='textBold'>{ userName }Frank Murray</h4>
			<p>{ comment }Se realizo la tarea 01, investigando en internet y consultando el libro mensionado por el Docente</p>
		</Box>
	);
}

export default Comment;
