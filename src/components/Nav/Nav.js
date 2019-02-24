import React, {Component} from 'react';
import styled from 'styled-components';
//import * as ScrollMagic from 'scrollmagic'
import ColorPairs from 'utils/colors'
import NavItem from './NavItem'
import scrollToAnchor from './ScrollToAnchor'
import SimpleScrollWatch from '../../utils/simpleScrollWatch';
//import NavHeader from './NavHeader';



const Nav = styled.nav`
	width: 100vw;
	z-index: 1000;
	position: ${props => props.sticky ? "fixed" : "absolute"};
	bottom: ${props => props.sticky ? null : 0};
	top: ${props => props.sticky ? 0 : null};
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
	position: ${props => props.sticky ? "fixed" : "absolute"};
	top: ${props => props.sticky ? 0 : "100%"};
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
			this.headerScrollWatch = new SimpleScrollWatch("#about", 0, 0, this.headerCallback)
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
		return (
			<div>
				<NavHeaderStyled sticky={this.state.stickyHeader} onClick={() => scrollToAnchor("#home")} id="nav-header">Ryan Feigenbaum</NavHeaderStyled>
				<Nav sticky={this.state.stickyNav} id="main-nav" ref={this.mainNav}>
					
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