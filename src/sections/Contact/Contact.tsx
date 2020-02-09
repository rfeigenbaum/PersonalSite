import React from 'react'

import Section, {SectionColors} from '@components/Section'
import {Colors} from '@utils/colors'
import EmailIcon from '@components/EmailIcon';
import LinkedInIcon from '@components/LinkedInIcon'

import {
    Container,
    ContactLink,
    Title
} from './styles'

const sectionColors:SectionColors = {
    foreground: Colors.lightGrey,
    background: Colors.darkGrey
}

const Contact:React.SFC<{}> = () => (
    <Section sectionColors={sectionColors} id="contact" style={{minHeight: '100vh', height: '100%'}}> 
        <Container>
            <Title>Contact</Title>
            <ContactLink href="mailto:feigenbaum.ryanj@gmail.com">
                <EmailIcon /> feigenbaum.ryanj@gmail.com
            </ContactLink>
            <ContactLink href="https://linkedin.com/in/ryan-feigenbaum/">
                <LinkedInIcon /> https://linkedin.com/in/ryan-feigenbaum/
            </ContactLink>
        </Container>
    </Section>
)

export default Contact