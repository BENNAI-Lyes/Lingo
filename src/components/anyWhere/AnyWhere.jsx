import './anyWhere.scss';
import anywhere from '../../assets/img/anywhere.svg';

const AnyWhere = () => {
	return (
		<div className="anywhere">
			<div className="left">
				<img src={anywhere} alt="learn from anywhere" />
			</div>
			<div className="right">
				<h2>
					Learn from <span>anywhere</span> && <span>anytime</span>{' '}
				</h2>
				<p>
					Access your educational resources seamlessly , whether you're at home,
					on the move, or anywhere anytime, and stay connected to your learning
					materials effortlessly.
				</p>
			</div>
		</div>
	);
};

export default AnyWhere;
