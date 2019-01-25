import React, {Component} from 'react';
import styled from 'styled-components';
import VerticallyAligned from './VerticallyAligned';

const ParentSection = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	align-items: stretch;
	flex-direction: row;
`
const SubSection = styled.div`
	flex-grow: 1;
	background: ${props => props.main};
	color: ${props => props.secondary};
`

export default class DividedSection extends Component {
	render() {
		const {leftSection, rightSection, leftColors, rightColors, style} = this.props;
		return (
			<ParentSection style={style}>
				<SubSection {...leftColors}>
					<VerticallyAligned>
						{leftSection}
					</VerticallyAligned>
				</SubSection>
				<SubSection {...rightColors}>
					<VerticallyAligned>
						{rightSection}
					</VerticallyAligned>
				</SubSection>
			</ParentSection>
		)
	}
}