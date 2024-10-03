import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AdvertisementSection from '../components/AdvertisementSection';
import HeroSection from './components/HeroSection';
import PopularItemsSection from './components/PopularItemsSection';

const Home = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<AdvertisementSection />
			<PopularItemsSection />
			<Footer />
		</>
	);
};

export default Home;
