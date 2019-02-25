import React, {Component} from 'react';
import styled from 'styled-components';
//import * as ScrollMagic from 'scrollmagic'
import ColorPairs from 'utils/colors'
import NavItem from './NavItem'
import scrollToAnchor from '../../utils/scrollToAnchor'
import SimpleScrollWatch from '../../utils/simpleScrollWatch';
import { hexToRGB } from '../../utils/colors';
import $ from 'jquery';
//import NavHeader from './NavHeader';


const HEIGHT = "56px";

const NavContainer = styled.div`
`

const Nav = styled.nav`
	width: 100vw;
	z-index: 9000;
	position: ${props => props.sticky ? "fixed" : "absolute"};
	top: ${props => props.sticky ? 0 : `calc(100vh - ${props.height})`};
	background: ${ hexToRGB(ColorPairs.darkGrey.main, 1)};
	height: ${props => props.height};
	overflow: hidden;
	after {
		content: "";
		display: table;
		clear: both;
	}
	ul {
		position: ${props => props.sticky ? "fixed" : "absolute"};
		top: 0;
		z-index: 9999;
		right: 0;
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
	z-index: 9999;
	padding: 4px;
	text-align: left;
	width: 400px;
	margin: 0;
	cursor: pointer;
	font-weight: 600;
	font-size: 36px;
`

const CurrentItem = styled.div`
	position: absolute;
	width: ${props => (props.width + 10) + "px"};
	height: ${HEIGHT};
	background: ${hexToRGB(ColorPairs.teal.main, .8)};
	top: 0;
	z-index: 1002;
	right: ${props => (props.right - 5) + "px"};
	transition: all .5s;
`


export default class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			stickyNav: false,
			stickyHeader: false,
			subscribed: false,

			currentSectionRightPos: -200,
			currentSectionWidth: 0
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
		if(this.props.scrollManager) {
			this.props.scrollManager.subscribeToSectionChanges(this.sectionChangeCallback);
			let anchor = this.props.scrollManager.getCurrentAnchor()
			this.sectionChangeCallback(anchor);
		}
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.scrollManager && !prevProps.scrollManager && !this.state.subscribed) {
			this.props.scrollManager.subscribeToSectionChanges(this.sectionChangeCallback);
			let anchor = this.props.scrollManager.getCurrentAnchor()
			this.sectionChangeCallback(anchor);
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
	sectionChangeCallback = (anchor) => {
		let navAnchor = anchor.substring(1) + "Nav";
		let elem = document.getElementById(navAnchor)
		if(elem) {
			let left = elem.offsetLeft;
			let right = elem.offsetParent.offsetWidth - left;
			let width = elem.offsetWidth;
			console.log("changing sections")
			this.setState({
				currentSectionRightPos: right - width,
				currentSectionWidth: width
			})
		}
		else {
			this.setState({
				currentSectionRightPos: -200,
				currentSectionWidth: 0
			})
		}
		
	}
	render() {
		const {scrollManager} = this.props;
		const {currentSectionRightPos, currentSectionWidth} = this.state;
		let height = HEIGHT;

		let navItems = sections.map(section => <NavItem href={section.anchor} scrollManager={scrollManager}>{section.title}</NavItem>)

		return (
			<NavContainer>
				<NavHeaderStyled height={height} sticky={this.state.stickyHeader} onClick={() => scrollManager.scrollToAnchor("#home")} id="nav-header">Ryan Feigenbaum</NavHeaderStyled>
				

				<Nav height={height} sticky={this.state.stickyNav} id="main-nav" ref={this.mainNav}>
					<CurrentItem right={currentSectionRightPos} width={currentSectionWidth} sticky={this.state.stickyHeader}/>
					<NavItems>
						
						{navItems}
					</NavItems>
				</Nav>
			</NavContainer>
			
		)
	}
}

var sections = [
	{
		title: "About",
		anchor: "#about"
	},
	{
		title: "Experience",
		anchor: "#experience"
	},
	{
		title: "Education",
		anchor: "#education"
	},
	{
		title: "Projects",
		anchor: "#projects"
	},
	{
		title: "Skills",
		anchor: "#skills"
	},
	{
		title: "Contact",
		anchor: "#contact"
	}
]