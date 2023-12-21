
import React from 'react';
import { BarTitle, DashboardFrameContainer } from '../../components';
import { Board } from './components';

import './style/index.css';
import { useParams } from 'react-router-dom';

interface ITaskBoardPageProps {

}

const TaskBoardPage: React.FC<ITaskBoardPageProps> = (props) => {
    const { project } = useParams();

    return (
        <DashboardFrameContainer>
            <BarTitle title='Tablero de tareas de todo el proyecto (Task Board)' />
            <div className="tableroContainer">
                <Board key='pendientes' title='Pendientes' />
                <Board key='bloqueadas' title='Bloqueadas' />
                <Board key='enCurso' title='En curso' />
                <Board key='terminadas' title='Terminadas' />
            </div>
        </DashboardFrameContainer>
    );
}

export default TaskBoardPage;