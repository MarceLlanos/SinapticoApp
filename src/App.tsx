import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PublicRegisterRoutes } from './models';
import { CoverPage, LoginPage, RegisterPage } from './pages';
import { store } from './redux';
import { NotFoundPage } from './utilities/NotFoundPage';

function App() {
	return (
		<div className='App'>
			<Suspense fallback={<> Loading... </>}>
				<Provider store={store}>
					<Router>
						<Routes>
							<Route path='/' element={<CoverPage />} />
							<Route
								path={`${PublicRegisterRoutes.LOGIN}`}
								element={<LoginPage />}
							/>
							<Route
								path={`${PublicRegisterRoutes.REGISTER}`}
								element={<RegisterPage />}
							/>
							<Route path='*' element={<NotFoundPage />} />
						</Routes>
					</Router>
				</Provider>
			</Suspense>
		</div>
	);
}

export default App;
