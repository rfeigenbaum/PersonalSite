import React, {Component} from 'react'
import styled from 'styled-components'
import SkillThreshold from './SkillThreshold';
import Bar from './Bar';
import {Teal} from 'utils/colors'

const BarsGroupContainer = styled.div`
	position: absolute;
	height: 100%;
	left: ${props => props.left};
	width: calc(100% - ${props => props.left});
`


export default class BarsGroup extends Component {
	render() {
		const {left} = this.props;
		let scale = 5;

		let num_bars = data.length;
		let bars = data.sort((skillA, skillB) => skillB.rating - skillA.rating ).map((skill, index) => {
			//let left = Math.min(index/num_bars * 100, 20*index);
			let width = Math.min(100/num_bars, 9);
			let left = (width + 1) * index;
			let color = Teal.desaturate(1- (skill.rating/scale)).hex();
			return <Bar color={color} name={skill.name} left={left + "%"} height={(skill.rating/scale * 100 ) + "%"} width={width + "%"} />
		})

		return (
			<BarsGroupContainer left={left}>
				{bars}
			</BarsGroupContainer>
		)
	}
}
var data = [
	{
		"name": "JavaScript",
		"rating": 5
	},
	{
		"name": "C#",
		"rating": 4
	},
	{
		"name": "CSS",
		"rating": 5
	},
	{
		"name": "HTML",
		"rating": 4
	},
	{
		"name": "jQuery",
		"rating": 3
	},
	{
		"name": "Java",
		"rating": 2.5
	},
	{
		"name": "C++",
		"rating": 2.5
	},
	{
		"name": "Python",
		"rating": 1
	},
	{
		"name": "SQL",
		"rating": 2.5
	},
	{
		"name": "LESS",
		"rating": 1.5
	}
]