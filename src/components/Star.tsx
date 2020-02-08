import React from 'react';
import {Colors} from '@utils/colors'
import Color from 'color'

interface StarProps {
    className?: string
    style?: React.CSSProperties
    size?: string | number
    percentOfStar?: number
}

const Star:React.SFC<StarProps> = ({
    className,
    style,
    size,
    percentOfStar = 1
}) => {
    let totalWidth = 28
    let maskWidth = (1 - percentOfStar) * totalWidth;
    let maskStart = 26 - maskWidth
    let maskId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    let border = new Color(Colors.teal)
    //Credit for star svg: https://iconmonstr.com
    return (
        <svg viewBox="-2 -2 28 28" style={style} className={className}>
            <mask id={maskId}>
                <rect x="0" y="0" width="100" height="100" fill="white" />
                <rect x={maskStart} y="0" width={maskWidth} height="28" fill="black" />
            </mask>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill={Colors.teal} mask={`url(#${maskId})`}/>
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill="none" stroke={border.darken(.4).toString()} stroke-width="2"/>
        </svg>
    )
}

export default Star