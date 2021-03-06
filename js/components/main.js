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

function renderPage(pageKey) {
	var page = renderMap[pageKey]();

	renderAdvert(page);
	document.querySelector('header').innerHTML = page.header;
	document.querySelector('main').innerHTML = page.main;
	document.querySelector('footer').innerHTML = page.footer;

	setMargins();
}

function setMargins() {
	var height = document.querySelector('header-container').offsetHeight;
	document.querySelector('main').style.marginTop = height+'px';
}