import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import VerticallyAligned from './VerticallyAligned';

const SectionDiv = styled.div`
	width: 100vw;
	min-height: 100vh;
	background: ${props => props.theme.main};
	color: ${props => props.theme.secondary};
	height: 100%;
	width: ${props => props.width || '100%'};
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export default class Section extends Component {
	render() {
		const {children, style, colors} = this.props;
		return (
			<ThemeProvider theme={colors}>
				<SectionDiv style={style}>
					{children}
				</SectionDiv>
			</ThemeProvider>
			
		)
	}
}