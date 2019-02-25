import React, {Component} from 'react';
import styled from 'styled-components';

const Title = styled.h3`
	display: inline-block;
	margin: 0 10px;
	color: ${props => props.isSelected ? "#42454c" : "#a2a5ac"};
	cursor: pointer;
	transition: color .5s;
	:hover {
		color: ${props => props.isSelected ? null : "#82858c"};
	}
`

export default class GraphNavOption extends Component {
	constructor() {
		super();
	}
	render() {
		let {title, onClick, isSelected} = this.props;
		return <Title onClick={onClick} isSelected={isSelected}>{title}</Title>
	}
}