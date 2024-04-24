import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Level from './pages/level/Level';
import NotFound from './pages/notFound/NotFound';
import UnderCons from './pages/underCons/UnderCons';
import Category from './pages/categorys/Category';
import Reading from './pages/reading/Reading';
import Lesson from './pages/lesson/Lesson';
import Writing from './pages/writing/Writing';
import Listening from './pages/listening/Listening';
import Speaking from './pages/speaking/Speaking';
import Vocabulary from './pages/vocabulary/Vocabulary';
import Pleasure from './pages/pleasure/Pleasure';

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
		path: '/underCons',
		element: <UnderCons />,
	},
	{
		path: '/category',
		element: <Category />,
	},
	{
		path: '/reading',
		element: <Reading />,
	},
	{
		path: '/reading/:id',
		element: <Lesson />,
	},
	{
		path: '/writing',
		element: <Writing />,
	},
	{
		path: '/writing/:id',
		element: <Lesson />,
	},
	{
		path: '/listening',
		element: <Listening />,
	},
	{
		path: '/listening/:id',
		element: <Lesson />,
	},
	{
		path: '/grammar',
		element: <Speaking />,
	},
	{
		path: '/grammar/:id',
		element: <Lesson />,
	},
	{
		path: '/vocabulary',
		element: <Vocabulary />,
	},
	{
		path: '/vocabulary/:id',
		element: <Lesson />,
	},
	{
		path: '/pleasure',
		element: <Pleasure />,
	},
	{
		path: '/pleasure/:id',
		element: <Lesson />,
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
