'use strict';

var app = function app() {
	window.addEventListener('hashchange', router);
	registerRoutes();
	router();
};
