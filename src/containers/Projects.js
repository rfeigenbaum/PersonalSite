import React, {Component} from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
import ExperienceItem from '../components/Experiences/ExperienceItem';

const Conatiner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`


const WorkExperience = ({data, ...props}) => {
	console.log(props);
	let experiences = data.all.workExperiences.map(w => {
		let job = w.node;
		return (
			<ExperienceItem workExperience={job} />
		)
	})
	return (
		<Conatiner>
			<h1>Experience</h1>
			{experiences}
		</Conatiner>
	)
}

const query = graphql`
	query {
		allMarkdownRemark(filter: {
			frontmatter: {
				type: { eq:"project" }
			}
		}) 
		{
			edges {
				node {
					frontmatter {
						title 
						brief
						image
					}
				}
			}
		}
	}
	  
`

export default props => (
	<StaticQuery 
		query={query}
		render={data => <WorkExperience data={data} {...props} />}
		/>
)