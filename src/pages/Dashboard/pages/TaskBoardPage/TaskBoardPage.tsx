
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	DndContext,
	DragEndEvent,
	DragOverEvent,
	DragStartEvent,
	KeyboardSensor,
	PointerSensor,
	closestCorners,
	useSensor,
	useSensors
} from '@dnd-kit/core';

import './style/index.css';

import { BarTitle, DashboardFrameContainer } from '../../components';
import { Board } from './components';
import { BoardSectionType, Task, UpdateInputTask, taskStates } from '@/models';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { useTask } from './hooks';
import { AppDispatch, updateATask } from '@/redux';
import { useDispatch } from 'react-redux';

interface BoardData {
	id: string;
	title: string;
	tasks: Task[];
	status: string;
}
interface ITaskBoardPageProps {
}

const TaskBoardPage: React.FC<ITaskBoardPageProps> = () => {
	const { project } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const [activeTaskId, setActiveTaskId] = useState<null | string>(null);
	const [boardSections, setBoardSections] = useState<BoardSectionType>();
	const { tasks, loading, error } = useTask( project!)

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	const handleDragStart = ({ active }: DragStartEvent) => {
		setActiveTaskId(active.id as string);
	};

	const handleDragOver = (event: DragOverEvent ) => {
		const { active, over } = event;

		if (active.id !== over?.id) {
			return;
		}
	}

	const handleDragEnd = async (event: DragEndEvent) => {
		const { active, over } = event;
		const idTask = active.id.toString();
		const containerId = over?.data.current?.sortable.containerId.toString();

		if (!over || active.id === over.id) return;

		const dataToUpdate: UpdateInputTask = {
			id_task: idTask,
			dataTask: {
				stateTask: containerId
			}
		}

		try {
			const updateTask = await dispatch(updateATask(dataToUpdate));

		} catch (error) {
			throw error;
		}
		

	}


	const renderTasks = (status: string): Task[] => (tasks?.filter(task => task.stateTask === status)!);

	return (
		<DashboardFrameContainer>
			<BarTitle title='Tablero de tareas de todo el proyecto (Task Board)' />
			<div className="tableroContainer">
				<DndContext
					sensors={sensors}
					collisionDetection={closestCorners}
					onDragStart={handleDragStart}
					onDragOver={handleDragOver}
					onDragEnd={handleDragEnd}
				>
					{taskStates.map(state => (
						<Board key={state} id={state} title={state} tasks={renderTasks(state)} />
					))}
					
				</DndContext>
			</div>
		</DashboardFrameContainer>
	);
}

export default TaskBoardPage;