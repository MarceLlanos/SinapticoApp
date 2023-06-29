import { FirebaseUser, PublicRegisterRoutes } from '@/models';
import { useAppSelector } from '@/redux';
import { verifyUser } from '@/utilities';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
	const userData: FirebaseUser = useAppSelector(state => state.auth.user);
	const verifyData = verifyUser(userData);

	return verifyData ? (
		<Outlet />
	) : (
		<Navigate to={`/${PublicRegisterRoutes.LOGIN}`} />
	);
};
