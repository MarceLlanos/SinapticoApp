
import React, { useState } from 'react';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { LinkPrimary } from '@/styled-components';

import './style/taskCard.css';
import { EditModal } from '../EditModal';
import { Task } from '@/models';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


interface ITaskCardProps {
    task: Task;
}

const TaskCard: React.FC<ITaskCardProps> = ({ task }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const {
        attributes, 
        listeners, 
        transform, 
        transition, 
        setNodeRef 
    } = useSortable({
        id: task.id,
        transition: {
            duration: 300,
            easing: 'ease-in-out'
        }
    });

    const onOpenModal = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOpenModal(false);
    }

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className={`taskContainer ${task.levelDifficulty}-border textLight greyDarkText `}
        >
            <div className="taskBody">
                <div className="mb-1">
                    <h2 className='textLight titleTask'>{task.title}</h2>
                </div>
                <div className="descriptionContent">
                    <p>
                        {task.description}
                    </p>
                </div>
                <div className="contentFooterTask">
                    <div className="contentLeft">
                        <div className="iconContent">
                            <QueryBuilderOutlinedIcon fontSize="small" />
                            <p className='ml-1'>{task.timeAssigned} Horas</p>
                        </div>
                        <div className="iconContent">
                            <AccountCircleOutlinedIcon fontSize="small" />
                            <p className='ml-1'>{ task.userName }</p>
                        </div>
                    </div>
                    <div className="contentRight">
                        <LinkPrimary onClick={onOpenModal}> Editar </LinkPrimary>
                    </div>
                </div>
            </div>
            <EditModal isOpenModal={openModal} closeModal={onCloseModal} />
        </div>
    )
}

export default TaskCard;
