
import React, { Fragment } from 'react';
import './style/index.css';
import { DashboardFrameContainer } from '../../components';

interface ISettingsPageProps {

}

const SettingsPage: React.FC<ISettingsPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <Fragment>Hola desde Setting</Fragment>
        </DashboardFrameContainer>
    );
}

export default SettingsPage;