let tolerance = 15

let headerOpts = {
	tolerance,
	classes: {
		top      : 'header--top',
		notTop   : 'header--not-top',
		pinned   : 'header--pinned',
		unpinned : 'header--unpinned'
	}
}

let scrollerOpts = {
	tolerance,
	classes: {
		pinned   : 'mobileMenu__scroller--pinned',
		unpinned : 'mobileMenu__scroller--unpinned'
	}
}


const initHeadroom = function() {

	;(new Headroom(document.querySelector('.header'), headerOpts)).init()
	//;(new Headroom(document.querySelector('.mobileMenu__scroller'), scrollerOpts)).init()

}

// Init -------------------------------------------------------------- //
initHeadroom()
