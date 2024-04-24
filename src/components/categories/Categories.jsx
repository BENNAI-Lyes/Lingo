import { FcReading, FcReadingEbook } from 'react-icons/fc';
import { TbTextGrammar, TbVocabulary, TbWriting } from 'react-icons/tb';
import { GrAssistListening } from 'react-icons/gr';

import './categories.scss';

const Categories = () => {
	return (
		<div className="categories">
			<h2>Course categories</h2>
			<div className="line" />
			<p>
				Whether you're aiming to strengthen your reading comprehension, writing
				skills,listening abilities, expand your vocabulary, our course covers
				all the categories and more...
			</p>
			<div className="items">
				<div className="item">
					<FcReading className="icon" />
					<div>
						<h3>Reading</h3>
						<div>
							<span>20 Courses</span>
							<span>20 Tests</span>
						</div>
					</div>
				</div>
				<div className="item">
					<TbWriting className="icon" />

					<div>
						<h3>Writing</h3>
						<div>
							<span>18 Courses</span>
							<span>18 Tests</span>
						</div>
					</div>
				</div>
				<div className="item">
					<GrAssistListening className="icon" />
					<div>
						<h3>Listening</h3>
						<div>
							<span>16 Courses</span>
							<span>16 Tests</span>
						</div>
					</div>
				</div>
				<div className="item">
					<TbTextGrammar className="icon" />
					<div>
						<h3>Grammar</h3>
						<div>
							<span>13 Courses</span>
							<span>13 Tests</span>
						</div>
					</div>
				</div>
				<div className="item">
					<FcReadingEbook className="icon" />
					<div>
						<h3>Reading for pleasure</h3>
						<div>
							<span>26 Courses</span>
							<span>26 Tests</span>
						</div>
					</div>
				</div>
				<div className="item">
					<TbVocabulary className="icon" />
					<div>
						<h3>Vocabulary</h3>
						<div>
							<span>26 Courses</span>
							<span>26 Tests</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
