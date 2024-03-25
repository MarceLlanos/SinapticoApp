
import React from 'react';
import './style/index.css';
import { Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useGetTotalTasksProject, useGetTotalTasksStateProject } from '../../hooks';


interface IDoughnutChartCustomProps {

}

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChartCustom: React.FC<IDoughnutChartCustomProps> = (props) => {
    const { totalTasks } = useGetTotalTasksProject();
    const { totalTasksState } = useGetTotalTasksStateProject('Terminadas');
    const tasksToDo = totalTasks - totalTasksState;

    const data = {
        labels: ['terminadas', 'Por hacer'],
        datasets: [
            {
                data: [totalTasksState, tasksToDo],
                backgroundColor: ['#F1A007', '#F4F6FA'],
            },
        ],
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                height: '300px'
            }}
        >
            <Doughnut data={data}/>
        </Box>
    );
}

export default DoughnutChartCustom;
