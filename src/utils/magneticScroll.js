import getScrollOffset from './scrollOffset';
import ScrollToAnchor from './scrollToAnchor';
import Debounce from './debounce'
import ready from './ready';
import getPosition from './offsetTop';

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
		
		ready(this.resetPosition)

		window.addEventListener('mousewheel', this.mouseScrollEvent);
		window.addEventListener('DOMMouseScroll', this.mouseScrollEvent)

		window.addEventListener('resize', () => {
			clearTimeout(this.resizeId);
			this.resizeId = setTimeout(this.onResize, 500);
		});
		window.addEventListener('keydown', this.arrowKeyListener);
		
	}

	arrowKeyListener = (event) => {
		const 	LEFT = 37,
				UP = 38,
				RIGHT = 39,
				DOWN = 40;
		let keycode = (event.which) ? event.which : event.keyCode;
		if(keycode === UP || keycode === DOWN) {
			event.preventDefault();
			let currentPosition = getScrollOffset().y;
			let currentElemIndex = this.getCurrentElemIndex(currentPosition);
			if(this.scrollThroughKey) {
				let newIndex = keycode === UP ? this.newIndex - 1 : this.newIndex + 1;
				if(newIndex >= 0 && newIndex < this.elems.length) {
					this.anime.pause();
					this.newIndex = newIndex;
					this.anime = this.scrollToIndex(this.newIndex, 0, null, () => this.scrollThroughKey = false); 
				}
			}
			else {
				this.scrollThroughKey = true;
				let newIndex = keycode === UP ? currentElemIndex - 1 : currentElemIndex + 1;
				if(newIndex >= 0 && newIndex < this.elems.length) {
					this.newIndex = newIndex;
					this.anime = this.scrollToIndex(this.newIndex, 0, null, () => this.scrollThroughKey = false); 
				}
				
			}
		}
	}

	scrollToNext = () => {
		let currentPosition = getScrollOffset().y;
		let currentElemIndex = this.getCurrentElemIndex(currentPosition);
		if(currentElemIndex + 1 < this.elems.length) {
			this.scrollToIndex(currentElemIndex + 1);
		}
	}
	scrollToPrev = () => {
		let currentPosition = getScrollOffset().y;
		let currentElemIndex = this.getCurrentElemIndex(currentPosition);
		if(currentElemIndex - 1 >= 0) {
			this.scrollToIndex(currentElemIndex - 1);
		}
	}

	onResize = () => {
		this.resetPosition();
	}

	resetPosition = () => {
		let currentPosition = getScrollOffset().y;
		let currentElemIndex = this.getCurrentElemIndex(currentPosition);
		this.scrollToIndex(currentElemIndex);
	}

	getVelocity = (event) => {
		//event.deltaY;
		var direction = wheelDirection(event);
		var distance = wheelDistance(event);
		console.log(distance)
		return distance*-15;
	}

	withinElement = (elem, scrollPosition, velocity) => {
		let topOfElem = getPosition(elem).y
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
		event.preventDefault();
		let velocity = this.getVelocity(event);
		let currentPosition = getScrollOffset().y;
		let currentElem = this.elems[this.getCurrentElemIndex(currentPosition)];

		let movedWithinSection = false;
		if(!this.scrollDisabled){
			if(this.allowScrollWithinSection) {
				if(this.withinElement(currentElem, currentPosition, velocity)) {
					window.scrollBy(0, velocity);
					movedWithinSection = true;
					this.allowScrollEvent = false;

					if(this.scrollEventTimer) {
						clearTimeout(this.scrollEventTimer);
					}
					this.scrollEventTimer = setTimeout(() => this.allowScrollEvent = true, 100);
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
		this.allowScrollEvent = false
		this.enableScrollTimeout = setTimeout(() => {this.scrollDisabled = false; this.allowScrollEvent = true}, 100);

		if(this.enableScrollWithinSectionTimeout !== null) {
			clearInterval(this.enableScrollWithinSectionTimeout);
			this.enableScrollWithinSectionTimeout = null;
		}
		this.enableScrollWithinSectionTimeout = setTimeout(() => this.allowScrollWithinSection = true, 500);
	}

	scrollToIndex = (index, offset, duration = 500, completeCallback) => {
		let fn = this.enableScroll;
		if(completeCallback) {
			fn = () => {
				this.enableScroll();
				completeCallback();
			}
		}
		this.scrollDisabled = true;
		this.allowScrollWithinSection = false;
		return this.scrollToAnchor("#" + this.elems[index].id, offset, duration, fn);
	}

	scrollToAnchor = (anchor, offset = 0, duration, completeCallback) => {
		this.listeners.forEach(callback => callback(anchor));
		return ScrollToAnchor(anchor, offset, duration, completeCallback);
	}

	subscribeToSectionChanges = (callback) => {
		this.listeners.push(callback);
	}

	getCurrentElemIndex = (scrollPosition, percentHeightOfScreen) => {
		let _percentHeightOfScreen = percentHeightOfScreen || .5;
		let middleOfScreen = scrollPosition + this.getWindowHeight() * _percentHeightOfScreen;
		let index = this.elems.findIndex((elem) => {
			let distanceFromTop = getPosition(elem).y;
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



var wheelDistance = function(evt){
	//if (!evt) evt = event;
	var w=evt.wheelDelta, d=evt.detail;
	if (d){
		if (w) return w/d/40*d>0?1:-1; // Opera
		else return -d/3;              // Firefox;         TODO: do not /3 for OS X
	} else return w/120;             // IE/Safari/Chrome TODO: /3 for Chrome OS X
};

var wheelDirection = function(evt){
	//if (!evt) evt = event;
	return (evt.detail<0) ? 1 : (evt.wheelDelta>0) ? 1 : -1;
};