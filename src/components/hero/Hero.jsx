import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

import './hero.scss';
import img from '../../assets/img/hero.svg';

const Hero = () => {
	return (
		<div className="hero">
			<div className="left">
				<h1>
					<span>Lingo,</span> is the best learning management system for
					english.
				</h1>
				<p>
					Welcome to Lingo, where learning English becomes an engaging journey!
					Our innovative learning management system offers a comprehensive
					platform designed to help you learn, practice, and master the English
					language. With interactive lessons, personalized study plans, and
					real-time progress tracking, Lingo empowers learners of all levels to
					achieve their language goals with confidence. Join us on the path to
					fluency and unlock a world of opportunities with Lingo!
				</p>

				<Link to="/levels">
					<button>
						<span>Start learning</span>
						<FaArrowRightLong className="icon" />
					</button>
				</Link>
			</div>

			<div className="right">
				<div className="img">
					<img src={img} alt="home" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
