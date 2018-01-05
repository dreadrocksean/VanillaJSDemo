// Smelly global - hey it's a demo
var routes = {};

function registerRoutes() {
	storeRoute('/', 'render1');
	storeRoute('/render1', 'render1');
	storeRoute('/render2', 'render2');
	storeRoute('/render3', 'render3');
	storeRoute('/render4', 'render4');
	storeRoute('/render5', 'render5');
}

function storeRoute(path, page) {
	routes[path] = page;
}

function router() {
	var url = location.hash.slice(1) || '/';
	var pageKey = routes[url];
	if (!pageKey) {
		return window.location.href = '#/';
	}
	renderPage(pageKey)

	indicateCurrMenuItem(url.replace('/', ''));
}

function indicateCurrMenuItem(route) {
	route = route || 'render1';
	var links = document.querySelectorAll('li');
	for (var i=0; link=links[i]; i++) {
		link.classList.remove('active');
	}
	document.querySelector('.menu-'+route).classList.add('active');
}