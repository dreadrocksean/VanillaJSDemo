const renderAdvert = page => {
	const placeHolder = document.querySelector('#placeholder');
	placeHolder.innerHTML = '';
	if (page.advert) {
		const advert = document.createElement('div');
		advert.className = 'advert';
		advert.innerHTML = page.advert;
		placeHolder.appendChild(advert);
	}
}

const renderPage = pageKey => {
	const page = renderMap[pageKey]();

	renderAdvert(page);
	document.querySelector('header').innerHTML = page.header;
	document.querySelector('main').innerHTML = page.main;
	document.querySelector('footer').innerHTML = page.footer;

	setMargins();
}

const setMargins = () => {
	const height = document.querySelector('header-container').offsetHeight;
	document.querySelector('main').style.marginTop = height+'px';
}