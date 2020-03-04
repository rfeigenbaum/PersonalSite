import React from 'react'

import Section, {SectionColors} from '@components/Section'
import {Colors} from '@utils/colors'
import * as styles from './styles'


const BulletCode = `\u2022`;
const PronunciationText = 'ˈfaɪgənˌbaʊm';

const sectionColors:SectionColors = {
    foreground: Colors.darkGrey,
    background: Colors.lightGrey
}

const About:React.SFC<{}> = () => (
    <Section sectionColors={sectionColors} id="about">
        <styles.Container>
            <h1>Feigenbaum <styles.Pronunciation>{BulletCode} {PronunciationText}</styles.Pronunciation></h1>
            <styles.Definitions>
                <li>a German surname meaning "fig tree"</li>
                <li>an exceptionally creative and dependable developer with a focus in web application development</li>
            </styles.Definitions>
        </styles.Container>
    </Section>
)

export default About