
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ModalCommentsReport } from '../ModalCommentsReport';

import './style/cardDaily.css';
import { useParams } from 'react-router-dom';
interface ICardDailyReportProps {
    userName: string;
    whatIDid: string;
    problemsIHave: string;
    whatWillIDo: string;
    comments: number;
}

const CardDailyReport: React.FC<ICardDailyReportProps> = ({ userName, whatIDid, problemsIHave, whatWillIDo, comments }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    
    const onOpenModal = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOpenModal(false);
    }
    return (
        <div className="cardDailyContainer textNormal greyDarkText">
            <h3 className='textBold mb-1'>{ userName }Tyler Morris</h3>
            <div className="reportContent mb-1">
                <p className="textBold">Lo que hice:</p>
                <p>{ whatIDid }Se realizo la tarea 01, investigando en internet y consultando el libro mensionado por el Docente</p>
                <p className="textBold">Problemas para realizar la tarea:</p>
                <p>{ problemsIHave }Se realizo la tarea 01, investigando en internet y consultando el libro mensionado por el Docente</p>
                <p className="textBold">Lo que haré:</p>
                <p>{ whatWillIDo }Se realizo la tarea 01, investigando en internet y consultando el libro mensionado por el Docente</p>
            </div>
            <div className="actionReport">
                <IconButton sx={{
                    backgroundColor: 'var(--green-text)',
                    height: '1.5rem',
                    width: '3rem',
                    borderRadius: '3px',
                    padding: '4px',
                    marginRight: '4px',
                }}>
                    <VisibilityIcon />
                    <span>2</span>
                </IconButton>
                <IconButton
                    onClick={ onOpenModal }
                    sx={{
                        borderRadius: '3px',
                        cursor: 'pointer',
                        height: '1.5rem',
                        marginRight: '4px',
                        padding: '4px',
                        width: '3rem',
                    }}
                >
                    <img src='../../src/assets/icons/comment.svg' height={20} width={20} />
                    <span>{ comments }3</span>
                </IconButton>
            </div>
            <ModalCommentsReport
                isOpenModal={openModal}
                closeModal={onCloseModal}
                userName=''
                whatIDid=''
                problemsIHave=''
                whatWillIDo=''
                date=''
                likes={ 0 }
                comments={ []}
            />
        </div>
    );
}

export default CardDailyReport;
