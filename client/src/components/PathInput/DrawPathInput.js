import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './DrawPathInput.scss';
import {setHeatMapPathAngle} from '../../modules/heatmap';
import {setBusPath} from '../../modules/picker';
import API from '../../utils/API';

class DrawPathInput extends Component {
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

	handleMouseDown = (event) => {
		event.preventDefault();
		const loc = this.measureLocation(event);
		console.log('... down',loc);

		this.setState({
			downX: loc.x,
			downY: loc.y,
		})
	};
	handleMouseUp = (event) => {
		event.preventDefault();
		const loc = this.measureLocation(event);
		console.log('..... up', loc);
		const {downX,downY} = this.state;

		const angle = this.calculateAngle(downX,downY,loc.x,loc.y)
		console.log('angle:',angle);

		if(!Number.isNaN(angle)){	
			this.props.setHeatMapPathAngle(angle)
			
			API.getPathByAngle(angle).then(response => {
				const pathID = response.data.id;
				this.props.setBusPath(pathID)
			})
		}
	};
	
	calculateAngle = (x1,y1,x2,y2) => {
		const deltaX = x2 - x1;
		const deltaY = y2 - y1;
		const slope = deltaY / deltaX;
		// console.log('deltas:',deltaX,deltaY);
		// console.log('slope:',slope);
		
		const angleRad = Math.atan(slope);
		let angleDeg = angleRad * 180 / Math.PI;
		
		if (deltaX > 0) {
			angleDeg += 180
		}
		else if (deltaX < 0 && deltaY > 0) {
			angleDeg += 360;
		}
		console.log('angleDeg:',angleDeg);

		const roundedAngle = Math.round(angleDeg/20)*20;
		if (roundedAngle === 0){
			return 360
		} else {
			return roundedAngle
		}
	}

	measureLocation = (event) => {
		const {clientX,clientY} = event;
		return {
			x: clientX,
			y: clientY,
		}
	}

	render() {
		return (
			<div className="draw-input-area" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
				{/* <div id="draw-area" className="draw-input-area"></div> */}
			</div>
		);
	}
}
// export default DrawPathInput;


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
)(DrawPathInput);