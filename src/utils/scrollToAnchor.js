import $ from 'jquery';
import anime from 'animejs';

export default (anchor, offset = 0, duration, completeCallback) => {
	let offsetFromTop = $(anchor).offset().top + offset;

	let d = duration || 700;
	
	const scrollCoords = {
		y: window.pageYOffset
	}
	return anime({
		targets: scrollCoords,
		y: offsetFromTop,
		duration: d,
		easing: 'easeInOutCubic',
		update: () => window.scroll(0, scrollCoords.y),
		complete: completeCallback
	})
}