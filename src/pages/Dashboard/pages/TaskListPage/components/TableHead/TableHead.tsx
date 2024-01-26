
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ButtonSmallPrimary } from '@/styled-components';

import './style/index.css';
import { TaskModal } from '../TaskModal';

interface ITableHeadProps {
    title: string;
    showButton: boolean;
}

const TableHead: React.FC<ITableHeadProps> = ({ title, showButton }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const onOpenModal = () => {
        setOpenModal(true);
    }
    
    return (
        <div className="tableHeadContainer ">
            <h3 className='textNormal greyDarkText'>{title}</h3>
            {
                showButton
                    ? <ButtonSmallPrimary onClick={onOpenModal}><AddIcon /> Agregar tarea</ButtonSmallPrimary>
                    : <></>
            }
            <TaskModal openModal={openModal} setOpenModal={setOpenModal}  />
        </div>
    );
}

export default TableHead;
