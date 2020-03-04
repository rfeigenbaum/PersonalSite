import React, {Component} from 'react';
import styled from 'styled-components';
import ExperienceInfo from './ExperienceInfo';
import { WorkExperienceItem } from './models';
import {
    Experience, 
    InfoSection,
    DetailsSection,
    DetailsParagraph
} from './styles'

interface Props {
    style?: React.CSSProperties
    workExperience: WorkExperienceItem
}

const ExperienceItem:React.SFC<Props> = ({
    style,
    workExperience
}) => (
    <Experience style={style}>
        <InfoSection>
            <ExperienceInfo experienceInfo={workExperience} />
        </InfoSection>
        <DetailsSection>
            <DetailsParagraph>
                {workExperience.description}
            </DetailsParagraph>
        </DetailsSection>
    </Experience>
)

export default ExperienceItem