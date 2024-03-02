
import React from 'react';
import './style/index.css';

interface ITitleBoardProps {
    title: string;
}

const TitleBoard: React.FC<ITitleBoardProps> = ({ title }) => {
    return (
        <div className="titleBoardContainer textNormal greyText mb-1">
            <h4>{ title }</h4>
        </div>
    );
}

export default TitleBoard;
