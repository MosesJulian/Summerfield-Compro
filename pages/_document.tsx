import { Html, Main, NextScript, Head } from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="Summerfield Homestay & Cafe is a homestay located in Watukarung, Yogyakarta, Indonesia. We offer a wide range of rooms and amenities to make your stay as comfortable as possible. We ensure your stay is unforgettable and relaxing."
				/>
				<meta
					name="keywords"
					content="summerfield, homestay, cafe, watukarung, indonesia, rooms, comfortable, vacation, holiday, travel, tourism, attractions, scenery, beautiful, relaxing, experience, unique, unforgettable, yogyakarta, beach, sea, mount, forest, hotel, motel, inn, resort, hostel, guesthouse, bed, breakfast, breakfast, airbnb, bnb, booking, reservation, room, stay, staycation, traveloka, tiket, agoda, tripadvisor, google, maps, instagram, facebook, twitter, whatsapp, email,location, address, price, cost, cheap, affordable, budget, promo, discount, free, wifi, parking, breakfast, lunch, dinner, food, drink, menu, restaurant, cafe, bar, swimming"
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
				<meta name='og:image:type' content="png" />
				<meta name='og:image:alt' content='Summerfield Homestay & Cafe' />
				<meta name='og:image:width' content='600' />
				<meta name="og:image:height" content="600" />
				<meta name="og:site_name" content="Summerfield Homestay & Cafe" />

				<meta name="twitter:title" content="Summerfield Homestay & Cafe" />
				<meta
					name="twitter:description"
					content="Summerfield Homestay & Cafe is a homestay located in Watukarung, Yogyakarta, Indonesia. We offer a wide range of rooms and amenities to make your stay as comfortable as possible. We ensure your stay is unforgettable and relaxing."
				/>
				<meta name="twitter:type" content="website" />
				<meta name="twitter:url" content="https://summerfield.vercel.app/" />
				<meta name="twitter:image" content="/public/summerfield.png" />
				<meta name='twitter:image:alt' content='Summerfield Homestay & Cafe' />
				<meta name="twitter:site_name" content="Summerfield Homestay & Cafe" />

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
