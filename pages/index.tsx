import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Rooms from '@/components/Rooms';
import { NextPage } from 'next';
import Attractions from '@/components/Attractions';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
	return (
		<>
			<Header />

			<div className="flex flex-col">
				<Introduction />
				<About className="px-16 py-8" />
				<Rooms className="px-16 py-8" />
				<Attractions className="px-16 py-8" />
				<Contact className="px-16 py-8" />
			</div>

			<Footer className="px-16 py-8" />
		</>
	);
};

export default Home;
