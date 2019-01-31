import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import animate, {getSide} from './HoverableAnimation';
import anime from 'animejs';
import {TEAL, hexToRGB} from '../../../utils/colors'


let ProjectContainer = styled.div`
	overflow: hidden;
	border-radius: 2px;
	position: relative;
`
let Info = styled.div`
	position: absolute;
	top: -100%;
	opacity: .5;
	background: ${hexToRGB(TEAL, .5)};
	padding: 10px 30px;
	box-sizing: border-box;
	width: 100%;
	height: calc(100% - 5px);
`	
let Brief = styled.div`
	margin: 10px;
	p {
		font-size: 20px;
	}
`

export default class ProjectHoverable extends Component {
	constructor() {
		super();
		this.parentObj = React.createRef();
		this.briefObj = React.createRef();
		this.animation = null;
	}
	renderProjectBrief = (event) => {
		let obj = this.parentObj.current;
		let side = getSide(event, obj)

		let briefObj = this.briefObj.current;
		if(this.animation !== null) {
			this.animation.pause();
		}
		this.animation = animate(briefObj, "IN", side);
	}
	removeProjectBrief = (event) => {
		let obj = this.parentObj.current;
		let side = getSide(event, obj);

		let briefObj = this.briefObj.current;
		if(this.animation !== null) {
			this.animation.pause();
		}
		this.animation = animate(briefObj, "OUT", side);
	}
	render() {
		console.log(this.props);
		console.log(this.state)
		let {style, className} = this.props;
		console.log(className)
		return (
			<ProjectContainer className={className} style={style} ref={this.parentObj} onMouseEnter={this.renderProjectBrief} onMouseLeave={this.removeProjectBrief}>
				<Info ref={this.briefObj} >
					<h2 style={{fontWeight: 500}}>{this.props.project.title}</h2>
					<Brief>
						<p style={{fontSize: "20px"}}>{this.props.project.brief}</p>
					</Brief>
				</Info>
				<img src={this.props.project.image} width="100%" />
			</ProjectContainer>
		)
	}
}