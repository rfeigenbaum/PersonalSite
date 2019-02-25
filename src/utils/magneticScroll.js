import $ from 'jquery';
import getScrollOffset from './scrollOffset';
import ScrollToAnchor from './scrollToAnchor';
import Debounce from './debounce'

const VelocityRequired = 10
const DebouncePeriod = 100;

export default class MagneticScroll {
	constructor(className) {
		this.className = className;
		this.elems = Array.from(document.getElementsByClassName(className));

		this.allowScrollEvent = true;
		this.allowScrollWithinSection = true;
		this.scrollEventTimer = null;

		this.scrollDisabled = false;

		this.debounce = new Debounce(this.getVelocity, this.scrolled, DebouncePeriod);

		this.listeners = [];

		$(window).on('mousewheel DOMMouseScroll', this.mouseScrollEvent);
		
		$(document).ready(this.resetPosition)

		window.addEventListener('resize', () => {
			clearTimeout(this.resizeId);
			this.resizeId = setTimeout(this.onResize, 500);
		});
		
	}

	onResize = () => {
		this.resetPosition();
	}

	resetPosition = () => {
		let currentPosition = getScrollOffset().y;
		let currentElemIndex = this.getCurrentElemIndex(currentPosition);
		this.scrollToIndex(currentElemIndex);
	}

	getVelocity = (jEvent) => jEvent.originalEvent.deltaY;

	withinElement = (elem, scrollPosition, velocity) => {
		let topOfElem = $(elem).offset().top;
		let windowHeight = this.getWindowHeight();
		//Scrolling Up
		if(velocity < 0) {
			if(scrollPosition + velocity >= topOfElem) {
				return true;
			}
		}
		//Scrolling Down
		else {
			if(scrollPosition + windowHeight + velocity <= topOfElem + elem.offsetHeight) {
				return true;
			}
		}
		return false;
	}

	mouseScrollEvent = (event) => {
		

		let velocity = this.getVelocity(event);
		let currentPosition = getScrollOffset().y;
		let currentElem = this.elems[this.getCurrentElemIndex(currentPosition)];

		let movedWithinSection = false;
		if(!this.scrollDisabled){
			if(Math.abs(velocity) > 1 && this.allowScrollWithinSection) {
				if(this.withinElement(currentElem, currentPosition, velocity)) {
					window.scrollBy(0, velocity);
					movedWithinSection = true;
					this.allowScrollEvent = false;

					if(this.scrollEventTimer) {
						clearTimeout(this.scrollEventTimer);
					}
					this.scrollEventTimer = setTimeout(() => this.allowScrollEvent = true, 50);
				}
			}
			if(!movedWithinSection && this.allowScrollEvent) {
				this.debounce.func(event);
			}
		}
		
		return false;
	}

	scrolled = (velocities) => {
		let newPosition = getScrollOffset().y;

		let velocity = velocities.reduce((a, b) => a + b) / velocities.length;

		if(Math.abs(velocity) > VelocityRequired && !this.scrollDisabled) {
			let direction = velocity > 0 ? 1 : -1;
			let currentElemIndex = velocity > 0 ? 
				this.getCurrentElemIndex(newPosition, .1) : this.getCurrentElemIndex(newPosition, .9);

			let idealDistance = Math.floor(Math.pow(Math.abs(velocity), 1/2)/3.5) * direction;

			if(Math.abs(idealDistance) > 0) {

				let newIndex = currentElemIndex + idealDistance
				while(newIndex < 0 && newIndex >= this.elems.length ) {
					idealDistance = (Math.abs(idealDistance) - 1) * direction;
					newIndex = currentElemIndex + idealDistance;
				}

				//let newIndex = currentElemIndex + direction;

				if(newIndex >= 0 && newIndex < this.elems.length) {
					if(direction === -1) {
						let offset = this.elems[newIndex].offsetHeight - this.getWindowHeight();
						offset = offset > 0 ? offset : 0;
						this.scrollToIndex(newIndex, offset)
					}
					else {
						this.scrollToIndex(newIndex);
					}
				}
			}
		}
	}

	enableScroll = () => {
		if(this.enableScrollTimeout !== null) {
			clearInterval(this.enableScrollTimeout);
			this.enableScrollTimeout = null;
		}
		this.enableScrollTimeout = setTimeout(() => this.scrollDisabled = false, 100);

		if(this.enableScrollWithinSectionTimeout !== null) {
			clearInterval(this.enableScrollWithinSectionTimeout);
			this.enableScrollWithinSectionTimeout = null;
		}
		this.enableScrollWithinSectionTimeout = setTimeout(() => this.allowScrollWithinSection = true, 500);
	}

	scrollToIndex = (index, offset, duration = 500) => {
		this.scrollDisabled = true;
		this.allowScrollWithinSection = false;
		this.scrollToAnchor("#" + this.elems[index].id, offset, duration, this.enableScroll);
	}

	scrollToAnchor = (anchor, offset = 0, duration, completeCallback) => {
		ScrollToAnchor(anchor, offset, duration, completeCallback);
		this.listeners.forEach(callback => callback(anchor));
	}

	subscribeToSectionChanges = (callback) => {
		this.listeners.push(callback);
	}

	getCurrentElemIndex = (scrollPosition, percentHeightOfScreen) => {
		let _percentHeightOfScreen = percentHeightOfScreen || .5;
		let middleOfScreen = scrollPosition + this.getWindowHeight() * _percentHeightOfScreen;
		let index = this.elems.findIndex((elem) => {
			let distanceFromTop = $(elem).offset().top
			return distanceFromTop < middleOfScreen && (distanceFromTop + elem.offsetHeight) > middleOfScreen;
		})
		return index;
	}

	getCurrentAnchor = () => {
		let scrollPos = getScrollOffset().y;
		let currentElemIndex = this.getCurrentElemIndex(scrollPos, .5);
		console.log("current anchor")
		return "#" + this.elems[currentElemIndex].id
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


