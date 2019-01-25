import React from 'react'
import styled from 'styled-components'

let VerticallyAligned = styled.div`
	height: 100%;
	width: ${props => props.width || '100%'};
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export default ({children, style}) => {
	return (
		<VerticallyAligned style={style}>
			{children}
		</VerticallyAligned>
	)
}