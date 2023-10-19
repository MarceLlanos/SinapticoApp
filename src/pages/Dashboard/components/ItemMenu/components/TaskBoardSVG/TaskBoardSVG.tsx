
import React from 'react';


interface ITaskBoardSVGProps {
    className: string

}

const TaskBoardSVG: React.FC<ITaskBoardSVGProps> = ({className}) => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 8C6 8.55228 6.44772 9 7 9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H7C6.44772 7 6 7.44772 6 8ZM14 8C14 8.55228 14.4477 9 15 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7H15C14.4477 7 14 7.44772 14 8ZM6 12C6 12.5523 6.44772 13 7 13H11C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11H7C6.44772 11 6 11.4477 6 12ZM14 12C14 12.5523 14.4477 13 15 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H15C14.4477 11 14 11.4477 14 12ZM6 16C6 16.5523 6.44772 17 7 17H11C11.5523 17 12 16.5523 12 16C12 15.4477 11.5523 15 11 15H7C6.44772 15 6 15.4477 6 16ZM14 16C14 16.5523 14.4477 17 15 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H15C14.4477 15 14 15.4477 14 16ZM22.5455 3H3.45455C3.20364 3 3 3.20364 3 3.45455V22.5455C3 22.7964 3.20364 23 3.45455 23H22.5455C22.7964 23 23 22.7964 23 22.5455V3.45455C23 3.20364 22.7964 3 22.5455 3Z"
                className={className}
            />
        </svg>
    );
}

export default TaskBoardSVG;
