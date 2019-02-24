import $ from 'jquery';
import getScrollOffset from './scrollOffset';
import ScrollToAnchor from './scrollToAnchor';

const VelocityRequired = 6

export default class MagneticScroll {
	constructor(className) {
		this.className = className;
		this.elems = Array.from(document.getElementsByClassName(className));

		this.prevScrollPosition = getScrollOffset().y;

		//window.addEventListener("mousewheel", this.scrolled, false);
		// Firefox
		//window.addEventListener("DOMMouseScroll", this.scrolled, false);

		this.scrollDisabled = false
	}
	scrolled = (event) => {
		event.preventDefault()
		let newPosition = getScrollOffset().y;
		let currentElemIndex = this.getCurrentElemIndex(newPosition);
		console.log(event)
		if(event.deltaY > VelocityRequired && !this.scrollDisabled) {
			this.prevScrollPosition = newPosition;
			if(currentElemIndex + 1 < this.elems.length) {
				this.scrollToIndex(currentElemIndex + 1)
			}
			
		}
		else if(event.deltaY < -1*VelocityRequired && !this.scrollDisabled) {
			this.prevScrollPosition = newPosition;
			if(currentElemIndex - 1  >= 0) {
				this.scrollToIndex(currentElemIndex - 1)
			}
			
		}
		
		
	}

	enableScroll = (delay) => {
		setTimeout(() => this.scrollDisabled = false, delay);
	}

	scrollToIndex = (index) => {
		this.scrollDisabled = true;
		ScrollToAnchor("#" + this.elems[index].id, 500, () => this.scrollDisabled = false);
	}

	getCurrentElemIndex = (scrollPosition) => {
		let middleOfScreen = scrollPosition + this.getWindowHeight()/2;
		let index = this.elems.findIndex((elem) => {
			let distanceFromTop = $(elem).offset().top
			return distanceFromTop < middleOfScreen && (distanceFromTop + elem.offsetHeight) > middleOfScreen;
		})
		return index;
	}
	getWindowHeight = () => {
		var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			x = w.innerWidth || e.clientWidth || g.clientWidth,
			y = w.innerHeight|| e.clientHeight|| g.clientHeight;
		return y;
	}
}

function throttle(fn, wait) {
	var time = Date.now();
	return function() {
		if ((time + wait - Date.now()) < 0) {
			fn();
			time = Date.now();
		}
	}
}