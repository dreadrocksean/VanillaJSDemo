import {renderPage} from '../components/main';

// Smelly global - hey it's a demo
const routes = {};

export const registerRoutes = () => {
	storeRoute('/', {key: 'render1'});
	storeRoute('/render1', {key: 'render1'}, () => {});
	storeRoute('/render2', {key: 'render2'}, () => {});
	storeRoute('/render3', {key: 'render3'}, () => {});
	storeRoute('/render4', {key: 'render4'}, () => {});
	storeRoute('/render5', {key: 'render5'}, () => {});
};

const storeRoute = (path, key/*, controller*/) => {
	routes[path] = key;
};

export const router = () => {
	const url = location.hash.slice(1) || '/';
	const pageKey = (routes[url] || {}).key;
	if (!pageKey) {
		return window.location.href = '#/';
	}
	renderPage(pageKey);

	indicateCurrMenuItem(url.replace('/', ''));
};

const indicateCurrMenuItem = route => {
	route = route || 'render1';
	const links = document.querySelectorAll('nav li');
	links.forEach(link => link.classList.remove('active'));
	document.querySelector('.menu-'+route).classList.add('active');
};