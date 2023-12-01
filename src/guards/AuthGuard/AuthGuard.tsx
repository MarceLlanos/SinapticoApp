import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { IS_LOGGED_IN } from "@/schemas";
import { RootState } from "@/redux";
import { PublicRegisterRoutes } from "@/models";

interface Props {
}

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PublicRegisterRoutes.LOGIN} />

export const AuthGuard: React.FC<Props> = () => {
  const { userData } = useSelector((store: RootState) => store.user);

  return userData.isSuccess ? PrivateValidationFragment : PublicValidationFragment;

};
