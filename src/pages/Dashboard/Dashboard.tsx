import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardMainContainerPage } from "./pages";

interface IDashboardProps { }

const Dashboard: React.FC<IDashboardProps> = () => {

  return (
    <Routes>
      <Route
        path="/*"
        element={<DashboardMainContainerPage />}
      />
    </Routes>
  );
};

export default Dashboard;