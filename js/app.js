function app() {
	window.addEventListener('hashchange', root.router);
	root.registerRoutes();
	root.router();
}

window.addEventListener('load', app);