function app() {
	window.addEventListener('hashchange', router);
	registerRoutes();
	router();
}
(function() {
	window.addEventListener('load', app);
})();