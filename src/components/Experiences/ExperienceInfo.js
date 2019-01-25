import React, {Component} from 'react';
import styled from 'styled-components';

const CompanyName = styled.h3`
	margin: 4px 0;
`
const Position = styled.h4`
	margin: 4px 0;
`
const TimeSpan = styled.h5`
	margin: 2px 0;
`

export default (props) => {
	let timespans = props.workExperience.timespans.map(timespan => <TimeSpan key={timespan}>{timespan}</TimeSpan>)
	let position = null;
	if(props.workExperience.position && props.workExperience.role) {
		position = props.workExperience.position + " - " + props.workExperience.role
	}
	else if(props.workExperience.position || props.workExperience.role) {
		position = props.workExperience.position ? props.workExperience.position : props.workExperience.role
	}
	console.log(props)
	return (
		<div>
			<CompanyName>
				{props.workExperience.company}
			</CompanyName> 
			<Position>
				{position}
			</Position>
			{timespans}
		</div>
		
	)
}