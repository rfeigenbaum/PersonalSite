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

const Name = styled.h2`
	font-weight: 600;
`

export default () => (
	<Container>
		<Name>Ryan Feigenbaum</Name>
		<h1>Developer.</h1>
		<NavTrigger id="nav-trigger" />
		<Nav />
	</Container>
)