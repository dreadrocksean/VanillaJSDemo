function app() {
	window.addEventListener('hashchange', router);
	registerRoutes();
	router();
}