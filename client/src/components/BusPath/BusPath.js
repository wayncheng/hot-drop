import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './BusPath.scss';

const BusPath = props => {
	// let transformValue = `translate(-50%,-50%) rotateZ(${props.angle}+deg)`;

	// let lineStyle = {
	// 	transform: transformValue
	// }
	return (
		<div 
			className="bus-path" 
			style={{
				top: "50%",
				left: "50%",
				// transform: "translate(-50%,-50%) rotateZ(90deg)",
				transform: `translate(-50%,-50%) rotateZ(${props.bus.angle}deg)`,
			}}
		>
		</div>
	)
}

const mapStateToProps = state => ({
	bus: state.picker.bus,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	// getNewBus,
	// placeMarker,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BusPath)