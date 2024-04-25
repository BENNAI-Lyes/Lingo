import { Link } from 'react-router-dom';

import Logo from '../../components/logo/Logo';

import './navbar.scss';

const Navbar = () => {
	return (
		<nav className="navbar">
			<Logo />
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/levels'}>Levels</Link>
				</li>
				<li>
					<Link to={'/contact'}>Ask a question</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
