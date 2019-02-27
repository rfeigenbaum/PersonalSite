export default function getPosition(elem) {
	let element = elem;
	if (typeof elem === 'string' || elem instanceof String) {
		let anchor = elem.charAt(0) === '#' ? elem.substring(1) : elem;
		element = document.getElementById(anchor);
	}

    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}