import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Template for all the pages of the app
export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		// Like a HOC
		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />)
		);

		const styleTags = sheet.getStyleElement();

		return {
			...page,
			styleTags,
		};
	}

	render() {
		return (
			<Html>
				{/* Apply this head to all pages, and if any page has its own Head, append to this head */}
				<Head>
					{/* Add the style from the first load of next */}
					<style>{this.props.styleTags}</style>
				</Head>
				<body>
					{/* Content of the page */}
					<Main />
					{/* Any script we wanna add to the page */}
					<NextScript />
				</body>
			</Html>
		);
	}
}
