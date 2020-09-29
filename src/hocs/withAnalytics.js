import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import ReactGA from 'react-ga';

// HOCs: High Order Components
// A HOC is a function that returns another function, that receives a component as param
const Hoc = () => (Composed) =>
	class extends Component {
		// Repass the getInitialProps from a page so that Next can have control over it
		static async getInitialProps(context) {
			// Pass the component and its context
			return loadGetInitialProps(Composed, context);
		}

		// Initialize google analytics when the component that uses it mounts
		componentDidMount() {
			ReactGA.initialize('ID_ANALYTICS');
			// When a user access a page, trigger an event on GA - pageview and repass the url to GA
			ReactGA.pageview(window.location.pathname);
		}

		// Return the component with all its props
		render() {
			return <Composed {...this.props} />;
		}
	};

export default Hoc;
