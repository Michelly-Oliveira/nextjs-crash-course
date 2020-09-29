import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

// Not using the hoc here because it gives a warning since we don't use getInitialProps in this page
// import withAnalytics from '../hocs/withAnalytics';

const Title = styled.h1`
	color: #069;
	font-size: 40px;
`;

const Home = () => (
	<>
		{/* Have access to all tags inside the html <head> tag
        Each page can have its own metadata, title
    */}
		<Head>
			<title>Home</title>
		</Head>

		{/* Add image like this so that the server won't use it */}
		<img src='/cat.jpg' alt='cat image' width='200' />
		<Title>Hello World</Title>

		<Link href='/users'>
			<a>Usuários</a>
		</Link>
	</>
);

export default Home;

/*
 *  First page is always loaded on the server, all other pages are loaded with React on the browser
 *  Server loads all js code and sends back to the browser the page completely loaded, with all the components
 *  Good for SEO
 */
