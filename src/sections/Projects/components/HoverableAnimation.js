import styled, {keyframes} from 'styled-components';
import anime from 'animejs';

export default (obj, direction, side) => {
	if(direction === "IN") {
		return animateIn(obj, side)
	}
	else {
		return animateOut(obj, side);
	}
}

const animateIn = (obj, side) => {
	if(side === Directions.Top || side === Directions.Bottom) {
		obj.style.top = side === Directions.Top ? "-100%" : "100%";
		obj.style.left = 0;
	}
	else {
		obj.style.left = side === Directions.Left ? "-100%" : "100%";
		obj.style.top = 0;
	}
	return anime({
		targets: obj,
		left: 0,
		top: 0,
		opacity: 1,
		easing: 'spring(1, 80, 10, 0)'
	});
}
const animateOut = (obj, side) => {
	console.log(side)
	let animation = {
		targets: obj,
		opacity: .5,
		easing: 'easeOutQuad',
		duration: 500
	};
	if(side === Directions.Top || side === Directions.Bottom) {
		animation.top = side === Directions.Top ? "-100%" : "100%";
		animation.left = "0";
	}
	else {
		animation.left = side === Directions.Left ? "-100%" : "100%";
		animation.top = "0";
	}
	console.log(animation)
	return anime(animation);
}

const xAxis = 'X'
const yAxis = 'Y'

const getAxis = (side) => side === 1 || side === 3 ? xAxis : yAxis;
const translate = (side, percentage) => getAxis(side) === xAxis ? `translateX(${percentage}%)` : `translateY(${percentage}%);`

export const getSide = function (ev, obj) {
    var w = obj.offsetWidth,
        h = obj.offsetHeight,
        x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
        y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
  
    return d;
};


const Directions = {
	Top: 0,
	Right: 1,
	Bottom: 2,
	Left: 3
}
