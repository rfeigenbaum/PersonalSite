// Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export default function debounce(this: any, func:Function, wait: number, immediate?: boolean) {
	var timeoutId:number|null

	return function executedFunction(this: any) {
		var context = this
		var args = arguments

		var later = function() {
			timeoutId = null
			if (!immediate) func.apply(context, args)
		}

		var callNow = immediate && !timeoutId

		clearTimeout(timeoutId as number)

		timeoutId = setTimeout(later, wait)

		if (callNow) func.apply(context, args)
	}
}
