
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ButtonSmallPrimary } from '@/styled-components';
import { CardDailyReport, LeftComment, ModalCreateDailyReport, RightComment } from './components';
import { BarTitle, DashboardFrameContainer } from '../../components';

import './style/index.css';

interface IDailyReportPageProps {

}

const DailyReportPage: React.FC<IDailyReportPageProps> = (props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const onOpenModal = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOpenModal(false);
    }
    return (
        <DashboardFrameContainer >
            <BarTitle title='Reporte diario de tareas de los integrantes del equipo. (Daily report)' />
            <div className="dailyReportContainer">
                <div className="reportContainer">
                    <div className="buttonSmallContainer">
                        <ButtonSmallPrimary className='buttonRight' onClick={ onOpenModal }><AddIcon /> Agregar reporte</ButtonSmallPrimary>
                    </div>
                    <div className="cardsReportContainer">
                        <RightComment>
                            <CardDailyReport />
                        </RightComment>
                        <LeftComment>
                            <CardDailyReport />
                        </LeftComment>
                    </div>
                </div>
            </div>
            <ModalCreateDailyReport isOpenModal={ openModal } closeModal={onCloseModal}/>
        </DashboardFrameContainer>
    );
}

export default DailyReportPage;
