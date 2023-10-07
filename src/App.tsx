import { Suspense } from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import { AuthGuard } from './guards';
import { PrivateDashboardRoutes, PrivateRegisterRoutes, PublicRegisterRoutes } from './models';
import { CoverPage, LoginPage, Register, RegisterPage } from './pages';
import { NotFoundPage } from './utilities';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<div className='App'>
			<Suspense fallback={<> Loading... </>}>
				<Router>
					<NotFoundPage>
						<Route path='/' element={<CoverPage />} />
						<Route
							path={`${PublicRegisterRoutes.LOGIN}`}
							element={<LoginPage />}
						/>
						<Route
							path={`${PublicRegisterRoutes.REGISTER}`}
							element={<RegisterPage />}
						/>
						<Route element={<AuthGuard privateValidation={ true } />}>
							<Route
								path={`${PrivateRegisterRoutes.PRIVATE}/*`}
								element={<Register />}
							/>
						</Route>
						<Route element={<AuthGuard privateValidation={ true } />}>
							<Route
								path={`${PrivateDashboardRoutes.PRIVATE}/*`}
								element={<Dashboard />}
							/>
						</Route>
					</NotFoundPage>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
