
import React from 'react';
import { BarTitle, DashboardFrameContainer } from '../../components';
import { TableCostum, TableHead } from './components';

import './style/index.css';
import { GridColDef } from '@mui/x-data-grid';

interface ITaskListPageProps {

}

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '#',
    flex: 1
  },
  {
    field: 'levelDifficulty',
    headerName: 'Dificultad',
    flex: 1,
    renderCell: (params) => (
      <div className={`color ${params.value}`}></div>
    ),
  },
  {
    field: 'timeAssigned',
    headerName: 'Tiempo aprox.',
    flex: 1
  },
  {
    field: 'description',
    headerName: 'Descripción',
    flex: 3
  },
  {
    field: 'stateTask',
    headerName: 'Estado',
    flex: 1
  },
  {
    field: 'assignedTo',
    headerName: 'Encargados',
    flex: 1
  },
  {
    field: 'phase',
    headerName: 'Fase',
    flex: 1
  }
]

const rows = [
  {
    id: '1',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'red',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '2',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'red',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '3',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'yellow',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '4',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'green',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '5',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'green',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '6',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'black',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '7',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'red',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '8',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'green',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '9',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'yellow',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '10',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'yellow',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '11',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'red',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '12',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'yellow',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '13',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'black',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '14',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'red',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },
  {
    id: '15',
    description: 'Realizar la caratula del proyecto, En documento…',
    timeAssigned: 30,
    levelDifficulty: 'yellow',
    stateTask: 'Pendiente',
    phase: 'fase 1',
    assignedTo: 2
  },

]

const TaskListPage: React.FC<ITaskListPageProps> = () => {
    return (
        <DashboardFrameContainer>
            <BarTitle title='Lista de tareas de todo el proyecto (Product Backlog)' />
            <div className='TaskListContainer'>
                <div className="tableContainer">
                    <TableHead title='Lista de tareas nuevas y sin asignar a encargados' showButton={true} />
                    <TableCostum
                        columns = {columns}
                        rows = {rows}
                        pageSize  = {5}
                    />

                    <TableHead title='Lista de tareas asignadas' showButton={false} />
                    <TableCostum
                        columns = {columns}
                        rows = {rows}
                        pageSize  = {5}
                    />
                </div>
            </div>
        </DashboardFrameContainer>
    );
}

export default TaskListPage;