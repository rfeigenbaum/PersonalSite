import React, {Component} from 'react';
import styled from 'styled-components';
//import * as ScrollMagic from 'scrollmagic'
import ColorPairs from 'utils/colors'
import NavItem from './NavItem'
import scrollToAnchor from './ScrollToAnchor'
//import NavHeader from './NavHeader';



const Nav = styled.nav`
	width: 100vw;
	z-index: 1000;
	position: absolute; 
	bottom: 0;
	background: ${ColorPairs.darkGrey.main};
	after {
		content: "";
		display: table;
		clear: both;
	}
`
const NavItems = styled.ul`
	list-style: none;
	float: right;
	padding: 0;
	margin: 0;
`

const NavHeaderStyled = styled.h2`
	color: ${ColorPairs.lightGrey.main};
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1001;
	padding: 4px;
	text-align: left;
	width: 400px;
	margin: 0;
	cursor: pointer;
	font-weight: 600;
`

export default class NavBar extends Component {
	constructor() {
		super();
	}
	componentDidMount() {
		if (typeof window !== 'undefined') {
			this.ScrollMagic = require('scrollmagic')
			this.controller = new this.ScrollMagic.Controller({
				loglevel: 2
			});
			new this.ScrollMagic.Scene({
				triggerElement: "#main-nav"
			})
			.triggerHook("onLeave")
			.setPin("#main-nav", {pushFollowers: false}) // pins the element for the the scene's duration
			.addTo(this.controller); // assign the scene to the controller

			new this.ScrollMagic.Scene({
				triggerElement: "#nav-header"
			})
			.triggerHook("onLeave")
			.setPin("#nav-header", {pushFollowers: false}) // pins the element for the the scene's duration
			.addTo(this.controller); // assign the scene to the controller
		}
	}
	render() {
		return (
			<div>
				<NavHeaderStyled onClick={() => scrollToAnchor("#home")} id="nav-header">Ryan Feigenbaum</NavHeaderStyled>
				<Nav id="main-nav">
					
					<NavItems>
						
						<NavItem href="#about">
							About
						</NavItem>
						<NavItem href="#experience">
							Experience
						</NavItem>
						<NavItem href="#education">
							Education
						</NavItem>
						<NavItem href="#projects">
							Projects
						</NavItem>
						<NavItem href="#skills">
							Skills
						</NavItem>
						<NavItem href="#contact">
							Contact
						</NavItem>
					</NavItems>
				</Nav>
			</div>
			
		)
	}
}