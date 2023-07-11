import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head title="Summerfield Homestay & Cafe">
				<meta
					name="description"
					content="Summerfield Homestay & Cafe is a homestay located in Watukarung, Yogyakarta, Indonesia. We offer a wide range of rooms and amenities to make your stay as comfortable as possible. We ensure your stay is unforgettable and relaxing."
				/>
				<meta
					name="keywords"
					content="summerfield, homestay, cafe, watukarung, indonesia, rooms, comfortable, vacation, holiday, travel, tourism, attractions, scenery, beautiful, relaxing, experience, unique, unforgettable"
				/>
				<meta name="author" content="Summerfield" />
				<meta name="og:title" content="Summerfield Homestay & Cafe" />
				<meta
					name="og:description"
					content="Summerfield Homestay & Cafe is a homestay located in Watukarung, Yogyakarta, Indonesia. We offer a wide range of rooms and amenities to make your stay as comfortable as possible. We ensure your stay is unforgettable and relaxing."
				/>
				<meta name="og:type" content="website" />
				<meta name="og:url" content="https://summerfield.vercel.app/" />
				<meta name="og:image" content="/public/summerfield.png" />
				<meta name="og:site_name" content="Summerfield Homestay & Cafe" />
				<meta name="og:locale" content="en_US" />

				<link rel="icon" href="/summerfield.ico" />
				<link
					rel="preload"
					href="/fonts/Inter-roman.var.woff2?v=3.19"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
