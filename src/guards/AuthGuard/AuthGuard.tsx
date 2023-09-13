import { PublicRegisterRoutes } from '@/models';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
	return true ? <Outlet /> : <Navigate to={`/${PublicRegisterRoutes.LOGIN}`} />;
};
