import React, {Component} from 'react'
import styled from 'styled-components'
import SkillThreshold from './SkillThreshold';
import BarsGroup from './BarsGroup';
import anime from 'animejs';
import GraphNavOption from './GraphNavOption';
import { GREY, LIGHT_GREY } from '../../../../utils/colors';

const GraphContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 70%;
	bottom: 0;
`

const NavOptions = styled.div`
	position: absolute;
	right: 0;
	bottom: calc(100% + 10px);
`

let FakedTitle = styled.h2`
	text-align: left;
	display: block;
`

const ContentContainer = styled.div`
	display: flex;
	height: 100%;
`

const SideBar = styled.div`
	border-right: solid 3px rgba(100,100,100,.5);
	transition: all .2s;
	> div {
		visibility: hidden;
		padding: 0 10px;
	}
`
const BarContainer = styled.div`
	flex-grow: 2;
	height: 100%;
	overflow-x: hidden;
	padding: 0 10px;
	position: relative;
`

export default class SkillsGraph extends Component {
	static getDerivedStateFromProps(nextProps, prevState) {

	}
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
			baseLeft: 0,
			moving: false
		}
		this.animation = null
	}
	setToIndex = (index) => {
		let {selectedIndex} = this.state;
		if(selectedIndex !== index) {
			let temp = {
				baseLeft: this.state.baseLeft
			}
			let goal = index*-100;
			let duration = 450 + Math.pow(Math.abs(selectedIndex-index)*100, 3/4)

			if(this.animation !== null) {
				this.animation.pause();
			}

			this.animation = anime({
				targets: temp,
				baseLeft: index*-100,
				duration: duration,
				easing: 'easeInOutSine',
				update: () => this.setState({baseLeft: temp.baseLeft}),
				begin: () => this.setState({selectedIndex: index, moving: true}),
				complete: () => this.setState({moving: false})
			})
		}
		
	}
	render() {
		const {style, data} = this.props;
		const {selectedIndex, baseLeft} = this.state;

		const options = data.map((set, index) => {
			return <GraphNavOption onClick={() => this.setToIndex(index)} isSelected={selectedIndex===index} title={set.title} />
		})

		const barGroups = data.map((set, index) => {
			let left = baseLeft + (index * 100);
			return <BarsGroup data={set.data} leftMargin="450px" scale="3" left={left + "%"} /> 
		})

		const skillThresholds = Thresholds.map(threshold => <SkillThreshold title={threshold.title} description={threshold.description} percentage={threshold.percentage} />);

		

		const skillThresholdSpacer = Thresholds.map(threshold => {
			return (
				<div>
					<FakedTitle>{threshold.title}</FakedTitle>
					<FakedTitle>{threshold.description}</FakedTitle>
				</div>
			)
		});

		return (
			<GraphContainer style={style}>
				{skillThresholds}
				<ContentContainer>
					<SideBar moving={this.state.moving}>
						<div>
							{skillThresholdSpacer}
						</div>
					</SideBar>
					
				
					<BarContainer>
						{barGroups}
					</BarContainer>
				</ContentContainer>
				<NavOptions>{options}</NavOptions>
				
			</GraphContainer>
		)
	}
}

const Thresholds = [
	{
		title: "advanced",
		description: "know it well",
		percentage: "100%",
	},
	{
		title: "intermediate",
		description: "know it",
		percentage: "66%",
	},
	{
		title: "beginner",
		description: "used it",
		percentage: "33%",
	}
]