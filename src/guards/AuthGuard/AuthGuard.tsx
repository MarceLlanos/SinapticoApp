import { PublicRegisterRoutes } from '@/models';
import { useAppSelector } from '@/redux/hook/useAppSelector.hook';
import { uidUserSelector } from '@/redux/selectors/authSelector.selector';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
	const user = useAppSelector(uidUserSelector);
	console.log(`From Auth Guard ${user}`);
	return user ? <Outlet />: <Navigate to={`/${PublicRegisterRoutes.LOGIN}`}/>;
};