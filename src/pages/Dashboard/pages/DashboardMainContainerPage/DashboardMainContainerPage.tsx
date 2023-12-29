
import React, { Fragment } from 'react';
import './styles/index';
import { useParams } from 'react-router-dom';
import { DashboardFrameContainer } from '../../components';
import { dashboardRenderRoutes } from '@/utilities';
import { MemberInput } from '@/models';

interface IDashboardMainContainerPageProps {

}

export const DashboardMainContainerPage: React.FC<IDashboardMainContainerPageProps> = (props) => {
    const { project, uid } = useParams();

    const input: MemberInput = {
        id_project: project!,
        uid: uid!
    } 

    return (
        <DashboardFrameContainer>
            {
                dashboardRenderRoutes(input)
            }
        </DashboardFrameContainer>
    )
}
