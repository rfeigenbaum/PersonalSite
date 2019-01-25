import React, {Component} from 'react';
import styled from 'styled-components';
import ExperienceInfo from './ExperienceInfo';

const Experience = styled.div`
	display: flex;
	margin: 50px 0;
`
const Info = styled.div`
	border-right: solid thin ${props => props.theme.secondary};
	text-align: right;
	flex-basis: 400px;
	padding-right: 10px;
`
const Details = styled.div`
	flex-grow: 1;
	padding-left: 10px;
`

export default (props) => {
	return (
		<Experience style={props.style}>
			<Info>
				<ExperienceInfo workExperience={props.workExperience} />
			</Info>
			<Details>
				{props.workExperience.description}
			</Details>
		</Experience>
	)
}