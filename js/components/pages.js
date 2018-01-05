function renderAdvert(pageKey) {
	var placeHolder = document.querySelector('#placeholder');
	placeHolder.innerHTML = '';
	var page = renderMap[pageKey]();
	if (page.advert) {
		var advert = document.createElement('div');
		advert.className = 'advert';
		advert.innerHTML = page.advert;
		placeHolder.appendChild(advert);
	}
}

function renderPage(pageKey) {
	renderAdvert(pageKey);

	document.querySelector('header').innerHTML = renderMap[pageKey]().header;
	document.querySelector('main').innerHTML = renderMap[pageKey]().main;
	document.querySelector('footer').innerHTML = renderMap[pageKey]().footer;

	setMargins();
}

function setMargins() {
	var height = document.querySelector('header-container').offsetHeight;
	document.querySelector('main').style.marginTop = height+'px';
}