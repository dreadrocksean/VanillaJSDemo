// Smelly global - hey it's a demo
var routes = {};

// I knooooo. Not at all scalable :-)
function registerRoutes() {
	storeRoute('/', render1());
	storeRoute('/render1', render1());
	storeRoute('/render2', render2());
	storeRoute('/render3', render3());
	storeRoute('/render4', render4());
	storeRoute('/render5', render5());
}

function storeRoute(path, page) {
	routes[path] = {page: page};
}

function router() {
	var url = location.hash.slice(1) || '/';
	var page = routes[url].page;
	renderPage(page)

	indicateCurrMenuItem(url.replace('/', ''));
}

function renderPage(page) {
	renderAdvert(page);

	document.querySelector('header').innerHTML = page.header;
	document.querySelector('main').innerHTML = page.main;
	document.querySelector('footer').innerHTML = page.footer;
}