import styled from 'styled-components'

import { Colors, hexToRGB } from "@utils/colors";

interface NavProps {
	sticky: boolean
}

export const Nav = styled.nav<NavProps>`
    width: 100vw;
    z-index: 9000;
    position: ${props => props.sticky ? "fixed" : "absolute"};
	bottom: ${props => props.sticky ? null : 0};
	top: ${props => props.sticky ? 0 : null};
    background: ${Colors.darkGrey};
    color: ${Colors.white};
    overflow: hidden;

    :after {
		content: "";
		display: table;
		clear: both;
    }
`

export const NavItems = styled.ul`
    top: 0;
    z-index: 9999;
    right: 0;
    list-style: none;
	float: right;
	padding: 0 10px;
	margin: 0;
	display: flex;
	flex-direction: row;
	width: auto;
	justify-content: flex-end;
	
	@media (max-width: 1100px) {
		width: 100%;
		justify-content: space-around;
	}
`

export const NavItem_ListItem = styled.li`
	text-align: center;
	margin: 0 5px;
	font-size: 24px;
	height: 36px;
	line-height: 36px;
	padding: 10px 4px 10px 4px;
	transition: all .5s;
`


export const NavItem_Link = styled.a<{isSelected: boolean}>`
	color: ${props => props.isSelected ? "white" : "#DDD"};
	transition: all .3s;
	text-decoration: none;
	position: relative;
	z-index: 9500;
	:hover {
		color: white;
	}
`

export const NavHeaderStyled = styled.h2<NavProps>`
	pointer-events: ${props => props.sticky ? null : 'none'};
	user-select: ${props => props.sticky ? null : 'none'};
	color: ${Colors.lightGrey};
	position: ${props => props.sticky ? "fixed" : "absolute"};
	top: ${props => props.sticky ? 0 : null};
	bottom: ${props => props.sticky ? null : '0'};
	transform: ${props => props.sticky ? null : 'translateY(100%)'};
	left: 0;
	z-index: 9999;
	text-align: left;
	margin: 0;
	padding-left: 10px;
	padding-top: 10px;
	font-weight: 400;
	font-size: 38px;
	letter-spacing: 1px;
	@media (max-width: 1100px) {
		display: none;
	}
`

export interface CurrentLinkProperties {
    rightPos: number
    width: number
}

export const CurrentItem = styled.div<CurrentLinkProperties>`
	position: absolute;
	width: ${props => (props.width + 14) + "px"};
	height: 100%;
	background: ${hexToRGB(Colors.teal, .8)};
	top: 0;
	z-index: 9001;
	right: ${props => (props.rightPos - 7) + "px"};
	transition: all .5s;
`