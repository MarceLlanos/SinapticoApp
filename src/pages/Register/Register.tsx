import React, { lazy } from 'react';

import { NotFoundPage } from '@/utilities';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRegisterRoutes } from '@/models';

import './styles/RegisterPages.css';

const DataProjectPage = lazy(() => import('./pages/DataProjectPage/DataProjectPage'));
const ConfigureDrivePage = lazy(() => import('./pages/ConfigureDrivePage/ConfigureDrivePage'));
const JoinTeamPage = lazy(() => import('./pages/JoinTeamPage/JoinTeamPage'));
const TeamCodePage = lazy(() => import('./pages/TeamCodePage/TeamCodePage'));
const TeamListPage = lazy(() => import('./pages/TeamListPage/TeamListPage'));

export interface RegisterPagesProps { }

const Register: React.FC<RegisterPagesProps> = () => {
	return (
		<NotFoundPage>
			<Route
				path='/'
				element={<Navigate to={PrivateRegisterRoutes.CREATEPROJECT} />}
			/>
			<Route
				path={`/${PrivateRegisterRoutes.CREATEPROJECT}`}
				element={<DataProjectPage />}
			/>
			<Route
				path={PrivateRegisterRoutes.TEAMCODE}
				element={<TeamCodePage />}
			/>
			<Route
				path={`/${PrivateRegisterRoutes.JOINTEAM}`}
				element={<JoinTeamPage />}
			/>
			<Route
				path={PrivateRegisterRoutes.TEAMLIST}
				element={<TeamListPage />}
			/>
			<Route
				path={PrivateRegisterRoutes.CONFIGUREDRIVE}
				element={<ConfigureDrivePage />}
			/>
		</NotFoundPage>
	);
};

export default Register;
