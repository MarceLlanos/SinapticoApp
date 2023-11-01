
import React from 'react';
import { Box, Divider } from '@mui/material';
import { capitalizeFirstLetter, percentageFinishedWork } from '@/helpers';
import './style/index.css';

interface IStaticCardsProps {
    difficulty: string;
    doneTask: number;
    totalTask?: number;
}

const StatCards: React.FC<IStaticCardsProps> = ({ difficulty, doneTask, totalTask }) => {
    

    return (
        <Box
            width='calc(100%)'
            className='textNormal greyDarkText'
            sx={{
                borderTop: '0.5px solid var(--dark-grey-text)',
                borderBottom: '0.5px solid var(--dark-grey-text)',
                p: '4px 0',
            }}
        >
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                sx={{p: '4px'}}
            >
                <span>Grado de dificultad</span>
                <span className={`${difficulty}`} >{ capitalizeFirstLetter(difficulty) }</span>
            </Box>
            <Divider />
            {
                difficulty === 'imposible'
                    ? (
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Box>
                                <p className='textBold taskText'>{ doneTask } tareas</p>
                            </Box>
                        </Box>
                    )
                    : (
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box>
                                <p className='textBold taskText'>{ doneTask } de { totalTask }</p>
                                <span className='spanText'>Tareas terminadas</span>
                            </Box>
                            <p className='primaryText percentageText textBold'>{ percentageFinishedWork(totalTask, doneTask) } %</p>
                        </Box>
                    )
            }
        </Box>
    );
}

export default StatCards;
