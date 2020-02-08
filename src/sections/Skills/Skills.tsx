import React, { Component } from 'react'
import styled from 'styled-components'

import Section from '@components/Section'
import { Colors } from '@utils/colors'

import { SkillsQuery } from './models'
import { useStaticQuery, graphql } from 'gatsby'

import {
	SectionTitle, 
	SkillsCategory,
	SkillsContainer,
	Container
} from './styles'
import SkillDisplay from './SkillDisplay'

const Skills: React.SFC<{}> = () => {
	let data: SkillsQuery = useStaticQuery(
		graphql`
			query {
				all: allSkillsJson {
					skills: edges {
						skillCategory: node {
							data {
								name
								rating
							}
							title
						}
					}
				}
			}
		`
	)
	return (
		<Section
			id="skills"
			sectionColors={{
				foreground: Colors.grey,
				background: Colors.white,
			}}
		>
			<Container>
				<SectionTitle>Skills</SectionTitle>
				{
					data.all.skills.map(({skillCategory}) => (
						<>
							<SkillsCategory>
								{skillCategory.title}
							</SkillsCategory>
							<SkillsContainer>
								{skillCategory.data.sort((a,b) => b.rating - a.rating).map(skill => <SkillDisplay {...skill} />)}
							</SkillsContainer>
						</>
					))
				}
			</Container>
		</Section>
	)
}

export default Skills