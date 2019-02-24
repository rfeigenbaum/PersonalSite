import React, {Component} from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
import {getCompliment} from 'utils/colors'
import VerticallyAligned from 'components/Sections/VerticallyAligned';


const Conatiner = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	align-content: stretch;
	h1 {
		margin-top: 4px;
	}
	h2 {
		margin: 4px 0;
	}
	h3, h4, p {
		margin: 2px 0;
	}
`

const School = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	text-align: right;
	padding: 20px; 
	box-sizing: border-box;
	h4 {
		font-weight: 500;
	}
`

const RelevantCoursework = styled.div`
	color: ${props => getCompliment(props.theme.secondary)};
	flex-basis: 0;
	flex-grow: 1;
	padding: 20px; 
	box-sizing: border-box;
	h3 {
		margin-top: 5px;
	}
	p {
		line-height: 150%;
	}
`


const Education = ({data, ...props}) => {
	console.log(data)
	console.log(data.allMarkdownRemark.edges[0].node.html);
	return (
		<Conatiner>
			
				<School>
					<VerticallyAligned>
					<h1>Education</h1>
				
					
				<h2>Texas A&M University</h2>
				<h4>College of Engineering</h4>
				<h4>Computer Science</h4>
				<h4>Graduation Date: December 2019</h4>
				<h4>Current GPA: 3.647</h4>
					</VerticallyAligned>
				
				</School>
				<RelevantCoursework>
					<VerticallyAligned>
						<h2>Relevant Coursework</h2>
						<div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}></div>
					</VerticallyAligned>
				</RelevantCoursework>
				
			
		</Conatiner>
	)
}

const query = graphql`
	query {
		allMarkdownRemark(filter: {
			frontmatter: {
				title: { eq:"Relevant Coursework" }
			}
		}){
			edges {
			  node {
				html
			  }
			}
		}
	}
`

export default props => (
	<StaticQuery 
		query={query}
		render={data => <Education data={data} {...props} />}
		/>
)

