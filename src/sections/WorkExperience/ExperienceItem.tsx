import React, {Component} from 'react';
import styled from 'styled-components';
import ExperienceInfo from './ExperienceInfo';
import { WorkExperienceItem } from './models';

const Experience = styled.div`
	display: flex;
	margin: 50px 0;
`
const Info = styled.div`
	border-right: solid thin ${props => props.theme.secondary};
	text-align: right;
	flex-basis: 600px;
	padding-right: 10px;
	flex-shrink: 1;
`
const Details = styled.div`
	flex-grow: 1;
	flex-shrink: 2;
	padding-left: 10px;
`
const DetailsParagraph = styled.p`
	font-size: 22px;
`

interface Props {
    style?: React.CSSProperties
    workExperience: WorkExperienceItem
}

const ExperienceItem:React.SFC<Props> = ({
    style,
    workExperience
}) => (
    <Experience style={style}>
        <Info>
            <ExperienceInfo experienceInfo={workExperience} />
        </Info>
        <Details>
            <DetailsParagraph>
                {workExperience.description}
            </DetailsParagraph>
        </Details>
    </Experience>
)

export default ExperienceItem