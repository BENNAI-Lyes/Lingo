import './listening.scss';

import listening from '../../assets/img/listening.svg';
import { listening as lessons } from '../../assets/data/listening';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Listening = () => {
	return (
		<div className="listening">
			<div className="container">
				<Navbar />
				<div className="flex">
					<div className="left">
						<div className="content">
							<div className="title">
								<img src={listening} alt="" /> <h1>Listening</h1>
							</div>
							<h2>Lessons:</h2>
							<div className="lessons">
								{lessons.map((lesson) => {
									return (
										<div className="lesson" key={lesson.id}>
											<span></span>
											<Link
												to={`/listening/${lesson.id}`}
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
							<img src={listening} alt="" />
						</div>
						<div className="quote">
							<p className="text">
								“I remind myself every morning: Nothing I say this day will
								teach me anything. So if I’m going to learn, I must do it by
								listening.”
							</p>
							<p className="other">Larry King, CNN</p>
						</div>

						<div className="quote">
							<p className="text">
								“If you make listening and observation your occupation, you will
								gain much more than you can by talk.”
							</p>
							<p className="other">
								Robert Baden-Powell, Boy Scouts Association
							</p>
						</div>
						<div className="quote">
							<p className="text">
								“Most of the successful people I've known are the ones who do
								more listening than talking.”{' '}
							</p>
							<p className="other">
								Bernard Baruch, financier and presidential adviser
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Listening;
