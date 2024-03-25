
import React from 'react';
import { Box, Divider } from '@mui/material';
import { capitalizeFirstLetter, percentageFinishedWork } from '@/helpers';
import './style/index.css';
import { useParams } from 'react-router-dom';
import { difficultyTask } from '@/models';
import { useGetTotalDoneTasksByDifficulty, useGetTotalTaskByDifficulty } from '../../hooks';

interface IStaticCardsProps {
    difficulty: string;
    doneTask: number;
}

const StatCards: React.FC<IStaticCardsProps> = ({ difficulty, doneTask }) => {
    const { project } = useParams();
    const { totalTask } = useGetTotalTaskByDifficulty({ id_project: project!, levelDifficulty: difficulty });
    const { totalDoneTask } = useGetTotalDoneTasksByDifficulty({id_project: project!, levelDifficulty: difficulty, stateTask: 'Terminadas'})

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
                difficulty === difficultyTask.IMPOSIBLE
                    ? (
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Box>
                                <p className='textBold taskText'>{ totalTask } tareas</p>
                            </Box>
                        </Box>
                    )
                    : (
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box>
                                <p className='textBold taskText'>{ totalDoneTask } de { totalTask }</p>
                                <span className='spanText'>Tareas terminadas</span>
                            </Box>
                            <p className='primaryText percentageText textBold'>{ percentageFinishedWork(totalTask, totalDoneTask) } %</p>
                        </Box>
                    )
            }
        </Box>
    );
}

export default StatCards;
