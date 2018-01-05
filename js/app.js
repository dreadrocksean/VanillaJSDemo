function app() {
    render('render1');
}

function route(e) {
    e.preventDefault();
    e.stopPropagation();
    var el = getTarget(e);
    var route = getRouteName(el.href);
    render(route);
    return false;
}

function render(route) {
    var page;
    switch (route) {
        case 'render1': page = render1(); break;
        case 'render2': page = render2(); break;
        case 'render3': page = render3(); break;
        case 'render4': page = render4(); break;
        case 'render5': page = render5(); break;
    }
    document.getElementsByTagName('header')[0].innerHTML = page.header;
    document.getElementsByTagName('main')[0].innerHTML = page.main;
    document.getElementsByTagName('footer')[0].innerHTML = page.footer;

    setActive(route);
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

function setActive(route) {
    var links = document.getElementsByTagName('li');
    for (var i=0; link=links[i]; i++) {
        link.classList.remove('active');
    }
    document.getElementsByClassName('menu-'+route)[0].classList.add('active');
}