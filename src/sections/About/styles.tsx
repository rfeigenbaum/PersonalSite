import styled from 'styled-components'

export const Container = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	box-sizing: border-box;
	padding: 10% 30px;
`

export const Text = styled.h2`
	font-weight: 400;
`

export const Pronunciation = styled.span`
	font-weight: 300;
	color: #333;
	font-size: .8em;
`

export const Definitions = styled.ol`
	font-size: 1.5em;
	list-style: none;
  	counter-reset: definitions-counter;

	li {
		counter-increment: definitions-counter;

		:before {
			content: counter(definitions-counter) ". ";
			font-family: 'Abril Fatface', serif;
			line-height: 1;
			font-size: 1em;
			
			text-align: right;
		}
	}
`