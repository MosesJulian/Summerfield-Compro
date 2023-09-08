import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Rooms from '@/components/Rooms';
import { NextPage } from 'next';
import Attractions from '@/components/Attractions';
import Contact from '@/components/Contact';
import Head from 'next/head';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-inter',
});

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Summerfield Homestay & Cafe</title>
			</Head>

			<Header />

			<div className={`flex flex-col ${inter.variable} font-inter`}>
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
