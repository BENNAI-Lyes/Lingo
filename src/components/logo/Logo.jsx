import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

import './logo.scss';

const Logo = () => {
	return (
		<Link to={'/'} className="logo">
			<img src={logo} alt="" />
			<span>Lingo</span>
		</Link>
	);
};

export default Logo;
