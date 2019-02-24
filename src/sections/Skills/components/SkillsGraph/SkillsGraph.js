import React, {Component} from 'react'
import styled from 'styled-components'
import SkillThreshold from './SkillThreshold';
import BarsGroup from './BarsGroup';
import anime from 'animejs';
import GraphNavOption from './GraphNavOption';

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


export default class SkillsGraph extends Component {
	static getDerivedStateFromProps(nextProps, prevState) {

	}
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0,
			baseLeft: 0
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
				begin: () => this.setState({selectedIndex: index})
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

		return (
			<GraphContainer style={style}>
				<SkillThreshold title="advanced" description="know it well" percentage="100%" />
				<SkillThreshold title="intermediate" description="know it" percentage="66%" />
				<SkillThreshold title="beginner" description="used it" percentage="33%" />
				<NavOptions>{options}</NavOptions>
				{barGroups}
			</GraphContainer>
		)
	}
}