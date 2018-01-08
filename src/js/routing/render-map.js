import {headers} from '../templates/headers';
import {mainContents} from '../templates/contents';
import {adverts} from '../templates/adverts';
import {footers} from '../templates/footers';

export const renderMap = {
	render1: () => (
		{
			header: headers.header1,
			main: mainContents.main2,
			footer: footers.footer3,
		}
	),
	render2: () => (
		{
			header: headers.header3,
			main: mainContents.main4,
			footer: footers.footer1,
		}
	),
	render3: () => (
		{
			header: headers.header2,
			main: mainContents.main1,
			footer: footers.footer2,
			dvert: adverts.advert1,
		}
	),
	render4: () => (
		{
			header: headers.header1,
			main: mainContents.main3,
			footer: footers.footer4,
		}
	),
	render5: () => (
		{
			header: headers.header2,
			main: mainContents.main4,
			footer: footers.footer3,
			dvert: adverts.advert2,
		}
	)
};

