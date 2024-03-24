
import React from 'react';
import { Routes, useParams } from 'react-router-dom';
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
        <Routes>
            {...dashboardRenderRoutes(input)}
        </Routes>
    )
}
