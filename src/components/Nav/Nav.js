import React, {Component} from 'react';
import styled from 'styled-components';
//import * as ScrollMagic from 'scrollmagic'
import ColorPairs from 'utils/colors'
import NavItem from './NavItem'
import scrollToAnchor from '../../utils/scrollToAnchor'
import SimpleScrollWatch from '../../utils/simpleScrollWatch';
import { hexToRGB } from '../../utils/colors';
import $ from 'jquery';
import NavBar from './NavBar';
import _ from 'lodash';
import windowSize from 'react-window-size';
//import NavHeader from './NavHeader';

class Nav extends Component {
	constructor() {
		super();
	}

	render() {
		const {windowWidth, windowHeight, ...props} = this.props;
		return (
			<NavBar displayHeader={windowWidth > 1100} {...props} sections={sections} />
		)
	}
}

export default windowSize(Nav);

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