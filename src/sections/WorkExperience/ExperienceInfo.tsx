import React from 'react';
import styled from 'styled-components';
import { WorkExperienceItem } from './models';
import {
	CompanyName,
	Position,
	TimeSpan
} from './styles'

interface ExperienceInfoProps {
    experienceInfo: WorkExperienceItem
}

const ExperienceInfo:React.SFC<ExperienceInfoProps> = ({
    experienceInfo: {
        timespans,
        title,
        company
    }
}) => {
	return (
		<div>
			<CompanyName>
				{company}
			</CompanyName> 
			<Position>
				{title}
			</Position>
			{timespans.map(timespan => <TimeSpan key={timespan}>{timespan}</TimeSpan>)}
		</div>
		
	)
}

export default ExperienceInfo