
import React from 'react';
import { TaskCard } from '../TaskCard';
import './style/index.css';

import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { Task } from '@/models';
import { TitleBoard } from './components';

interface IBoardProps {
    id: string;
    title: string;
    tasks: Task[];
}

const Board: React.FC<IBoardProps> = ({ id, title, tasks = [] }) => {
    const { setNodeRef } = useDroppable({ id });
    return (
        <SortableContext
            id={id}
            items={tasks}
            strategy={rectSortingStrategy}
        >
            <div  className="boardContainer">
                <TitleBoard title={ title} />
                <div ref={setNodeRef} className="boardBodyContainer">
                {
                    tasks.map((task) => (
                        <TaskCard key={ task.id } task={task} />
                    ))
                }
                </div>
            </div>
        </SortableContext>
    );
}

export default Board;
