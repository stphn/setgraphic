const elem = document.querySelector('.carousel');

if (elem) {

	const flkty = new Flickity( elem, {
		// options
		setGallerySize: false,
		adaptiveHeight: true,
		wrapAround: true,
		pageDots: false
	});
}
