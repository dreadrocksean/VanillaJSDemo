// Smelly global - hey it's a demo
var routes = {};

function registerRoutes() {
	storeRoute('/', {key: 'render1'});
	storeRoute('/render1', {key: 'render1'}, function() {});
	storeRoute('/render2', {key: 'render2'}, function() {});
	storeRoute('/render3', {key: 'render3'}, function() {});
	storeRoute('/render4', {key: 'render4'}, function() {});
	storeRoute('/render5', {key: 'render5'}, function() {});
}

function storeRoute(path, key, controller) {
	routes[path] = key;
}

function router() {
	var url = location.hash.slice(1) || '/';
	var pageKey = (routes[url] || {}).key;
	if (!pageKey) {
		return window.location.href = '#/';
	}
	renderPage(pageKey)

	indicateCurrMenuItem(url.replace('/', ''));
}

function indicateCurrMenuItem(route) {
	route = route || 'render1';
	var links = document.querySelectorAll('nav li');
	for (var i=0; link=links[i]; i++) {
		link.classList.remove('active');
	}
	document.querySelector('.menu-'+route).classList.add('active');
}