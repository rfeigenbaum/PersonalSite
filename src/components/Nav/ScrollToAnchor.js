import $ from 'jquery';
import anime from 'animejs';

export default (anchor) => {
	let offsetFromTop = $(anchor).offset().top

	let distanceFromDiv = Math.abs(offsetFromTop - window.pageYOffset);
	let duration = distanceFromDiv/3
	
	const scrollCoords = {
		y: window.pageYOffset
	}
	anime({
		targets: scrollCoords,
		y: offsetFromTop,
		duration: 700,
		easing: 'easeInOutCubic',
		update: () => window.scroll(0, scrollCoords.y)
	})
}