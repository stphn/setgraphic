const elem = document.querySelector('.carousel');

if (elem) {

	const flkty = new Flickity( elem, {
		// options
		setGallerySize: false,

		wrapAround: true,
		pageDots: false
	});
}
