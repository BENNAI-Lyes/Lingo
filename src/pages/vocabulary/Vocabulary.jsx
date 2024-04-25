import './vocabulary.scss';

import vocabulary from '../../assets/img/new.svg';
import { vocabulary as lessons } from '../../assets/data/vocabulary';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Vocabulary = () => {
	return (
		<div className="speaking">
			<div className="container">
				<Navbar />
				<div className="flex">
					<div className="left">
						<div className="content">
							<div className="title">
								<img src={vocabulary} alt="" /> <h1>Vocabulary</h1>
							</div>
							<h2>Lessons:</h2>
							<div className="lessons">
								{lessons.map((lesson) => {
									return (
										<div className="lesson" key={lesson.id}>
											<span></span>
											<Link
												to={`/vocabulary/${lesson.id}`}
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
							<img src={vocabulary} alt="" />
						</div>
						<div className="quote">
							<p className="text">
								“One forgets words as one forgets names. One’s vocabulary needs
								constant fertilizing or it will die”
							</p>
							<p className="other">Evelyn Waugh</p>
						</div>

						<div className="quote">
							<p className="text">
								“Words play an enormous part in our lives and are therefore
								deserving of the closest study.”
							</p>
							<p className="other">Aldous Huxley</p>
						</div>
						<div className="quote">
							<p className="text">“All I know is what I have words for.” </p>
							<p className="other">Ludwig Wittgenstein</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Vocabulary;
