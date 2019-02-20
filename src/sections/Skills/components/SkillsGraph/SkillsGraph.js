import React, {Component} from 'react'
import styled from 'styled-components'
import SkillThreshold from './SkillThreshold';
import BarsGroup from './BarsGroup';

const GraphContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 70%;
	bottom: 0;
`
const Line = styled.hr`
	display: block;
	width: 100%;
	height: 1px;
    border: 0;
    border-top: 1px solid red;
    margin: 1em 0;
    padding: 0;
	position: absolute;
	bottom: 70%;
	margin: 0;
`


export default class SkillsGraph extends Component {
	render() {
		return (
			<GraphContainer>
				<SkillThreshold title="advanced" description="know it well" percentage="100%" />
				<SkillThreshold title="intermediate" description="know it" percentage="66%" />
				<SkillThreshold title="beginner" description="used it" percentage="33%" />
				<BarsGroup 
					data={[
						{
							name: "JavaScript",
							rating: 3
						},
						{
							name: "CSS",
							rating: 3
						}
					]} 
					left="400px"
					scale={3}
				/>
			</GraphContainer>
		)
	}
}