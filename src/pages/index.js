import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Section from '../components/Sections/Section';
import ColorPairs from 'utils/colors';
import Home from '../sections/Home';
import About from '../sections/About';
import WorkExperience from '../sections/WorkExperience'
import Education from '../sections/Education';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

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
