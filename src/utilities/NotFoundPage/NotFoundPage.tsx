import { Route, Routes } from 'react-router-dom';
import { NotFoundComponent } from './page';

export interface NotFoundPageProps {
	children: JSX.Element[] | JSX.Element;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ children }) => {
	return (
		<Routes>
			{children}
			<Route path='*' element={<NotFoundComponent />} />
		</Routes>
	);
};

export default NotFoundPage;
