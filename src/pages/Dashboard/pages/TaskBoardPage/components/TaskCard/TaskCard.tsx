
import React, { useState } from 'react';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { LinkPrimary } from '@/styled-components';

import './style/taskCard.css';
import { EditModal } from '../EditModal';

interface ITaskCardProps {
    colorTask: string;
}



const TaskCard: React.FC<ITaskCardProps> = ({ colorTask }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const onOpenModal = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <div className={`taskContainer ${colorTask}-border textLight greyDarkText ` }>
            <div className="taskBody">
                <div className="mb-1">
                    <h2 className='textLight titleTask'>Tarea 01</h2>
                </div>
                <div className="descriptionContent">
                    <p>
                        Realizar la introduccion del proyecto,
                        haciendo uso de pasajes bibliograficos. 
                        En documento 001.
                    </p>
                </div>
                <div className="contentFooterTask">
                    <div className="contentLeft">
                        <div className="iconContent">
                            <QueryBuilderOutlinedIcon fontSize="small" />
                            <p className='ml-1'>03 Horas</p>
                        </div>
                        <div className="iconContent">
                            <AccountCircleOutlinedIcon fontSize="small" />
                            <p className='ml-1'>Tyler Morris</p>
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
