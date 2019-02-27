import anime from 'animejs';
import getPosition from './offsetTop';

export default (anchor, offset = 0, duration, completeCallback) => {
	let offsetFromTop = getPosition(anchor).y;

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