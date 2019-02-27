import React, {Component} from 'react';
import styled from 'styled-components'
import Nav from '../components/Nav/Nav'

const Container = styled.div`
	text-align: center;
`

const Name = styled.h2`
	font-weight: 400;
	z-index: 10;
	position: relative;
	margin-bottom: 5px;
	font-size: 2.5rem;
`
const Developer = styled.h1`
	margin-top: 5px;
	font-size: 3rem;
` 
const Figtree = styled.h2`
	font-weight: 400;
	position: absolute;
	color: #CCC;
	top: ${props => props.hovered ? "-60%" : "-40%"};
	right: 10%;
	opacity: ${props => props.hovered ? 1 : 0};
	z-index: 5;
	transition: all .3s;
`
const NameBox = styled.div`
	position: relative;
	display: inline-block;
`

export default () => (
	<Container>
		<Name>Ryan Feigenbaum</Name>
		<Developer>Developer.</Developer>
	</Container>
)

//Figtree version
/*export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			hovered: false
		}
	}
	render() {
		return (
			<Container>
				<NameBox>
					<Figtree hovered={this.state.hovered}>( Figtree )</Figtree>
					<Name>Ryan <span onMouseEnter={() => this.setState({hovered: true})} onMouseLeave={() => this.setState({hovered: false})}>Feigenbaum</span></Name>
				</NameBox>
				<h1>Developer.</h1>
			</Container>
		)
	}
	
}*/