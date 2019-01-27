import React, {Component} from 'react';
import styled from 'styled-components'
import Nav from '../components/Nav/Nav'

const Container = styled.div`
	text-align: center;
`
const NavTrigger = styled.div`
	position: absolute;
	bottom: 0;
`

export default () => (
	<Container>
		<h2>Ryan Feigenbaum</h2>
		<h1>Developer.</h1>
		<NavTrigger id="nav-trigger" />
		<Nav />
	</Container>
)