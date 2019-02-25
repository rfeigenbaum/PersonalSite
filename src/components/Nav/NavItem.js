import React, {Component} from 'react';
import styled from 'styled-components';
import scrollToAnchor from '../../utils/scrollToAnchor'

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
		console.log(this.props)
		const {scrollManager, href} = this.props;
		//console.log(e)
		//scrollToAnchor(this.props.href);
		scrollManager.scrollToAnchor(href);
	}
	render() {
		const {href, children, scrollManager, ...otherProps} = this.props;
		
		let navAnchor = href.substring(1) + "Nav";

		return (
			<NavItem_ListItem {...otherProps}>
				<NavItem_Link id={navAnchor} onClick={this.onClick} href={href}>{children}</NavItem_Link>
			</NavItem_ListItem>
		)
	}
}