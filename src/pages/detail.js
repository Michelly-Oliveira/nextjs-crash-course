import React from 'react';
import axios from 'axios';

import withAnalytics from '../hocs/withAnalytics';

const Detail = ({ user }) => (
	<div>
		<img src={user.avatar_url} alt={user.login} wifth='200' />
		<h1>{user.login}</h1>
	</div>
);

// Any param pased to the route is accessible through the prop query of getInitialProps
Detail.getInitialProps = async ({ query }) => {
	const response = await axios.get(
		`https://api.github.com/users/${query.user}`
	);

	return {
		user: response.data,
	};
};

export default withAnalytics()(Detail);
