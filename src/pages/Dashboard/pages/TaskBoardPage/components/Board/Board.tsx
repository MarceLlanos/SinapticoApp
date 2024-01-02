
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { TaskCard } from '../TaskCard';
import './style/index.css';

interface IBoardProps {
    title: string;
}

const Board: React.FC<IBoardProps> = ({ title }) => {
    
    const [{ isDragging }, drag] = useDrag({
        type: 'TASK',
        item: { title },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
    accept: 'TASK',
    drop: async (item: { type: string; ref: any }) => {
    //   dispatch({ type: 'MOVE_TASK', taskId: item.ref.id, newStatus: type });

      await item.ref.update({ status: title });
    },
  });
    
    return (
        <div className="boardContainer">
            <div className="textNormal greyText mb-1">
                <h4>{ title }</h4>
            </div>
            <div className="boardBody">
                <TaskCard colorTask='red'/>
            </div>
        </div>
    );
}

export default Board;
