import React from 'react';
import styled from 'styled-components';
import { WorkExperienceItem } from './models';

const CompanyName = styled.h3`
	margin: 4px 0;
`
const Position = styled.h4`
	margin: 4px 0;
`
const TimeSpan = styled.h5`
	margin: 2px 0;
`

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