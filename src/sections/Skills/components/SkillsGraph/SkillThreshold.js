import React, {Component} from 'react'
import styled from 'styled-components'
import {TEAL, LIGHT_GREY, hexToRGB} from 'utils/colors'

const Container = styled.div`
	position: absolute;
	bottom: ${props => props.percentage};
	width: 100%;
`

const HeadingBase = `
	position: absolute;
	margin: 0;
`

const Title = styled.h1`
	${HeadingBase}
	font-size: ${props => props.fontSize + "px"};
	top: ${props => "-" + (props.fontSize * 1.2) + "px"};
	font-weight: 700;
	color: ${hexToRGB(TEAL, .5)};
`
const Description = styled.h1`
	${HeadingBase}
	font-size: ${props => props.fontSize + "px"};
	top: 0;
	color: ${hexToRGB(TEAL, .4)};
`
const Line = styled.hr`
	display: block;
	width: 100%;
	height: 1px;
    border: 0;
    border-top: 5px solid rgba(100,100,100,.3);
    margin: 0;
    padding: 0;
`

export default class SkillThreshold extends Component {
	render() {
		const {title, description, percentage} = this.props;
		return (
			<Container percentage={percentage}>
				<Title fontSize={60}>{title}</Title>
				<Line />
				<Description fontSize={50}>{description}</Description>
			</Container>
		)
	}
}