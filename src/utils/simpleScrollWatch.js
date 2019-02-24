import $ from 'jquery'

export default class SimpleScrollWatch {
	//anchorPoint = 0-1 top-bottom of anchor element
	constructor(anchor, anchorPoint, anchorOffset, callback) {
		this.anchor = anchor;
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

	}

	updateTargetPosition = () => {
		let {anchor, anchorPoint, anchorOffset} = this;
		let anchorDistanceFromTop = $(anchor).offset().top;
		let distanceFromTopOfAnchor = $(anchor).height() * anchorPoint;

		let aOffset = typeof anchorOffset === "function" ? anchorOffset() : anchorOffset;
		
		this.targetPosition = anchorDistanceFromTop + distanceFromTopOfAnchor + aOffset;
	}

	scrolled = () => {
		if(dw_getScrollOffsets().y >= this.targetPosition && this.triggered) {
			this.triggered = this.callback(true)
		}
		else if(dw_getScrollOffsets().y <= this.targetPosition && !this.triggered){
			this.triggered = this.callback(false)
		}
	}

}
//https://www.dyn-web.com/javascript/scroll-distance/
function dw_getScrollOffsets() {
    var doc = document, w = window;
    var x, y, docEl;
    
    if ( typeof w.pageYOffset === 'number' ) {
        x = w.pageXOffset;
        y = w.pageYOffset;
    } else {
        docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
                doc.documentElement: doc.body;
        x = docEl.scrollLeft;
        y = docEl.scrollTop;
    }
    return {x:x, y:y};
}