
import React from 'react';
import './style/index.css';
import { BarTitle, DashboardFrameContainer } from '../../components';
import { Box } from '@mui/material';
import { DoughnutChartCustom, StatCards, TableDailyReport, TableStats } from './components';
import { difficultyTask } from '@/models/task.model';

interface IStaticsPageProps {

}

const StatsPage: React.FC<IStaticsPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <BarTitle title='Estadísticas' />
            <Box
                className="greyDarkText"
                sx={{
                    p: 2,
                    overflow: 'scroll',
                    maxHeight: 'calc(100dvh - 23dvh)'
                }}
            >
                <h3 className='textNormal mb-3'>Estado actual de las tareas del proyecto</h3>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '30px'
                    }}
                >
                    <StatCards difficulty={difficultyTask.ALTA} doneTask={ 10 } totalTask={15} />
                    <StatCards difficulty={difficultyTask.MEDIA} doneTask={ 8 } totalTask={15} />
                    <StatCards difficulty={difficultyTask.BAJA} doneTask={ 3 } totalTask={15} />
                    <StatCards difficulty={difficultyTask.IMPOSIBLE} doneTask={ 4 } />
                </Box>
                <h3 className='textNormal mb-1'>Actividad de los miembros del equipo de trabajo</h3>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '30px'
                    }}
                >
                    <Box textAlign='center'>
                        <h4 className='textNormal mb-1'>Tareas de los usuarios por estado</h4>
                        <TableStats />
                    </Box>
                    <Box textAlign='center'>
                        <h4 className='textNormal mb-1'>Actividad en los reportes diarios</h4>
                        <TableDailyReport />
                    </Box>
                </Box>
                <Box
                    className='textBold'
                    display='flex'
                    alignItems='center'
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '30px'
                    }}
                >
                    <Box
                        textAlign='center'
                    >
                        <DoughnutChartCustom />
                        <span className='mt-1'>Avance total del proyecto</span>
                    </Box>
                    <Box className='stats'>
                        <Box mb='8px'>
                            <span className='greenTextSpan'>Inicio del Proyecto: </span>
                            <span>15 - Junio - 2018</span>
                        </Box>
                        <Box>
                            <span className='blueText'>Entrega del Proyecto: </span>
                            <span>10 - Julio - 2018</span>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </DashboardFrameContainer>
    );
}

export default StatsPage;