import React, {Component} from 'react';
import styled from 'styled-components'


const Conatiner = styled.div`
	max-width: 1400px;
	margin: 0 auto;
	box-sizing: border-box;
	padding: 0 30px;
`

let Text = styled.h2`
	font-weight: 400;
`

export default () => (
	<Conatiner>
		<h1>About</h1>
		<Text>An exceptionally creative and dependable developer with a focus in web application development.</Text>
	</Conatiner>
)