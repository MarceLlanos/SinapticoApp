
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GridColDef } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

import { BarTitle, DashboardFrameContainer } from '../../components';
import { TableCostum, TableHead } from './components';
import { AppDispatch, getTasksProject } from '@/redux';
import { Task } from '@/models';

import './style/index.css';
import { dataProjectFormSchema } from '@/pages/Register/pages/DataProjectPage/schema/dataProjectForm.schema';
import { getUser } from '@/services';
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
		field: 'uidAssignedTo',
		headerName: 'Encargados',
		flex: 1
	},
	{
		field: 'phase',
		headerName: 'Fase',
		flex: 1
	}
]

const tasksWithNoUserFilter = (data: Task[]) => {
	const dataTask = data.filter((task) => task.uidAssignedTo === '');
	const tasks = dataTask.map((data, index) => ({
		id: index + 1,
		levelDifficulty: data.levelDifficulty,
		timeAssigned: data.timeAssigned,
		description: data.description,
		stateTask: data.stateTask,
		uidAssignedTo: data.uidAssignedTo,
		phase: 'Fase 1'
	}));

	return tasks;
}

const tasksWithUserFilter = async (data: Task[]) => {
	const dataTask = data.filter((task) => task.uidAssignedTo !== '');
	const tasks = await Promise.all(dataTask.map(async (data, index) => {
		const { userName } = await getUser(data.uidAssignedTo);
		return {
			id: index + 1,
			levelDifficulty: data.levelDifficulty,
			timeAssigned: data.timeAssigned,
			description: data.description,
			stateTask: data.stateTask,
			uidAssignedTo: userName,
			phase: 'Fase 1'
		}
	}));

	return tasks;
}

const TaskListPage: React.FC<ITaskListPageProps> = () => {
	const { project } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const [tasksAssigned, setTasksAssigned] = useState<{}[]>([]);
	const [tasksUnassigned, setTasksUnassigned] = useState<{}[]>([]);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const data = await dispatch(getTasksProject(project!)).unwrap();

				const taskWithNoUser = tasksWithNoUserFilter(data);
				setTasksUnassigned(taskWithNoUser);

				const taskWithUser = await tasksWithUserFilter(data);
				setTasksAssigned(taskWithUser);
			}
			fetchData();
		} catch (error) {
			throw error;
		}
	}, []);

	return (
		<DashboardFrameContainer>
			<BarTitle title='Lista de tareas de todo el proyecto (Product Backlog)' />
			<div className='TaskListContainer'>
				<div className="tableContainer">
					<TableHead title='Lista de tareas nuevas y sin asignar a encargados' showButton={true} />
					<TableCostum
						key='table-unassigned'
						columns = {columns}
						rows = {tasksUnassigned}
						pageSize  = {5}
					/>

					<TableHead title='Lista de tareas asignadas' showButton={false} />
					<TableCostum
						key='table-assigned'
						columns = {columns}
						rows = {tasksAssigned}
						pageSize  = {5}
					/>
				</div>
			</div>
		</DashboardFrameContainer>
	);
}

export default TaskListPage;