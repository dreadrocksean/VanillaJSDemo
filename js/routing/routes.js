// Smelly global - hey it's a demo
var routes = {};

function registerRoutes() {
	storeRoute('/', {key: 'render1'});
	storeRoute('/render1', {key: 'render1'});
	storeRoute('/render2', {key: 'render2'});
	storeRoute('/render3', {key: 'render3'});
	storeRoute('/render4', {key: 'render4'});
	storeRoute('/render5', {key: 'render5'});
}

function storeRoute(path, page) {
	routes[path] = page;
}

function router() {
	var url = location.hash.slice(1) || '/';
	var pageKey = routes[url].key;
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