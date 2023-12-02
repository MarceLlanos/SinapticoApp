import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { IS_LOGGED_IN } from "@/schemas";
import { RootState } from "@/redux";
import { PublicRegisterRoutes } from "@/models";

interface Props {
}


export const AuthGuard: React.FC<Props> = () => {
  const location = useLocation();
  const { userData } = useSelector((store: RootState) => store.user);
  
  const routeBefore = location.state;
  const PrivateValidationFragment = <Outlet />
  const PublicValidationFragment = <Navigate replace to={PublicRegisterRoutes.LOGIN} state={routeBefore}/>

  return userData.isSuccess ? PrivateValidationFragment : PublicValidationFragment;

};
