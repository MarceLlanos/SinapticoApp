
import React, { Fragment } from 'react';
import './style/index.css';
import { DashboardFrameContainer } from '../../components';

interface IHelpPageProps {

}

const HelpPage: React.FC<IHelpPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <p>Hola desde Help</p>
        </DashboardFrameContainer>
    );
}

export default HelpPage;