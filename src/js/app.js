import {registerRoutes, router} from './routing/routes';
require('../styles/app.scss');

const app = () => {
	window.addEventListener('load', app);
	window.addEventListener('hashchange', router);
	registerRoutes();
	router();
};
window.addEventListener('load', app);