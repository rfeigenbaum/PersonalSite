import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Section from '../components/Sections/Section';
import ColorPairs from '../components/colors';
import DividedSection from '../components/Sections/DividedSection';
import Home from '../containers/Home';
import About from '../containers/About';
import WorkExperience from '../containers/WorkExperience'
import Education from '../containers/Education';
import Projects from '../containers/Projects';
import Skills from '../containers/Skills';
import Contact from '../containers/Contact';

const IndexPage = () => (
	<div>
		<Section colors={ColorPairs.darkGrey} id="home">
			<Home />
		</Section>
		<Section colors={ColorPairs.lightGrey} id="about">
			<About />
		</Section>
		<Section colors={ColorPairs.grey} id="experience">
			<WorkExperience />
		</Section>
		<Section colors={ColorPairs.teal} style={{background: `linear-gradient(90deg, ${ColorPairs.teal.main} 50%, ${ColorPairs.teal.secondary} 50%)`}} id="education">
			<Education />
		</Section>
		<Section colors={ColorPairs.grey} id="projects">
			<Projects />
		</Section>
		<Section colors={ColorPairs.lightGrey} id="skills">
			<Skills />
		</Section>
		<Section colors={ColorPairs.darkGrey} id="contact">
			<Contact />
		</Section>
	</div>
  
)

export default IndexPage
