
import React from 'react';
import { BarTitle, DashboardFrameContainer } from '../../components';
import { TableCostum, TableHead } from './components';

import './style/index.css';


interface ITaskListPageProps {

}

const TaskListPage: React.FC<ITaskListPageProps> = (props) => {
    return (
        <>
            <BarTitle title='Lista de tareas de todo el proyecto (Product Backlog)' />
            <div className='TaskListContainer'>
                <div className="tableContainer">
                    <TableHead title='Lista de tareas nuevas y sin asignar a encargados' showButton={true} />
                    <TableCostum />

                    <TableHead title='Lista de tareas asignadas' showButton={false} />
                    <TableCostum />
                </div>
            </div>
        </>
    );
}

export default TaskListPage;