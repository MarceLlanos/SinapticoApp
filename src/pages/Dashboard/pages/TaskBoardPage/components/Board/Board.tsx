
import React from 'react';
import { TaskCard } from '../TaskCard';
import './style/index.css';

interface IBoardProps {
    title: string;
}

const Board: React.FC<IBoardProps> = ({title}) => {
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
