import React, {Component} from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
import {getCompliment} from 'utils/colors'
import VerticallyAligned from 'components/Sections/VerticallyAligned';
import { hexToRGB, TEAL } from '../utils/colors';


const Conatiner = styled.div`
	max-width: 1400px;
	padding-top: 50px;
	margin: 0 auto;
	display: flex;
	align-content: center;
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
	padding: 20px 25px; 
	box-sizing: border-box;
	align-self: center;
	h4 {
		font-weight: 500;
	}
`

const RelevantCoursework = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	padding: 40px 25px; 
	box-sizing: border-box;
	border: solid 8px ${hexToRGB(TEAL, .4)};
	box-shadow: 0 0 2px 0px rgba(0,0,0,.3), 0 0 2px 0 rgba(0,0,0,.3) inset;
	margin: 20px;
	position: relative;
	h3 {
		margin-top: 5px;
	}
	p {
		line-height: 150%;
	}
	:after {
		content: '';
		position: absolute;
		top: 5px;
		left: 5px;
		width: 100%;
		height: 100%;
		border: solid 8px ${hexToRGB(TEAL, .4)};
		box-shadow: 0 0 2px 0px rgba(0,0,0,.2), 0 0 2px 0 rgba(0,0,0,.2) inset;
	}
	:before {
		content: '';
		position: absolute;
		top: -20px;
		left: -20px;
		width: 100%;
		height: 100%;
		border: solid 8px ${hexToRGB(TEAL, .4)};
		box-shadow: 0 0 2px 0px rgba(0,0,0,.2), 0 0 2px 0 rgba(0,0,0,.2) inset;
	}
`


const Education = ({data, ...props}) => {
	console.log(data)
	console.log(data.allMarkdownRemark.edges[0].node.html);
	return (
		<Conatiner>
			
				<School>
					<h1>Education</h1>
				
					
					<h2>Texas A&M University</h2>
					<h4>College of Engineering</h4>
					<h4>Computer Science</h4>
					<h4>Graduation Date: December 2019</h4>
					<h4>Current GPA: 3.647</h4>
				
				</School>
				<RelevantCoursework>
						<h2>Relevant Coursework</h2>
						<div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}></div>
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

