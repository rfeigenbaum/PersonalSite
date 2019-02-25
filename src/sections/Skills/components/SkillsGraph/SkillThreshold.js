import React, {Component} from 'react'
import styled from 'styled-components'
import {TEAL, LIGHT_GREY, hexToRGB} from 'utils/colors'

const Container = styled.div`
	position: absolute;
	bottom: ${props => props.percentage};
	width: 100%;
	transform: translateY(50%);
`

const HeadingBase = `
	position: relative;
	margin: 0;
	text-align: left;
`

const Title = styled.h2`
	${HeadingBase}
	font-weight: 700;
	color: ${hexToRGB(TEAL, .5)};
	margin-left: 5px;
`
const Description = styled.h2`
	${HeadingBase}
	color: ${hexToRGB(TEAL, .4)};
	margin-left: 5px;
`
const Line = styled.hr`
	display: block;
	width: 100%;
	height: 1px;
    border: 0;
    border-top: 5px solid rgba(100,100,100,.3);
    margin: 0;
	padding: 0;
	position: relative;
`

export default class SkillThreshold extends Component {
	render() {
		const {title, description, percentage} = this.props;
		return (
			<Container percentage={percentage}>
				<Title>{title}</Title>
				<Line />
				<Description>{description}</Description>
			</Container>
		)
	}
}