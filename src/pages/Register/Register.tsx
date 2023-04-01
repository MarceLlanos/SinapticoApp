import React from 'react';
import './styles/RegisterPages.css';
import { NotFoundPage } from '@/utilities';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRegisterRoutes } from '@/models';
import { DataProjectPage } from './pages';

export interface RegisterPagesProps {}

export const Register: React.FC<RegisterPagesProps> = () => {
	return (
		<NotFoundPage>
			<Route path='/' element={ <Navigate to={`${PrivateRegisterRoutes.CREATEPROJECT}`}/> } />
			<Route path={`/${PrivateRegisterRoutes.CREATEPROJECT}/*`} element={<DataProjectPage />}/>
			{/* <Route path={`${PrivateRegisterRoutes.TEAMCODE}/*`} element={< />}/>
			<Route path={`${PrivateRegisterRoutes.JOINTEAM}/*`} element={< />}/>
			<Route path={`${PrivateRegisterRoutes.TEAMLIST}/*`} element={< />}/>
			<Route path={`${PrivateRegisterRoutes.CONFIGUREDRIVE}/*`} element={< />}/>
			<Route path={`${PrivateRegisterRoutes.TEAMROLE}/*`} element={< />}/> */}
		</NotFoundPage>
	);
};
