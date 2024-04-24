import './card.scss';

const Card = ({ frontTitle, backTitle, desc }) => {
	return (
		<div className="card card-1">
			<div className="face face1">
				<div className="content">
					<span className="stars"></span>
					<h2 className="text">{backTitle}</h2>
					<p className="text">{desc}</p>
				</div>
			</div>
			<div className="face face2">
				<h2> {frontTitle} </h2>
			</div>
		</div>
	);
};

export default Card;
