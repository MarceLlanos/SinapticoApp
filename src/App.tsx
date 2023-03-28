import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PublicRegisterRoutes } from './models';
import { CoverPage, LoginPage, RegisterPage } from './pages';
import { NotFoundPage } from './utilities/NotFoundPage';
import { Suspense } from 'react';

function App() {
	return (
		<div className='App'>
			<Suspense fallback={<> Loading... </>}>
				<BrowserRouter>
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
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
