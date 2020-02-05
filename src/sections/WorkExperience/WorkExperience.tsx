import React, {Component} from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"

import ExperienceItem from './ExperienceItem';
import { WorkExperienceQuery } from './models';
import Section from '@components/Section';
import {Colors} from '@utils/colors'

const Conatiner = styled.div`
	max-width: 1500px;
	margin: 0 auto;
	padding: 5% 50px;
`

const WorkExperience:React.SFC<{}> = () => {
    let data:WorkExperienceQuery = useStaticQuery(
        graphql`
            query WorkExperienceQuery {
                all: allWorkExperiencesJson {
                    workExperiences: edges {
                        node {
                            company
                            title
                            timespans
                            url
                            location
                            description
                        } 
                    }
                }
            }
        `
    )
	let experiences = data.all.workExperiences.map((w, i) => <ExperienceItem key={i} workExperience={w.node} />)
	return (
        <Section id="experience" sectionColors={{
            foreground: Colors.white,
            background: Colors.grey
        }}>
            <Conatiner>
                <h1>Experience</h1>
                {experiences}
            </Conatiner>
        </Section>
		
	)
}

export default WorkExperience
