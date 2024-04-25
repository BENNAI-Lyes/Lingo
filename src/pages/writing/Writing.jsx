import './writing.scss';
import writing from '../../assets/img/writing.svg';
import { writing as lessons } from '../../assets/data/writing';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Writing = () => {
	return (
		<div className="writing">
			<div className="container">
				<Navbar />
				<div className="flex">
					<div className="left">
						<div className="content">
							<div className="title">
								{' '}
								<img src={writing} alt="" /> <h1>Writing</h1>{' '}
							</div>
							<h2>Lessons:</h2>
							<div className="lessons">
								{lessons.map((lesson) => {
									return (
										<div className="lesson" key={lesson.id}>
											<span></span>
											<Link
												to={`/writing/${lesson.id}`}
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
							<img src={writing} alt="" />
						</div>

						<div className="quote">
							<p className="text">“You learn to write by writing.”</p>
							<p className="other">William Zinsser</p>
						</div>

						<div className="quote">
							<p className="text">
								“You don’t start out writing good stuff. You start out writing
								crap and thinking it’s good stuff, and then gradually you get
								better at it.”
							</p>
							<p className="other">Octavia E. Butler</p>
						</div>

						<div className="quote">
							<p className="text">“I write to discover what I know.”</p>
							<p className="other">Flannery O’Connor</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Writing;
