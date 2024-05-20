import { Link, useParams } from 'react-router-dom';

import './categoryItem.scss';

import reading from '../../assets/img/reading.svg';
import vocabulary from '../../assets/img/new.svg';
import grammar from '../../assets/img/grammar.svg';
import writing from '../../assets/img/writing.svg';
import listening from '../../assets/img/listening.svg';
import pleasure from '../../assets/img/pleasure.svg';

const CategoryItem = ({ title, desc }) => {
	const levelId = useParams().id;

	let currentImage;
	if (title === 'reading') {
		currentImage = reading;
	} else if (title === 'vocabulary') {
		currentImage = vocabulary;
	}
	if (title === 'grammar') {
		currentImage = grammar;
	} else if (title === 'writing') {
		currentImage = writing;
	} else if (title === 'listening') {
		currentImage = listening;
	} else if (title === 'reading-pleasure') {
		currentImage = pleasure;
	}

	return (
		<div className="categoryItem">
			<div className="left">
				<h2>{title === 'reading-pleasure' ? 'Reading for pleasure' : title}</h2>
				<p>{desc}</p>
				<Link
					to={
						title === 'reading-pleasure'
							? `/levels/${levelId}/categories/reading-pleasure`
							: `/levels/${levelId}/categories/${title}`
					}>
					<button>Learn</button>
				</Link>
			</div>
			<div className="right">
				<img src={currentImage || ''} alt="" />
			</div>
		</div>
	);
};

export default CategoryItem;
