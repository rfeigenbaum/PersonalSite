import React, {Component} from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
import {TEAL, LIGHT_GREY, hexToRGB} from '../components/colors'
import anime from 'animejs';

import SkillCircle from '../components/Skills/SkillCircle'

const Conatiner = styled.div`
	width: 100vw;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    text-align: center;
`
//\left(x+5\right)\cdot\frac{5}{3}
const ratingToSize = (rating) => ((rating + 5) * 5/3) + "vw"

let Skill = styled.h2`
	display: block;
	margin: 0;
	background: ${hexToRGB(TEAL, .8)};
	position: absolute;
	color: ${LIGHT_GREY};
	border-radius: 50%;
	line-height: ${props => ratingToSize(props.rating)};
	width: ${props => ratingToSize(props.rating)};
	height: ${props => ratingToSize(props.rating)};
	text-align: center;
`

class Skills extends Component {
	constructor() {
		super();
		this.containerRef = React.createRef();
		this.state = {
			moved: false
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		anime({
			targets: '.animation-skill',
			translateX: function() {
				return anime.random(-100, 100);
			},
			translateY: function() {
				return anime.random(-100, 100);
			}
		})
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = (event) => {
		let scrollPosition = window.scrollY;
		if(this.state.moved === false && scrollPosition >= this.containerRef.current.offsetTop*.9) {
			console.log("run")
			
			anime({
				targets: '.animation-skill',
				translateX: function() {
					return anime.random(-800, 800);
				},
				translateY: function() {
					return anime.random(-600, 300);
				}
			})
			this.setState({moved: true})
		}
		//console.log(this.containerRef.current.offsetTop, scrollPosition)
	}
	render() {
		let skills = this.props.data.allSkillsJson.edges.map(n => {
			let skill = n.node;
			return <SkillCircle key={skill.name} rating={skill.rating} name={skill.name}></SkillCircle>
		})

		return (
			<Conatiner ref={this.containerRef}>
				<h1>Skills</h1>
				{skills}
			</Conatiner>
		)
	}
}

const query = graphql`
	query {
		allSkillsJson {
			edges {
				node {
					name
					rating
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