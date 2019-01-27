import React, {Component} from 'react';
import styled from 'styled-components';
import * as ScrollMagic from 'scrollmagic'
import ColorPairs from './colors'

const NavHeaderStyled = styled.h2`
	color: ${ColorPairs.lightGrey.main};
	position: absolute;
	top: 100vh;
	left: 0;
	z-index: 10;
`

export default class NavHeader extends Component {
	constructor() {
		super();
	}
	componentDidMount() {
		this.controller = new ScrollMagic.Controller({
			loglevel: 3
		});
		new ScrollMagic.Scene({
			triggerElement: "#nav-header"
		})
		.triggerHook("onLeave")
		.setPin("#nav-header", {pushFollowers: false}) // pins the element for the the scene's duration
		.addTo(this.controller); // assign the scene to the controller
	}
	render() {
		return (
			<NavHeaderStyled id="nav-header">
				Ryan Feigenbaum
			</NavHeaderStyled>
		)
	}
}