import React, {Component} from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
import ProjectHoverable from './components/ProjectHoverable'

const Conatiner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px 10px 0 10px;
	width: 100%;
	box-sizing: border-box;
`
const ProjectContainer = styled.div`
	display: flex;
	justify-content: space-between;
	
	@media screen and (max-width: 720px) {
		flex-direction: column;
		align-items: stretch;
	}
`

const Project = styled(ProjectHoverable)`
	flex: 1 0 calc(25% - 10px);
	margin: 20px;
    width: 100%;
    max-width: 500px;
	after {
		content: ' ';
		display: block;
		padding-bottom: 100%;
	}
	@media screen and (max-width: 720px) {
		margin: 20px auto;
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