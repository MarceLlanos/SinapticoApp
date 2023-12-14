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
const StaticsPage = lazy(() => import('./pages/StatsPage/StatsPage'));
const TaskBoardPage = lazy(() => import('./pages/TaskBoardPage/TaskBoardPage'));
const TaskListPage = lazy(() => import('./pages/TaskListPage/TaskListPage'));
const TeamPage = lazy(() => import('./pages/TeamPage/TeamPage'));


interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <NotFoundPage>
      <Route
        path="/"
        element={<Navigate to={`${PrivateDashboardRoutes.DASHBOARD}/project=:project`} />}
      />
      <Route
        path={`${PrivateDashboardRoutes.DASHBOARD}/project=:project`}
        element={<DashboardPage />}
      />
      <Route
        path={`${PrivateDashboardRoutes.TASKBOARD}/project=:project`}
        element={<TaskBoardPage />}
      />
      <Route
        path={`${PrivateDashboardRoutes.DRIVEBOARD}/project=:project`}
        element={<DriveConfigurationPage />}
      />
      <Route
        path={`${PrivateDashboardRoutes.DAILYREPORT}/project=:project`}
        element={<DailyReportPage />}
      />
      <Route
        path={`${PrivateDashboardRoutes.TASKLIST}/project=:project`}
        element={<TaskListPage />}
      />
      <Route
        path={`${PrivateDashboardRoutes.STATICS}/project=:project`}
        element={<StaticsPage />} />
      <Route
        path={`${PrivateDashboardRoutes.PHASESREVIEW}/project=:project`}
        element={<PhaseReviewPage />}
      />
      <Route
        path={`${PrivateDashboardRoutes.TEAM}/project=:project`}
        element={<TeamPage />}
      />
      <Route
        path={`${PrivateDashboardRoutes.CHAT}/project=:project`}
        element={<ChatPage />}
      />
      <Route
        path={`${PrivateDashboardRoutes.HELP}/project=:project`}
        element={<HelpPage />}
      />
      <Route
        path={`${PrivateDashboardRoutes.SETTINGS}/project=:project`}
        element={<SettingsPage />}
      />
    </NotFoundPage>
  );
};

export default Dashboard;