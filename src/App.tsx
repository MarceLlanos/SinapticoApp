import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { AuthGuard } from './guards';
import { PrivateRegisterRoutes, PublicRegisterRoutes } from './models';
import { CoverPage, LoginPage, Register, RegisterPage } from './pages';
import { store } from './redux';
import { NotFoundPage } from './utilities';

function App() {
	return (
		<div className='App'>
			<Suspense fallback={<> Loading... </>}>
				<Provider store={store}>
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
							<Route path={'/'} element={<AuthGuard />}>
								<Route
									path={`/${PrivateRegisterRoutes.PRIVATE}/*`}
									element={<Register />}
								/>
							</Route>
						</NotFoundPage>
					</Router>
				</Provider>
			</Suspense>
		</div>
	);
}

export default App;
