import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home/Home';
import Level from './pages/level/Level';
import NotFound from './pages/notFound/NotFound';
import UnderCons from './pages/underCons/UnderCons';
import Categories from './pages/categories/Categories';
import Category from './pages/category/Category';
import Lesson from './pages/lesson/Lesson';
import Contact from './pages/contact/Contact';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/levels',
		element: <Level />,
	},
	{
		path: '/levels/:id/categories',
		element: <Categories />,
	},
	{
		path: '/underCons',
		element: <UnderCons />,
	},
	{
		path: '/levels/:id/categories/:categoryName',
		element: <Category />,
	},
	{
		path: '/levels/:id/categories/:categoryName/:lessonId',
		element: <Lesson />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

function App() {
	return (
		<div className="app">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
