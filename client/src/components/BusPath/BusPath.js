import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './BusPath.scss';

const BusPath = props => {
	// let transformValue = `translate(-50%,-50%) rotateZ(${props.angle}+deg)`;

	// let lineStyle = {
	// 	transform: transformValue
	// }

	let {bus} = props;

	if (props.override){
		bus = props.override
	}

	return (
		<div 
			className="bus-path"
			id={"bus-path-"+bus.id}
			style={{
				top:  bus.y +"%",
				left: bus.x +"%",
				transform: `translate(-50%,-50%) rotateZ(${bus.angle}deg)`,
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