import React, {Component} from 'react';
import styled from 'styled-components';
//import * as ScrollMagic from 'scrollmagic'
import ColorPairs from 'utils/colors'
import NavItem from './NavItem'
import scrollToAnchor from '../../utils/scrollToAnchor'
import SimpleScrollWatch from '../../utils/simpleScrollWatch';
import { hexToRGB } from '../../utils/colors';
//import NavHeader from './NavHeader';



const Nav = styled.nav`
	width: 100vw;
	z-index: 1000;
	position: ${props => props.sticky ? "fixed" : "absolute"};
	top: ${props => props.sticky ? 0 : `calc(100vh - ${props.height})`};
	height: ${props => props.height};
	background: ${ hexToRGB(ColorPairs.darkGrey.main, .8)};
	transition: background .5s;
	after {
		content: "";
		display: table;
		clear: both;
	}
	:hover {
		background: ${ColorPairs.darkGrey.main};
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
	position: ${props => props.sticky ? "fixed" : "absolute"};
	top: ${props => props.sticky ? 0 : "calc(100vh - 1px)"};
	left: 0;
	z-index: 1001;
	padding: 4px;
	text-align: left;
	width: 400px;
	margin: 0;
	cursor: pointer;
	font-weight: 600;
	font-size: 36px;
`

const HEIGHT = "56px";

export default class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			stickyNav: false,
			stickyHeader: false
		}
		this.mainNav = React.createRef();

		this.navBarScrollWatch = null;
		this.headerScrollWatch = null;
	}
	componentDidMount() {
		if (typeof window !== 'undefined') {
			this.navBarScrollWatch = new SimpleScrollWatch("#home", 1, this.getNavAnchorOffset, this.navCallback)
			this.headerScrollWatch = new SimpleScrollWatch("#about", 0, -2, this.headerCallback)
		}
	}
	getNavAnchorOffset = () => 0-this.mainNav.current.offsetHeight;
	navCallback = (sticky) => {
		this.setState({stickyNav: sticky})
		return !sticky;
	}
	headerCallback = (sticky) => {
		this.setState({stickyHeader: sticky})
		console.log("header triggered")
		return !sticky;
	}
	render() {
		let height = HEIGHT;
		return (
			<div>
				<NavHeaderStyled height={height} sticky={this.state.stickyHeader} onClick={() => scrollToAnchor("#home")} id="nav-header">Ryan Feigenbaum</NavHeaderStyled>
				<Nav height={height} sticky={this.state.stickyNav} id="main-nav" ref={this.mainNav}>
					
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