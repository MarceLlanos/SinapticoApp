import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PublicRegisterRoutes } from './models';
import { CoverPage, LoginPage, RegisterPage } from './pages';
import { NotFoundPage } from './utilities/NotFoundPage';

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
