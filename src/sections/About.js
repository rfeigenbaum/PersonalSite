import React, {Component} from 'react';
import styled from 'styled-components'


const Conatiner = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	box-sizing: border-box;
	padding: 10% 30px;
`

let Text = styled.h2`
	font-weight: 400;
`
const BULLET = `\u2022`;

const Pronunciation = styled.span`
	font-weight: 300;
	color: #333;
	font-size: .8em;
`
const PronunciationText = 'ˈfaɪgənˌbaʊm'

const Definitions = styled.ol`
	font-size: 1.5rem;
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
/*

ol {
  list-style: none;
  counter-reset: my-awesome-counter;
}
ol li {
  counter-increment: my-awesome-counter;
}
ol li::before {
  content: counter(my-awesome-counter) ". ";
  color: red;
  font-weight: bold;
}

*/

export default () => (
	<Conatiner>
		<h1>Feigenbaum <Pronunciation>{BULLET} {PronunciationText}</Pronunciation></h1>
		<Definitions>
			<li>a German surname meaning "fig tree"</li>
			<li>an exceptionally creative and dependable developer with a focus in web application development</li>
		</Definitions>
	</Conatiner>
)