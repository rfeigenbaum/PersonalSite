import styled from 'styled-components'
import { Colors } from '@utils/colors'

export const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 10%;
`

export const Title = styled.h1`
	text-align: center;
`

export const LinksContainer = styled.div`
	display: flex;
	align-items: flex-start
`

export const ContactLink = styled.a`
	margin: 20px 0;
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