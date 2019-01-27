import React, {Component} from 'react';
import styled from 'styled-components';
import ColorPairs from '../colors'
import anime from 'animejs';
import $ from 'jquery';

const NavItem_ListItem = styled.li`
	text-align: center;
	float: left;
	margin: 10px;
	font-size: 24px;
`
const NavItem_Link = styled.a`
	color: ${ColorPairs.darkGrey.secondary};
	text-decoration: none;
`

export default class NavItem extends Component {
	constructor() {
		super();
	}
	onClick = (e) => {
		e.preventDefault();
		console.log(e)
		this.scrollToAnchor(this.props.href);
	}
	scrollToAnchor = (anchor) => {
		let offsetFromTop = $(anchor).offset().top

		let distanceFromDiv = Math.abs(offsetFromTop - window.pageYOffset);
		let duration = distanceFromDiv/3
		
		const scrollCoords = {
			y: window.pageYOffset
		}
		anime({
			targets: scrollCoords,
			y: offsetFromTop,
			duration: 700,
			easing: 'easeInOutCubic',
			update: () => window.scroll(0, scrollCoords.y)
		})
	}
	render() {
		const {href, children, ...otherProps} = this.props;
		console.log("sup")
		return (
			<NavItem_ListItem {...otherProps}>
				<NavItem_Link onClick={this.onClick} href={href}>{children}</NavItem_Link>
			</NavItem_ListItem>
		)
	}
}