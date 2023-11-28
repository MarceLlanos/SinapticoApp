import { PublicRegisterRoutes } from "@/models";
import { useQuery } from "@apollo/client";
import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { IS_LOGGED_IN } from "@/schemas";

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PublicRegisterRoutes.LOGIN} />

export const AuthGuard:React.FC = () => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) {
    return <div>Loading...</div>
  }


  
  return (error || !data || !data.isLoggedIn)
    ? PublicValidationFragment
    : PrivateValidationFragment;
};
