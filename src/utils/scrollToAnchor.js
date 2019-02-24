import $ from 'jquery';
import anime from 'animejs';

export default (anchor, duration, completeCallback) => {
	let offsetFromTop = $(anchor).offset().top

	let d = duration || 700;
	
	const scrollCoords = {
		y: window.pageYOffset
	}
	anime({
		targets: scrollCoords,
		y: offsetFromTop,
		duration: d,
		easing: 'easeInOutCubic',
		update: () => window.scroll(0, scrollCoords.y),
		complete: completeCallback
	})
}