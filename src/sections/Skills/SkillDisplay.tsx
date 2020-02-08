import React from 'react'
import styled from 'styled-components'

import {Skill} from './models'

import {
    SkillLine,
    SkillName,
    Stars,
    StarStyled
} from './styles'

const SkillDisplay:React.SFC<Skill> = ({
    name,
    rating
}) => {
    let stars = []
    for(var r = 0; r < 5; r++) {
        if(rating < 1 && rating >= 0) {
            stars.push(<StarStyled percentOfStar={rating} />)
        }
        else if(rating < 0) {
            stars.push(<StarStyled percentOfStar={0} />)
        }
        else {
            stars.push(<StarStyled/>)
        }
        rating--;
    }
    return (
        <SkillLine>
            <SkillName>{name}</SkillName>
            <Stars>
                {stars}
            </Stars>
        </SkillLine>
    )
}

export default SkillDisplay