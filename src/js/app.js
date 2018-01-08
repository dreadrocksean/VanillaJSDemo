import {registerRoutes, router} from './routing/routes';

const app = () => {
	window.addEventListener('load', app);
	window.addEventListener('hashchange', router);
	registerRoutes();
	router();
}
(() => {
	window.addEventListener('load', app);
})();