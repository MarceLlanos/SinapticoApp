import React from "react";
import "./style/dashboard.css";
import { NotFoundPage } from "@/utilities";
import { Navigate, Route } from "react-router-dom";
import { PrivateDashboardRoutes } from "@/models";
import {
  ChatPage,
  DashboardPage,
  HelpPage,
  PhaseReviewPage,
  SettingsPage,
  StaticsPage,
  TaskBoardPage,
  TaskListPage,
  TeamPage
} from "./pages";

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  return (
    <NotFoundPage>
      <Route
        path="/"
        element={<Navigate to={PrivateDashboardRoutes.DASHBOARD} />}
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
        path={PrivateDashboardRoutes.TASKLIST}
        element={<TaskListPage />}
      />
      <Route path={PrivateDashboardRoutes.STATICS} element={<StaticsPage />} />
      <Route
        path={PrivateDashboardRoutes.PHASESREVIEW}
        element={<PhaseReviewPage />}
      />
      <Route path={PrivateDashboardRoutes.TEAM} element={<TeamPage />} />
      <Route path={PrivateDashboardRoutes.CHAT} element={<ChatPage />} />
      <Route path={PrivateDashboardRoutes.HELP} element={<HelpPage />} />
      <Route
        path={PrivateDashboardRoutes.SETTINGS}
        element={<SettingsPage />}
      />
    </NotFoundPage>
  );
};

export default Dashboard;
