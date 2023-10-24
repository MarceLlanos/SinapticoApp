
import React from 'react';
import './style/index.css';
import { DashboardFrameContainer } from '../../components';
import BarTitle from '../../components/BarTitle';

interface ITaskBoardPageProps {

}

const TaskBoardPage: React.FC<ITaskBoardPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <BarTitle title='Tablero de tareas de todo el proyecto (Task Board)' />
            <div className="tableroContainer">

            </div>
        </DashboardFrameContainer>
    );
}

export default TaskBoardPage;