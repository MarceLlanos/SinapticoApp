
import React, { Fragment } from 'react';
import './style/index.css';
import { DashboardFrameContainer } from '../../components';

interface IPhaseReviewPageProps {

}

const PhaseReviewPage: React.FC<IPhaseReviewPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <Fragment>Hola desde Phase REview</Fragment>
        </DashboardFrameContainer>
    );
}

export default PhaseReviewPage;