import React, {Component} from 'react'
import styled from 'styled-components'
import SkillThreshold from './SkillThreshold';
import Bar from './Bar';
import {Teal} from 'utils/colors'
import Measure from 'react-measure'

const BarsGroupContainer = styled.div`
	position: absolute;
	height: 100%;
	margin-left: ${props => props.leftMargin};
	width: calc(100% - ${props => props.leftMargin});
	left: ${props => props.left};
`
const SkillSort = (skillA, skillB) => (
	skillB.rating  === skillA.rating  ? skillA.name.length - skillB.name.length : skillB.rating - skillA.rating
)

export default class BarsGroup extends Component {
	constructor() {
		super();
		this.state = {
			dimensions: null
		}
	}
	render() {
		const {leftMargin, left, style, data} = this.props;
		const {dimensions} = this.state;
		let scale = 3;
		let spacing = 1;

		let num_bars = data.length;
		let bars;

		if(dimensions) {
			bars = data.sort(SkillSort ).map((skill, index) => {
				//let left = Math.min(index/num_bars * 100, 20*index);
				let widthPercentage = Math.min(num_bars > 9 ? 9 : 100/(num_bars+1), 10);
				let width = widthPercentage/100 * dimensions.width
				let left = ((width + (.01 * dimensions.width)) * index);
				let height = skill.rating/scale * dimensions.height;

				//console.log(left)
				let color = Teal.desaturate(1- (skill.rating/scale)).hex();
				return <Bar color={color} name={skill.name} left={left} height={height} width={width} />
			})
		}
		

		return (
			<Measure
				bounds
				onResize={contentRect => {
					this.setState({dimensions: contentRect.bounds});
				}}
			>
				{({measureRef}) => (
					<BarsGroupContainer style={style} ref={measureRef} leftMargin={leftMargin} left={left}>
						{bars}
					</BarsGroupContainer>
				)}
			</Measure>
			
		)
	}
}