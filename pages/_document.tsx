import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en">
			<Head title="Summerfield">
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
