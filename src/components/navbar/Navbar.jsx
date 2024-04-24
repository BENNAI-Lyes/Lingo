import { Link } from 'react-router-dom';

import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';

import './navbar.scss';

const Navbar = () => {
	return (
		<nav className="navbar">
			<Logo />
			<Link to={'/levels'}>
				<Button text="Get Standard" />
			</Link>
		</nav>
	);
};

export default Navbar;
