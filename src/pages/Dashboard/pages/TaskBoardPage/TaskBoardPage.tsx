
import React from 'react';
import { BarTitle, DashboardFrameContainer } from '../../components';
import { Board } from './components';

import './style/index.css';

interface ITaskBoardPageProps {

}

const TaskBoardPage: React.FC<ITaskBoardPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <BarTitle title='Tablero de tareas de todo el proyecto (Task Board)' />
            <div className="tableroContainer">
                <Board title='Pendientes' />
                <Board title='Bloqueadas' />
                <Board title='En curso' />
                <Board title='Terminadas' />
            </div>
        </DashboardFrameContainer>
    );
}

export default TaskBoardPage;