import './categories.scss';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import CategoryItem from '../../components/categoryItem/CategoryItem';

const Categories = () => {
	return (
		<div className="categories">
			<div className="container">
				<Navbar />

				<div className="cats">
					<CategoryItem
						title="reading"
						desc="Reading is to the mind what exercise is to the body."
					/>
					<CategoryItem
						title="writing"
						desc="Either write something worth reading or do something worth
					writing."
					/>
					<CategoryItem title="grammar" desc="Grammar is the Language’s." />
					<CategoryItem
						title="listening"
						desc="There is a difference between listening and waiting for your
					turn to speak."
					/>
					<CategoryItem
						title="vocabulary"
						desc="One forgets words as one forgets names. One's vocabulary needs
					constant fertilizing or it will die."
					/>
					<CategoryItem
						title="reading-pleasure"
						desc="A reader lives a thousand lives before he dies."
					/>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Categories;
