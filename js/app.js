const app = () => {
	window.addEventListener('load', app);
	window.addEventListener('hashchange', router);
	registerRoutes();
	router();
}
(function() {
	window.addEventListener('load', app);
})();