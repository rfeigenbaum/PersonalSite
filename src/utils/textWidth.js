export function getTextWidth(text, font) {
    // if given, use cached canvas for better performance
    // else, create new canvas
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
};

function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}

export default (elem) => {
	let fontFamily = css(elem, 'font-family');
	console.log(fontFamily);
}