
import React, { Fragment } from 'react';
import './style/index.css';
import { DashboardFrameContainer } from '../../components';

interface ITeamPageProps {

}

const TeamPage: React.FC<ITeamPageProps> = (props) => {
    return (
        <DashboardFrameContainer>
            <Fragment>hola desde Team Page</Fragment>
        </DashboardFrameContainer>
    );
}

export default TeamPage;