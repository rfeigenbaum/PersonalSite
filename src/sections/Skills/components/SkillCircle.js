import React, {Component} from 'react';
import styled from 'styled-components';
import {TEAL, LIGHT_GREY, hexToRGB} from 'utils/colors'

const ratingToSize = (rating) => ((rating + 5) * 5/3) + "vw"

let Skill = styled.h2`
	display: block;
	margin: 0;
	background: ${hexToRGB(TEAL, .8)};
	position: absolute;
	color: ${LIGHT_GREY};
	border-radius: 50%;
	line-height: ${props => ratingToSize(props.rating)};
	width: ${props => ratingToSize(props.rating)};
	height: ${props => ratingToSize(props.rating)};
	text-align: center;
`

const center = function (obj) {
	var r = obj.offsetHeight/2;
	var x = (obj.offsetLeft) + r;
	var y = (obj.offsetTop) + r;

	return {
		x: x,
		y: y
	}
}

const getSide = function (ev, obj) {
    var w = obj.offsetWidth,
        h = obj.offsetHeight,
        x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
        y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
		d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
  
    return d;
};

/*
$('someObject').on('mouseenter', function() {
    this.iid = setInterval(function() {
       // do something           
    }, 25);
}).on('mouseleave', function(){
    this.iid && clearInterval(this.iid);
});
*/

export default class SkillCircle extends Component {
	constructor() {
		super();
		this.interval = null;
		this.circle = React.createRef();
	}
	hover = (event) => {
		//window.addEventListener('scroll', this.handleScroll);
		console.log(event.pageX, event.pageY, center(this.circle.current));
		/*this.interval = setInterval(function() {
			console.log()
		}, 30)*/
	}
	render() {
		let {rating, name} = this.props;
		return <Skill ref={this.circle} onMouseMove={this.hover} rating={rating}>{name}</Skill>
	}
}