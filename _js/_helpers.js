// Public -------------------------------------------------------------- //

export const each = function(data, fn) {

	if (data==null) return false

	if ((data).constructor===Object) return [].forEach.call(Object.keys(data), (key) => fn(data[key], key, data))
	return [].forEach.call(data, (item, i) => fn(item, i, data))

}

export const executeOnMatch = function(query, fn) {

	return function(e) {

		let elem = e.target.closest(query)

		if (elem!=null) {
			stopEvent(e)
			fn(elem)
		}

	}

}

export const formatNumber = function(num) {

	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

}

export const stopEvent = function(e = {}) {

	if (typeof e.stopPropagation==='function') e.stopPropagation()
	if (typeof e.preventDefault==='function')  e.preventDefault()

}

export const delay = function(fn, delay) {

	setTimeout(() => {
		requestAnimationFrame(fn)
	}, delay)

}

export const hasTouchscreen = function() {

	return !!('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch))

}
