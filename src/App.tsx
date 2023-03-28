import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CoverPage, LoginPage, RegisterPage } from './pages';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<CoverPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/registers' element={<RegisterPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
