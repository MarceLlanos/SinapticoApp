import { PublicRegisterRoutes } from "@/models";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PublicRegisterRoutes.LOGIN} />

export const AuthGuard = ( { privateValidation }: Props ) => {
  return true ? (
    <Outlet />
  ) : (
    <Navigate replace to={`/${PublicRegisterRoutes.LOGIN}`} />
  );
};
