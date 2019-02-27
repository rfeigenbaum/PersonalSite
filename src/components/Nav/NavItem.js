import React, {Component} from 'react';
import styled from 'styled-components';
import scrollToAnchor from '../../utils/scrollToAnchor'
import { hexToRGB, TEAL } from '../../utils/colors';

const NavItem_ListItem = styled.li`
	text-align: center;
	margin: 0 5px;
	font-size: 26px;
	height: 36px;
	line-height: 36px;
	padding: 14px 4px 6px 4px;
	transition: all .5s;
`
const NavItem_Link = styled.a`
	color: ${props => props.selected ? "white" : "#DDD"};
	transition: all .3s;
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
		console.log(this.props)
		const {scrollManager, href} = this.props;
		//console.log(e)
		//scrollToAnchor(this.props.href);
		scrollManager.scrollToAnchor(href);
	}
	render() {
		const {href, children, scrollManager, selected, ...otherProps} = this.props;
		
		let navAnchor = href.substring(1) + "Nav";

		return (
			<NavItem_ListItem {...otherProps}>
				<NavItem_Link id={navAnchor} selected={selected} onClick={this.onClick} href={href}>{children}</NavItem_Link>
			</NavItem_ListItem>
		)
	}
}