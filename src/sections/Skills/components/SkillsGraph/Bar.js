import React, {Component} from 'react'
import styled from 'styled-components'
import SkillThreshold from './SkillThreshold';
import { Teal, LIGHT_GREY } from '../../../../utils/colors';


const BarContainer = styled.div`
	position: absolute;
	bottom: 0;
	height: ${props => props.height};
	background: ${props => props.color};
	width: ${props => props.width};
	left: ${props => props.left};
	margin-left: 20px;
	transition: .5s opacity;
	opacity: .8;
	:hover {
		opacity: 1;
	}
`

const BarText = styled.h2`
	transform: rotate(-90deg) translateX(${props => props.fontSize}) translateY(-5px);
	transform-origin: bottom right;
	margin: 0;
	right: 0;
	position: absolute;
    text-align: right;
	color: ${LIGHT_GREY};
	font-size: ${props => props.fontSize};
`


export default class Bar extends Component {
	render() {
		const {name, left, height, width, color} = this.props;
		//let bars = this.data.map((skill) => <Bar name={skill.name} height={})
		return (
			<BarContainer color={color} height={height} width={width} left={left}>
				<BarText fontSize="60px" height={height} left={left}>{name}</BarText>
			</BarContainer>
			
		)
	}
}