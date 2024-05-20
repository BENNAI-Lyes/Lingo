import { useParams } from 'react-router-dom';
import { useState } from 'react';

import './lesson.scss';
import { grammar } from '../../assets/data/grammar';
import { listening } from '../../assets/data/listening';
import { pleasure } from '../../assets/data/pleasure';
import { reading } from '../../assets/data/reading';
import { vocabulary } from '../../assets/data/vocabulary';
import { writing } from '../../assets/data/writing';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Lesson = () => {
	const id = parseInt(useParams().lessonId);
	const category = useParams().categoryName;

	const [openModal, setOpenModal] = useState(false);
	const [score, setScore] = useState(0);

	const [matchingAns, setMatchingAns] = useState('');
	const [reOrderingAns, setReOrderingAns] = useState('');
	const [fillingGapsAns, setFillingGapsAns] = useState('');

	const [clickedAnswer, setClickedAnswer] = useState({});

	let currentLesson;
	if (category === 'grammar') {
		currentLesson = grammar.find((lesson) => lesson.id === id);
	} else if (category === 'listening') {
		currentLesson = listening.find((lesson) => lesson.id === id);
	} else if (category === 'reading') {
		currentLesson = reading.find((lesson) => lesson.id === id);
	} else if (category === 'vocabulary') {
		currentLesson = vocabulary.find((lesson) => lesson.id === id);
	} else if (category === 'writing') {
		currentLesson = writing.find((lesson) => lesson.id === id);
	} else if (category === 'pleasure') {
		currentLesson = pleasure.find((lesson) => lesson.id === id);
	}

	const handelSubmit = (e) => {
		e.preventDefault();
	};

	const handelScore = (
		clickedAnswer,
		correctAnswer,
		questionType,
		numberOfQuestions
	) => {
		const activityPoints = 20 / currentLesson.questions.length;

		switch (questionType) {
			case 'trueFalse':
				if (clickedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
					setScore((prev) => prev + activityPoints / numberOfQuestions);
				}
				break;

			case 'multipleChoice':
				if (clickedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
					setScore((prev) => prev + activityPoints / numberOfQuestions);
				}
				break;

			case 'matching':
				const correctMatchPoint = activityPoints / correctAnswer.length;
				const matchingAnsTable = matchingAns.split(',');

				correctAnswer.forEach((ca, i) => {
					if (ca.toLowerCase() === matchingAnsTable[i].toLowerCase()) {
						setScore((prev) => prev + correctMatchPoint);
					}
				});
				break;

			case 'reOrdering':
				const correctReOrderPoint = activityPoints / correctAnswer.length;
				const reOrderAnsTable = reOrderingAns.split(',');

				correctAnswer.forEach((ca, i) => {
					if (ca.toLowerCase() === reOrderAnsTable[i].toLowerCase()) {
						setScore((prev) => prev + correctReOrderPoint);
					}
				});
				break;

			case 'fillingGaps':
				const correctFillingGapPoint = activityPoints / correctAnswer.length;
				const FillingGapAnsTable = fillingGapsAns.split(',');

				correctAnswer.forEach((ca, i) => {
					if (ca.toLowerCase() === FillingGapAnsTable[i].toLowerCase()) {
						setScore((prev) => prev + correctFillingGapPoint);
					}
				});
				break;

			default:
				break;
		}
	};

	const handelClickedAnswer = (clickedQuestion, answer) => {
		setClickedAnswer({ ...clickedAnswer, [clickedQuestion]: answer });
	};

	return (
		<div className="lesson">
			<div className="container">
				<div className="content">
					<Navbar />

					<h1>
						{' '}
						{category === 'pleasure' ? 'Reading For Pleasure' : category}:
					</h1>

					<h2> {currentLesson.title} </h2>

					{/* HINT */}
					{currentLesson.hint && (
						<div className="audio">
							<h4>Instructions:</h4>
							<p>{currentLesson.hint}</p>
						</div>
					)}

					{/* VIDEO */}
					{currentLesson.videoUrl && (
						<div className="video">
							<h4>Video:</h4>
							<iframe
								title="watch and listen to learn"
								frameborder="0"
								src={currentLesson.videoUrl}></iframe>
						</div>
					)}

					{/* TEXTS */}
					{currentLesson.text && (
						<div className="text">
							<h4>Text:</h4>

							{currentLesson?.text.map((t, i) => (
								<p key={i}> {t} </p>
							))}
						</div>
					)}

					{/* EXPLANATION */}
					{currentLesson.exp && (
						<div className="text">
							<h4>Explanation:</h4>

							<p> {currentLesson.exp} </p>
						</div>
					)}

					<hr />

					{/* TEST */}
					{currentLesson.cat !== 'pleasure' && (
						<div className="test">
							<h2>test:</h2>
							<p>Let's take the quiz.</p>
							{/* *********** QUESTIONS ********** */}
							<div className="questionsContainer">
								{currentLesson.questions?.map((ques, i) => {
									return (
										<div className="questionsItem trueFalse" key={i}>
											{ques.type === 'trueFalse' ? (
												<div className="trueFalse">
													<h3>
														Activity{' '}
														{i === 0
															? 'One'
															: i === 1
															? 'Two'
															: i === 2
															? 'Three'
															: i === 3
															? 'Four'
															: 'Five'}
														:
													</h3>
													{ques.list.map((q, i) => (
														<div className="trueFalseItem" key={i}>
															<div className="question">{q.question}</div>
															<div className="answers">
																{q.answers.map((a, i) => (
																	<div
																		key={i}
																		className={`answer ${
																			clickedAnswer[q.question] === a &&
																			'clicked'
																		}`}
																		onClick={() => {
																			handelScore(
																				a,
																				q.correctAnswer,
																				'trueFalse',
																				ques.list.length
																			);
																			handelClickedAnswer(q.question, a);
																		}}>
																		{a}
																	</div>
																))}
															</div>
														</div>
													))}
												</div>
											) : ques.type === 'multipleChoice' ? (
												<div className="questionsItem multipleChoice">
													<h3>
														Activity
														{i === 0
															? 'One'
															: i === 1
															? 'Two'
															: i === 2
															? 'Three'
															: i === 3
															? 'Four'
															: 'Five'}
														:
													</h3>
													{ques.list.map((q, i) => (
														<div className="multipleChoiceItem" key={i}>
															<div className="question">{q.question}</div>
															<div className="answers">
																{q.answers.map((a, i) => (
																	<div
																		key={i}
																		className={`answer ${
																			clickedAnswer[q.question] === a &&
																			'clicked'
																		}`}
																		onClick={() => {
																			handelScore(
																				a,
																				q.correctAnswer,
																				'multipleChoice',
																				ques.list.length
																			);
																			handelClickedAnswer(q.question, a);
																		}}>
																		{a}
																	</div>
																))}
															</div>
														</div>
													))}
												</div>
											) : ques.type === 'matching' ? (
												<div className="questionsItem matching">
													<h3>
														Activity{' '}
														{i === 0
															? 'One'
															: i === 1
															? 'Two'
															: i === 2
															? 'Three'
															: i === 3
															? 'Four'
															: 'Five'}
														:
													</h3>
													<div className="question">{ques.question}</div>
													<div className="answers">
														<div className="left">
															{ques.answers.g1.map((a, i) => (
																<div key={i} className="answer">
																	{a}
																</div>
															))}
														</div>
														<div className="right">
															{ques.answers.g2.map((a, i) => (
																<div key={i} className="answer">
																	{a}
																</div>
															))}
														</div>
													</div>
													<div className="matchingForm">
														<form onSubmit={handelSubmit}>
															<label htmlFor="matchingAns">Your answer:</label>
															<input
																type="text"
																className="matchingAns"
																placeholder="Enter the correct match here like: 1-e, 2-a ...."
																value={matchingAns}
																onChange={(e) => setMatchingAns(e.target.value)}
															/>
															<button
																type="submit"
																onClick={() =>
																	handelScore(
																		'matching',
																		ques.correctAnswer,
																		'matching'
																	)
																}>
																send
															</button>
														</form>
													</div>
												</div>
											) : ques.type === 'reOrdering' ? (
												<div className="questionsItem reOrdering">
													<h3>
														Activity{' '}
														{i === 0
															? 'One'
															: i === 1
															? 'Two'
															: i === 2
															? 'Three'
															: i === 3
															? 'Four'
															: 'Five'}
														:
													</h3>
													<div className="question">{ques.question}</div>
													<div className="answers">
														{ques.answers.map((a, i) => (
															<div key={i} className="answer">
																{a}
															</div>
														))}
													</div>

													<div className="reOrderingForm">
														<form onSubmit={handelSubmit}>
															<label htmlFor="reOrderingAns">
																Your answer:
															</label>
															<input
																type="text"
																className="reOrderingAns"
																placeholder="Enter the right order here like: 1,6,4,3 ...."
																value={reOrderingAns}
																onChange={(e) =>
																	setReOrderingAns(e.target.value)
																}
															/>
															<button
																type="submit"
																onClick={() =>
																	handelScore(
																		'reOrdering',
																		ques.correctAnswer,
																		'reOrdering'
																	)
																}>
																send
															</button>
														</form>
													</div>
												</div>
											) : (
												<div className="questionsItem fillingGaps">
													<h3>
														Activity{' '}
														{i === 0
															? 'One'
															: i === 1
															? 'Two'
															: i === 2
															? 'Three'
															: i === 3
															? 'Four'
															: 'Five'}
														:
													</h3>
													<div className="question">{ques.question}</div>
													<div className="answers">
														{ques.answers.map((a, i) => (
															<div key={i} className="answer">
																{a}
															</div>
														))}
													</div>

													<div className="fillingGapsForm">
														<form onSubmit={handelSubmit}>
															<label htmlFor="fillingGapsAns">
																Your answer:
															</label>
															<input
																type="text"
																className="fillingGapsAns"
																placeholder="Enter the gaps with the same order here like: a,b, ...."
																value={fillingGapsAns}
																onChange={(e) =>
																	setFillingGapsAns(e.target.value)
																}
															/>
															<button
																type="submit"
																onClick={() =>
																	handelScore(
																		'fillingGaps',
																		ques.correctAnswer,
																		'fillingGaps'
																	)
																}>
																send
															</button>
														</form>
													</div>
												</div>
											)}
										</div>
									);
								})}
							</div>

							{/* result */}
							<div className="resultContainer">
								<button
									className="check"
									onClick={() => {
										setOpenModal(true);
										setClickedAnswer({});
									}}>
									Check the result
								</button>

								{openModal && (
									<div className="result">
										<div className="content">
											<div
												className="close"
												onClick={() => {
													setOpenModal(false);
													setScore(0);
													setFillingGapsAns('');
													setMatchingAns('');
													setReOrderingAns('');
												}}>
												X
											</div>
											<h2>Result:</h2>
											<h4>
												You got: <span> {score.toFixed(2)} /20</span>{' '}
											</h4>
											<h5 className={score < 12 ? `fail` : `success`}>
												{' '}
												{score < 10
													? 'Failing'
													: score >= 10 && score < 12
													? 'Below Average'
													: score >= 12 && score < 14
													? 'Average'
													: score >= 14 && score < 16
													? 'Very Good'
													: 'Excellent'}
											</h5>
											<h6 className={score < 12 ? `fail` : `success`}>
												{score < 12
													? `Please try again.`
													: `You can pass to the next lesson.`}
											</h6>
										</div>
									</div>
								)}
							</div>
						</div>
					)}
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Lesson;
