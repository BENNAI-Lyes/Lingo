import './home.scss';

import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import AnyWhere from '../../components/anyWhere/AnyWhere';
import CategoriesCards from '../../components/categories/CategoriesCards';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/container/Container';

const Home = () => {
	return (
		<>
			<div className="home">
				<Container>
					<Navbar />
					<Hero />
					<AnyWhere />
					<CategoriesCards />
					<Footer />
				</Container>
			</div>
		</>
	);
};

export default Home;
