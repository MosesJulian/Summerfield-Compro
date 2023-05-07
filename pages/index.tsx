import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { NextPage } from 'next';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Summerfield</title>
				<link rel="icon" href="/summerfield.ico" />
				<link
					rel="preload"
					href="/fonts/Inter-roman.var.woff2?v=3.19"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</Head>

			<Header />

			<div className="flex flex-col">
				<Introduction />
				<About className="px-16 py-8" />
			</div>

			<Footer className="px-16 py-8" />
		</>
	);
};

export default Home;
