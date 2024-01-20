
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ButtonSmallPrimary } from '@/styled-components';

import './style/index.css';
import { CreateModal } from '../CreateModal';


interface ITableHeadProps {
    title: string;
    showButton: boolean;
}

const TableHead: React.FC<ITableHeadProps> = ({ title, showButton }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const onOpenModal = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOpenModal(false);
    }
    
    return (
        <div className="tableHeadContainer ">
            <h3 className='textNormal greyDarkText'>{title}</h3>
            {
                showButton
                    ? <ButtonSmallPrimary onClick={onOpenModal}><AddIcon /> Agregar tarea</ButtonSmallPrimary>
                    : <></>
            }
            <CreateModal isOpenModal={openModal} closeModal={onCloseModal}  />
        </div>
    );
}

export default TableHead;
