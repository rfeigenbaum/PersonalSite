import $ from 'jquery'

export default function getPosition(elem) {
	let element = elem;
	if (typeof elem === 'string' || elem instanceof String) {
		let anchor = elem.charAt(0) === '#' ? elem.substring(1) : elem;
		element = document.getElementById(anchor);
	}
	if(element) {
		var xPosition = 0;
		var yPosition = 0;
		var rect = element.getBoundingClientRect();
		/*while(element) {
			xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
			yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
			element = element.offsetParent;
		}*/
		
		/*{
			top: rect.top + document.body.scrollTop,
			left: rect.left + document.body.scrollLeft
		}*/
		var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
		//console.log($(elem).offset().top, yPosition, rect.top + scrollTop)
		return { x: xPosition, y: rect.top + scrollTop };
	}
	return null;

    

    
}