const routes = require('next-routes');

// Create custom routes
module.exports = routes()
	.add('/', 'home')
	.add('/users', 'users')
	.add('/users/:user', 'detail');
