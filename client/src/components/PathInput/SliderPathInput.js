import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {setHeatMapPathAngle} from '../../modules/heatmap';
import {setBusPath} from '../../modules/picker';
// import API from '../../utils/API';
import './SliderPathInput.scss';


class SliderPathInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0,
			angle: 0,
			downX: 0,
			downY: 0,
		};
	}

	handleChange = sliderValue => {
		// console.log('sliding...',sliderValue);
		this.props.setBusPath(sliderValue)
	}
	handleAfterChange = sliderValue => {
		// console.log('slide done...',sliderValue);
		const pathID = sliderValue;
		console.log('fetching markers for path', pathID);
		// TODO: query for markers by id, then display 
	}

	render() {
		return (
			<div className="slider-input-container">
				<Slider
				id="slider-input"
					// min={0} max={360} step={20}
					min={1}
					max={18}
					step={1}
					onChange={this.handleChange}
					onAfterChange={this.handleAfterChange}
				/>
			</div>
		);
	}
}
// export default SliderPathInput;


const mapStateToProps = state => ({
	pathAngle: state.heatmap.pathAngle,
});

const mapDispatchToProps = dispatch => bindActionCreators( {
	setHeatMapPathAngle,
	setBusPath,
}, dispatch );

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SliderPathInput);