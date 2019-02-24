import React, {Component} from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
import {TEAL, LIGHT_GREY, hexToRGB} from 'utils/colors'
import anime from 'animejs';

import SkillsGraph from './components/SkillsGraph'


const Conatiner = styled.div`
	width: 100vw;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    text-align: center;
	overflow: hidden;
`

class Skills extends Component {
	constructor() {
		super();
		this.containerRef = React.createRef();
		this.state = {
			moved: false
		}
	}
	render() {
		/*let skills = this.props.data.allSkillsJson.edges.map(n => {
			let skill = n.node;
			return <SkillCircle key={skill.name} rating={skill.rating} name={skill.name}></SkillCircle>
		})*/
		let skills = this.props.data.allSkillsJson.edges.map((node) => {
			let {data, title} = node.node;
			return {data: data, title: title};
		});

		return (
			<Conatiner ref={this.containerRef}>
				<Title>Skills</Title>
				<SkillsGraph data={skills} />
			</Conatiner>
		)
	}
}
let Title = styled.h1`
	margin-top: 80px;
`
let Section = styled.div`
	border-top: solid 5px #AAA;
	position: absolute;
	width: 100%;
	bottom: ${props => props.bottom};
`
let BarGraphSection = styled.div``

let SectionTitle = styled.h2`
	position: absolute;
	bottom: ${props => props.bottom};
	margin-bottom: 5px;
	color: ${hexToRGB(TEAL, .8)};
	margin-left: 5px;
`
let SectionDescription = styled.h2`
	position: absolute;
	bottom: ${props => props.bottom};
	margin-bottom: 5px;
	color: ${hexToRGB(TEAL, .5)};
	margin-left: 5px;
`
let Bar = styled.div`
	width: 500px;
	height: 56px;
	transform: rotateZ(-90deg);
	text-align: right;
	position: absolute;
	bottom: 0;
	left: 350px;
	background: ${TEAL};
	color: #FFF;
	font-weight: 500;
	font-size: 36px;
	padding: 5px 10px;
	box-sizing: border-box;
	transform-origin: 11% 0%;
`

const query = graphql`
{
	allSkillsJson {
		edges {
			node {
				title
					data {
						name
						rating
					}
				}
			}
		}
	}
  
`

export default props => (
	<StaticQuery 
		query={query}
		render={data => <Skills data={data} {...props} />}
		/>
)