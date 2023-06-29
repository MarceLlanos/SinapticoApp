import { Navigate, Outlet } from 'react-router-dom';

type Props = {
	isUserLoggedIn: Boolean;
};

export const PrivateRoutes = ({ isUserLoggedIn }: Props): JSX.Element => {
	return !isUserLoggedIn ? <Navigate to='/login' replace /> : <Outlet />;
};
