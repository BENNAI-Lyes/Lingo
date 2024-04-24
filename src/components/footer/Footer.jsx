import Logo from '../logo/Logo';
import './footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<Logo />
			<ul>
				<li>Privacy policy</li>
				<li>Terms & Conditions</li>
			</ul>
		</div>
	);
};

export default Footer;
