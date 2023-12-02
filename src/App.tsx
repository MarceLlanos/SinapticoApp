import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { AuthGuard } from "./guards";
import {
	PrivateDashboardRoutes,
	PrivateRegisterRoutes,
	PublicRegisterRoutes
} from "./models";
import {
	CoverPage,

} from "./pages";
import { NotFoundPage } from "./utilities";

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const RegisterPage = lazy(() => import('./pages/Register/pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/Register/pages/LoginPage/LoginPage'));
const Register = lazy(() => import('./pages/Register/Register'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<> Loading... </>}>
				<Router>
					<NotFoundPage>
						<Route path="/" element={<CoverPage />} />
						<Route
							path={`${PublicRegisterRoutes.LOGIN}`}
							element={<LoginPage />}
						/>
						<Route
							path={`${PublicRegisterRoutes.REGISTER}`}
							element={<RegisterPage />}
						/>
						<Route element={<AuthGuard />}>
							<Route
								path={`/${PrivateRegisterRoutes.PRIVATE}/*`}
								element={<Register />}
							/>
							<Route
								path={`${PrivateDashboardRoutes.PRIVATE}/*`}
								element={<Dashboard />}
							/>
						</Route>
						
						<Route element={<AuthGuard />}>
						</Route>
					</NotFoundPage>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
