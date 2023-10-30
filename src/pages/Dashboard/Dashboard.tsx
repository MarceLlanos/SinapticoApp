import React, { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

import { NotFoundPage } from "@/utilities";
import { PrivateDashboardRoutes } from "@/models";

import "./style/dashboard.css";


const ChatPage = lazy(() => import('./pages/ChatPage/ChatPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const DailyReportPage = lazy(() => import('./pages/DailyReportPage/DailyReportPage'));
const DriveConfigurationPage = lazy(() => import('./pages/DriveConfigurationPage/DriveConfigurationPage'));
const HelpPage = lazy(() => import('./pages/HelpPage/HelpPage'));
const PhaseReviewPage = lazy(() => import('./pages/PhaseReviewPage/PhaseReviewPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage/SettingsPage'));
const StaticsPage = lazy(() => import('./pages/StaticsPage/StaticsPage'));
const TaskBoardPage = lazy(() => import('./pages/TaskBoardPage/TaskBoardPage'));
const TaskListPage = lazy(() => import('./pages/TaskListPage/TaskListPage'));
const TeamPage = lazy(() => import('./pages/TeamPage/TeamPage'));


interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <NotFoundPage>
      <Route
        path="/"
        element={<Navigate to={PrivateDashboardRoutes.PRIVATE} />}
      />
      <Route
        path={PrivateDashboardRoutes.DASHBOARD}
        element={<DashboardPage />}
      />
      <Route
        path={PrivateDashboardRoutes.TASKBOARD}
        element={<TaskBoardPage />}
      />
      <Route
        path={PrivateDashboardRoutes.DRIVEBOARD}
        element={<DriveConfigurationPage />}
      />
      <Route
        path={PrivateDashboardRoutes.DAILYREPORT}
        element={<DailyReportPage />}
      />
      <Route
        path={PrivateDashboardRoutes.TASKLIST}
        element={<TaskListPage />}
      />
      <Route
        path={PrivateDashboardRoutes.STATICS}
        element={<StaticsPage />} />
      <Route
        path={PrivateDashboardRoutes.PHASESREVIEW}
        element={<PhaseReviewPage />}
      />
      <Route
        path={PrivateDashboardRoutes.TEAM} element={<TeamPage />}
      />
      <Route
        path={PrivateDashboardRoutes.CHAT} element={<ChatPage />}
      />
      <Route
        path={PrivateDashboardRoutes.HELP} element={<HelpPage />}
      />
      <Route
        path={PrivateDashboardRoutes.SETTINGS}
        element={<SettingsPage />}
      />
    </NotFoundPage>
  );
};

export default Dashboard;