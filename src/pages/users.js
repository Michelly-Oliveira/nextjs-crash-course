import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

// Allow google analytics to monitor user behavior on the page
import withAnalytics from '../hocs/withAnalytics';

const Users = ({ users }) => (
	<div>
		<Head>
			<title>Usuários</title>
		</Head>

		<ul>
			{users.map((user) => (
				<li key={user.id}>
					{user.login}
					<Link href={`users/${user.login}`}>
						<a>Acessar perfil</a>
					</Link>
				</li>
			))}
		</ul>

		{/* Always add an <a> tag inside the Link */}
		<Link href='/'>
			<a>Voltar</a>
		</Link>
	</div>
);

// If this is the first page accessed, it will be loaded on the server: the api call will be made on the server side, the page will be completely loaded on the server and sent to the browser with all the components and data
// If this isn't the first loaded page, then it will be loaded normally with React on the browser
// Use this function to make sure that if the page is loaded on the server, it will make the api call on the server side too, not wait until loaded on the browser
Users.getInitialProps = async () => {
	const response = await axios.get(
		'https://api.github.com/orgs/rocketseat/members'
	);

	return {
		users: response.data,
	};
};

export default withAnalytics()(Users);
