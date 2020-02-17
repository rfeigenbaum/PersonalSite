import styled from 'styled-components'
import { Colors } from '@utils/colors'
import Star from '@components/Star'

export const Container = styled.div`
    margin: 0 auto;
	padding: 5% 50px;
`

export const SectionTitle = styled.h1`
    color: ${Colors.darkGrey};
    text-align: center;
`

export const SkillsCategory = styled.h2`
    color: ${Colors.grey};
    text-align: center;
`

export const SkillsContainer = styled.div`
    display: flex;
    max-width: 900px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-around;
`

export const SkillLine = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1px 0;
    padding: 1px;
    align-items: center;
    flex-basis: 400px;
    flex-shrink: 1;
    flex-grow: 1;
    max-width: 400px;
`

export const SkillName = styled.h3`
    margin: 0;
    display: inline-block;
    margin-top: 1px;
    font-size: 1.35em;
`

export const Stars = styled.div`
    line-height: 0;
    margin-top: -6px;
`

export const StarStyled = styled(Star)`
    height: 1.35em;
`