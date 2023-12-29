import React from "react";
import { NotFoundPage, dashboardRenderRoutes } from "@/utilities";
import DashboardMainContainerPage from "./pages/DashboardMainContainerPage";

interface IDashboardProps { }

const Dashboard: React.FC<IDashboardProps> = () => {

  return (
    <NotFoundPage>
      <DashboardMainContainerPage/>
    </NotFoundPage>
  );
};

export default Dashboard;