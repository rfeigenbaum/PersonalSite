import getScrollOffsets from './scrollOffset';
import getPosition from './offsetTop';

export default class SimpleScrollWatch {
	//anchorPoint = 0-1 top-bottom of anchor element
	constructor(anchor, anchorPoint, anchorOffset, callback) {
		this.anchor = anchor.charAt(0) === '#' ? anchor.substring(1) : anchor;
		this.anchorPoint = anchorPoint;
		this.anchorOffset = anchorOffset;
		this.callback = callback;

		this.triggered = false;
		
		this.updateTargetPosition();

		this.scrolled();

		window.addEventListener('scroll', this.scrolled);
		window.addEventListener('resize', () => {
			this.updateTargetPosition();
			this.scrolled();
		});
		document.addEventListener("DOMContentLoaded", () => {
			this.updateTargetPosition();
			this.scrolled();
		});
	}

	updateTargetPosition = () => {
		let {anchor, anchorPoint, anchorOffset} = this;
		let elem = document.getElementById(anchor)

		let anchorDistanceFromTop = getPosition(elem).y;
		let distanceFromTopOfAnchor = elem.offsetHeight * anchorPoint;

		let aOffset = typeof anchorOffset === "function" ? anchorOffset() : anchorOffset;
		
		this.targetPosition = anchorDistanceFromTop + distanceFromTopOfAnchor + aOffset;
	}

	scrolled = () => {
		if(getScrollOffsets().y >= this.targetPosition && this.triggered) {
			this.triggered = this.callback(true)
		}
		else if(getScrollOffsets().y <= this.targetPosition && !this.triggered){
			this.triggered = this.callback(false)
		}
	}

}