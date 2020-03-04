import React from 'react'

import * as styles from './styles'
import Section, {SectionColors} from '@components/Section'
import {Colors} from '@utils/colors'

const sectionColors:SectionColors = {
    foreground: Colors.white,
    background: Colors.darkGrey
}

const Home:React.SFC<{}> = () => (
    <Section id="home" sectionColors={sectionColors} style={{minHeight: '100vh', height: '100%'}}>
        <styles.Container>
            <styles.Name>Ryan Feigenbaum</styles.Name>
            <styles.Developer>Developer.</styles.Developer>
        </styles.Container>
    </Section>
)

export default Home