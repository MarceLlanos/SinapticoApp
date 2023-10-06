import { Suspense } from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import { AuthGuard } from './guards';
import { PrivateRegisterRoutes, PublicRegisterRoutes } from './models';
import { CoverPage, LoginPage, Register, RegisterPage } from './pages';
import { NotFoundPage } from './utilities';

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
					</NotFoundPage>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
