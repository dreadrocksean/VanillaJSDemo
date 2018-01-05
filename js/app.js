function app() {
	window.addEventListener('hashchange', router);
	registerRoutes();
	router();
}

function route(e) {
	e.preventDefault();
	e.stopPropagation();
	var el = getTarget(e);
	var route = getRouteName(el.href);
	renderPage(route);
	return false;
}

function renderAdvert(page) {
	var placeHolder = document.querySelector('#placeholder');
	placeHolder.innerHTML = '';
	if (page.advert) {
		var advert = document.createElement('div');
		advert.className = 'advert';
		advert.innerHTML = page.advert;
		placeHolder.appendChild(advert);
	}
}

function getTarget(e) {
	e = e || window.event;
	var src = e.target || e.srcElement;
	if (src.nodeType === 3) src = src.parentNode;
	return src;
}

function getRouteName(url) {
	return url.substring(url.lastIndexOf('/') + 1);
}

function indicateCurrMenuItem(route) {
	route = route || 'render1';
	var links = document.querySelectorAll('li');
	for (var i=0; link=links[i]; i++) {
		link.classList.remove('active');
	}
	document.querySelector('.menu-'+route).classList.add('active');
}