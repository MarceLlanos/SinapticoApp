import { MemberInput, PrivateDashboardRoutes } from "@/models";
import React, { lazy } from "react";
import { Route } from "react-router-dom";

const ChatPage = lazy(() => import('../../pages/Dashboard/pages/ChatPage/ChatPage'));
const DashboardPage = lazy(() => import('../../pages/Dashboard/pages/DashboardPage/DashboardPage'));
const DailyReportPage = lazy(() => import('../../pages/Dashboard/pages/DailyReportPage/DailyReportPage'));
const DriveConfigurationPage = lazy(() => import('../../pages/Dashboard/pages/DriveConfigurationPage/DriveConfigurationPage'));
const HelpPage = lazy(() => import('../../pages/Dashboard/pages/HelpPage/HelpPage'));
const PhaseReviewPage = lazy(() => import('../../pages/Dashboard/pages/PhaseReviewPage/PhaseReviewPage'));
const SettingsPage = lazy(() => import('../../pages/Dashboard/pages/SettingsPage/SettingsPage'));
const StaticsPage = lazy(() => import('../../pages/Dashboard/pages/StatsPage/StatsPage'));
const TaskBoardPage = lazy(() => import('../../pages/Dashboard/pages/TaskBoardPage/TaskBoardPage'));
const TaskListPage = lazy(() => import('../../pages/Dashboard/pages/TaskListPage/TaskListPage'));
const TeamPage = lazy(() => import('../../pages/Dashboard/pages/TeamPage/TeamPage'));

interface DashboardRoute {
    path: string,
    element: React.ReactElement
}

const dashboardRoutes: DashboardRoute[] = [
    { path: PrivateDashboardRoutes.DASHBOARD, element: <DashboardPage /> },
    { path: PrivateDashboardRoutes.CHAT, element: <ChatPage /> },
    { path: PrivateDashboardRoutes.DAILYREPORT, element: <DailyReportPage /> },
    { path: PrivateDashboardRoutes.DRIVEBOARD, element: <DriveConfigurationPage /> },
    { path: PrivateDashboardRoutes.HELP, element: <HelpPage /> },
    { path: PrivateDashboardRoutes.PHASESREVIEW, element: <PhaseReviewPage /> },
    { path: PrivateDashboardRoutes.SETTINGS, element: <SettingsPage /> },
    { path: PrivateDashboardRoutes.STATICS, element: <StaticsPage /> },
    { path: PrivateDashboardRoutes.TASKBOARD, element: <TaskBoardPage /> },
    { path: PrivateDashboardRoutes.TASKLIST, element: <TaskListPage /> },
    { path: PrivateDashboardRoutes.TEAM, element: <TeamPage /> }
]

export const dashboardRenderRoutes = ({id_project, uid}: MemberInput): React.ReactElement[] => {
    return dashboardRoutes.map((route) =>
        <Route
            key={ route.path }
            path={`/${route.path}/:project/:uid`}
            element={React.cloneElement(route.element, { id_project, uid })}
        />
    )
}