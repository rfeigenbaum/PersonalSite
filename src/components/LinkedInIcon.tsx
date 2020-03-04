import React from 'react';

interface IconProps {
    className?: string
    style?: React.CSSProperties
    size?: string | number
    color?: string
}

const LinkedInIcon:React.SFC<IconProps> = ({
    className,
    style,
    size,
    color
}) => {
    return (
        <svg fill={color} style={style} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="-4 -4 32 32">
            <mask id="linkedinMask">
                <rect fill="white" x="-4" y="-4" width="100%" height="100%"/>
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" fill="black"/>
            </mask>
            <rect fill="inherit" x="-4" y="-4" width="100%" height="100%" rx="2" mask="url(#linkedinMask)"/>
        </svg>
    )
}

export default LinkedInIcon