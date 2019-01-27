import React, {Component} from 'react';
import styled from 'styled-components';
import * as ScrollMagic from 'scrollmagic'
import ColorPairs from '../colors'
import NavItem from './NavItem'
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
	width: 300px;
	margin: 0;
`

export default class NavBar extends Component {
	constructor() {
		super();
	}
	componentDidMount() {
		this.controller = new ScrollMagic.Controller({
			loglevel: 2
		});
		new ScrollMagic.Scene({
			triggerElement: "#main-nav"
		})
		.triggerHook("onLeave")
		.setPin("#main-nav", {pushFollowers: false}) // pins the element for the the scene's duration
		.addTo(this.controller); // assign the scene to the controller

		new ScrollMagic.Scene({
			triggerElement: "#nav-header"
		})
		.triggerHook("onLeave")
		.setPin("#nav-header", {pushFollowers: false}) // pins the element for the the scene's duration
		.addTo(this.controller); // assign the scene to the controller
	}
	render() {
		return (
			<div>
				<NavHeaderStyled id="nav-header">Ryan Feigenbaum</NavHeaderStyled>
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