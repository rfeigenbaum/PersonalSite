import React, {Component} from 'react'
import styled from 'styled-components'
import SkillThreshold from './SkillThreshold';
import { Teal, LIGHT_GREY } from '../../../../utils/colors';
import textWidth from 'utils/textWidth';
import ReactFitText from 'react-fittext';


const BarContainer = styled.div`
	position: absolute;
	bottom: 0;
	height: ${props => props.height + "px"};
	background: ${props => props.color};
	width: ${props => props.width + "px"};
	left: ${props => props.left + "px"};
	margin-left: 20px;
	transition: .5s opacity;
	opacity: .8;
	overflow: hidden;
	:hover {
		opacity: 1;
	}
`

const BarText = styled.div`
	transform: rotate(-90deg) translateY(-5px) translateX(${props => props.fontSize + "px"}) ;
	transform-origin: bottom right;
	right: 0;
	position: absolute;
    text-align: right;
	color: ${LIGHT_GREY};
	font-size: ${props => props.fontSize + "px"};
	width: ${props => props.height + "px"};

	h2 {
		font-size: ${props => props.fontSize + "px"};
		margin: 0;
		display: inline;
		overflow: hidden;
    	white-space: nowrap;
	}
`


export default class Bar extends Component {
	static getDerivedStateFromProps(nextProps, prevState)  {
		if(prevState.name !== nextProps.name || prevState.height !== nextProps.height || prevState.width !== nextProps.width) {
			console.log(nextProps.name)
			return {
				fontSize: null, 
				prevName: nextProps.name, 
				prevHeight: nextProps.height,
				prevWidth: nextProps.width
			}
		}
		return null
	}
	constructor(props) {
		super(props)

		this.text = React.createRef();

		this.state = {
			fontSize: null, 
			prevName: null, 
			prevHeight: null,
			prevWidth: null
		}
	}
	shrinkUntilFits = () => {
		let newFontSize;
		let barText = this.text.current;
		
		while(barText.offsetWidth >= (this.props.height - 30)) {
			let fontSize = parseFloat(window.getComputedStyle(barText, null).getPropertyValue('font-size'));
			newFontSize = (fontSize * .95);
			barText.style.fontSize = newFontSize + "px"
		}
		this.setState({fontSize: newFontSize});
	}
	componentDidMount() {
		let barText = this.text.current;
		if(barText.offsetWidth >= (this.props.height - 20)) {
			this.shrinkUntilFits();
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		let {name, height, width} = this.props;
		//console.log(this.state.fontSize)
		if(name !== prevProps.name || height !== prevProps.height || width !== prevProps.width) {
			let barText = this.text.current;
			barText.style.fontSize = null;
			if(barText.offsetWidth >= (this.props.height - 20)) {
				this.shrinkUntilFits();
			}
		}
	}


	render() {
		const {name, left, height, width, color} = this.props;
		let fontSize = this.state.fontSize ? this.state.fontSize : width*.4;
		console.log(this.state)
		return (
			<BarContainer color={color} height={height} width={width} left={left}>
				<BarText fontSize={fontSize} height={height} width={width}>
					<h2 width={height} ref={this.text}>{name}</h2>
				</BarText>
			</BarContainer>
			
		)
	}
}