import React, {Component} from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
import ProjectHoverable from './components/ProjectHoverable'

const Conatiner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`
const ProjectContainer = styled.div`
	display: flex;
	justify-content: space-between;
    width: 1200px;
`

const Project = styled(ProjectHoverable)`
	flex: 1 0 calc(25% - 10px);
	margin: 20px;
    max-width: 500px;
	after {
		content: ' ';
		display: block;
		padding-bottom: 100%;
	}
`

const WorkExperience = ({data, ...props}) => {
	console.log(data);
	let projects = data.allMarkdownRemark.edges.map(p => {
		let project = p.node.frontmatter;
		return <Project project={project} />
	})
	return (
		<Conatiner>
			<h1>Projects</h1>
			<ProjectContainer>
			{projects}
			</ProjectContainer>
			
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