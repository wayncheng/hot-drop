import React from 'react'
import "./StatsPanel.scss";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../../modules/picker';

const StatsPanel = props => {

	return(
		<div className="stats-panel">
			<ul>
				<li>Bus:</li>
				<li>{'angle: '+props.bus.angle}</li>
				<li>{'id: '+props.bus.id}</li>
			</ul>
			<ul>
				<li>Marker:</li>
				<li>{'x: '+props.location.x}</li>
				<li>{'y: '+props.location.y}</li>
				<li>{'markerPlaced: '+props.markerPlaced}</li>
			</ul>
		</div>
	)
}

const mapStateToProps = state => ({
	// location: state.picker.location,
	...state.picker
})
const mapDispatchToProps = dispatch => bindActionCreators({
	
}, dispatch)

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(StatsPanel)