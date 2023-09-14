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
					content="Summerfield Homestay & Cafe, Summerfield Homestay and Cafe, summerfield homestay & cafe, summerfield homestay and cafe, summerfield watukarung, summerfield yogyakarta, summerfield indonesia, homestay yogyakarta, homestay watukarung, homestay indonesia, cafe yogyakarta, cafe watukarung, cafe indonesia, summerfield, homestay, cafe, watukarung"
				/>
				<meta name="author" content="Summerfield" />
				<meta name="og:title" content="Summerfield Homestay & Cafe" />
				<meta
					name="og:description"
					content="Summerfield Homestay & Cafe is a homestay located in Watukarung, Yogyakarta, Indonesia. We offer a wide range of rooms and amenities to make your stay as comfortable as possible. We ensure your stay is unforgettable and relaxing."
				/>
				<meta name="og:type" content="website" />
				<meta name="og:url" content="https://www.summerfieldwatukarung.com/" />
				<meta name="og:image" content="https://www.summerfieldwatukarung.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsummerfield.116bdb93.png&w=1080&q=75" />
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
				<meta name="twitter:url" content="https://www.summerfieldwatukarung.com/" />
				<meta name="twitter:image" content="https://www.summerfieldwatukarung.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsummerfield.116bdb93.png&w=1080&q=75" />
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
