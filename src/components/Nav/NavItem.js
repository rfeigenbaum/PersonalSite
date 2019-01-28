import React, {Component} from 'react';
import styled from 'styled-components';
import ColorPairs from '../colors'
import anime from 'animejs';
import $ from 'jquery';
import scrollToAnchor from './ScrollToAnchor'

const NavItem_ListItem = styled.li`
	text-align: center;
	float: left;
	margin: 10px;
	font-size: 26px;
	height: 36px;
	line-height: 36px;
`
const NavItem_Link = styled.a`
	color: #DDD;
	text-decoration: none;
	:hover {
		color: white;
	}
`

export default class NavItem extends Component {
	constructor() {
		super();
	}
	onClick = (e) => {
		e.preventDefault();
		console.log(e)
		scrollToAnchor(this.props.href);
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