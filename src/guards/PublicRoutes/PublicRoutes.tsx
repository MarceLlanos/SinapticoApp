import { Navigate } from 'react-router-dom';

type PublicRoutesProps = {
	isUserLoggedIn: Boolean;
};

const PublicRoutes = ({ isUserLoggedIn }: PublicRoutesProps): JSX.Element => {
	return isUserLoggedIn && <Navigate to='login' />;
};

export default PublicRoutes;
