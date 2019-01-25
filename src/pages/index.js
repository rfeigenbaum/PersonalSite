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

const IndexPage = () => (
	<div>
		<Section colors={ColorPairs.darkGrey}>
			<Home />
		</Section>
		<Section colors={ColorPairs.lightGrey}>
			<About />
		</Section>
		<Section colors={ColorPairs.grey}>
			<WorkExperience />
		</Section>
		<Section colors={ColorPairs.teal} style={{background: `linear-gradient(90deg, ${ColorPairs.teal.main} 50%, ${ColorPairs.teal.secondary} 50%)`}}>
			<Education />
		</Section>
		<DividedSection
			leftSection={"howdy"}
			rightSection={"how are you"}
			leftColors={ColorPairs.lightGrey}
			rightColors={ColorPairs.teal}/>
	</div>
  
)

export default IndexPage
