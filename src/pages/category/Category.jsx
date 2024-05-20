import { Link, useParams } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import './category.scss';

import reading from '../../assets/img/reading.svg';
import vocabulary from '../../assets/img/new.svg';
import grammar from '../../assets/img/grammar.svg';
import writing from '../../assets/img/writing.svg';
import listening from '../../assets/img/listening.svg';
import pleasure from '../../assets/img/pleasure.svg';

import { reading as readingLessons } from '../../assets/data/reading';
import { writing as writingLessons } from '../../assets/data/writing';
import { vocabulary as vocabularyLessons } from '../../assets/data/vocabulary';
import { grammar as grammarLessons } from '../../assets/data/grammar';
import { pleasure as pleasureLessons } from '../../assets/data/pleasure';
import { listening as listeningLessons } from '../../assets/data/listening';

import {
	readingQuotes,
	vocabularyQuotes,
	grammarQuotes,
	writingQuotes,
	listeningQuotes,
	pleasureQuotes,
} from '../../assets/data/quotes';

const Category = () => {
	const { id: levelId, categoryName } = useParams();

	let currentImage;
	let currentLessons;
	let currentQuotes;

	if (categoryName === 'reading') {
		currentImage = reading;
		currentLessons = readingLessons;
		currentQuotes = readingQuotes;
	} else if (categoryName === 'vocabulary') {
		currentImage = vocabulary;
		currentLessons = vocabularyLessons;
		currentQuotes = vocabularyQuotes;
	}
	if (categoryName === 'grammar') {
		currentImage = grammar;
		currentLessons = grammarLessons;
		currentQuotes = grammarQuotes;
	} else if (categoryName === 'writing') {
		currentImage = writing;
		currentLessons = writingLessons;
		currentQuotes = writingQuotes;
	} else if (categoryName === 'listening') {
		currentImage = listening;
		currentLessons = listeningLessons;
		currentQuotes = listeningQuotes;
	} else if (categoryName === 'reading-pleasure') {
		currentImage = pleasure;
		currentLessons = pleasureLessons;
		currentQuotes = pleasureQuotes;
	}

	return (
		<div className="category">
			<div className="container">
				<Navbar />
				<div className="flex">
					<div className="left">
						<div className="content">
							<div className="title">
								<img src={currentImage} alt="category" />{' '}
								<h1>
									{categoryName === 'reading-pleasure'
										? 'Reading for pleasure'
										: categoryName}
								</h1>
							</div>
							<h2>Lessons:</h2>
							<div className="lessons">
								{currentLessons?.map((lesson) => {
									return (
										<div className="lesson" key={lesson.id}>
											<span />
											<Link
												to={
													categoryName === 'reading-pleasure'
														? `/levels/${levelId}/categories/reading-pleasure/${lesson.id}`
														: `/levels/${levelId}/categories/${categoryName}/${lesson.id}`
												}
												style={{ color: '#333' }}>
												<p className="lessonTitle">{lesson.title}</p>
											</Link>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<div className="right">
						<div className="img">
							<img src={currentImage} alt="" />
						</div>

						{currentQuotes.map((quote) => (
							<div key={quote.quote} className="quote">
								<p className="text">{quote.quote}</p>
								<p className="other"> {quote.author} </p>
							</div>
						))}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Category;
