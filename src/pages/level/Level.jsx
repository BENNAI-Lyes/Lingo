import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './level.scss';

import { Link } from 'react-router-dom';

const Level = () => {
	return (
		<div className="level">
			<div className="container">
				<Navbar />
				<div className="cards">
					<Link to="/levels/level1/categories">
						<Card
							backTitle="1ST Year."
							frontTitle="1 MS"
							desc="This section contains lessons and activities for 1st year middle
						school learners."
						/>
					</Link>
					<Link to="/levels/level2/categories">
						<Card
							backTitle="2nd Year."
							frontTitle="2 MS"
							desc="This section contains lessons and activities for 2nd year
              middle school learners."
						/>
					</Link>
					<Link to="/levels/level3/categories">
						<Card
							backTitle="3rd Year."
							frontTitle="3 MS"
							desc="This section contains lessons and activities for 3rd year
              middle school learners."
						/>
					</Link>
					<Link to="/levels/level4/categories">
						<Card
							backTitle="4th Year."
							frontTitle="4 MS"
							desc="This section contains lessons and activities for 4th year
              middle school learners."
						/>
					</Link>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Level;
