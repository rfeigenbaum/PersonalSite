import styled from 'styled-components'
import { Colors } from '@utils/colors'

export const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	box-sizing: border-box;
`

export const Title = styled.h1`
	text-align: center;
`

export const ContactLink = styled.a`
	margin: 20px auto;
	font-size: 1.5em;
	display: block;
	color: ${Colors.lightGrey};
	transition: color .3s;
	svg {
		fill: ${Colors.lightGrey};
		height: 1.5em;
		width: 1.5em;
		margin-right: 5px;
		float: left;
		transition: fill .3s;
	}
	&:hover {
		color: ${Colors.teal};
		svg {
			fill: ${Colors.teal}
		}
	}
`