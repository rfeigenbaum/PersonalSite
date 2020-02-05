import React from 'react'
import styled from 'styled-components'

export interface SectionColors {
    foreground: string
    background: string
}

const SectionDiv = styled.div<SectionColors>`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${props => props.background};
    color: ${props => props.foreground};
`

export interface SectionProps {
    sectionColors: SectionColors
    id?: string
    children?: React.ReactNode 
    style?: React.CSSProperties
}

const Section: React.SFC<SectionProps> = ({
    sectionColors: {
        background,
        foreground
    },
    id,
    children,
    style
}) => (
    <SectionDiv className="section" style={style} id={id} background={background} foreground={foreground}>
        {children}
    </SectionDiv>
)

export default Section