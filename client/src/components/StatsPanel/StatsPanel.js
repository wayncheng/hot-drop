import React from 'react'
import "./StatsPanel.scss";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../../modules/picker';


const StatsPanel = props => {

	return(
		<aside className="stats-panel">
			<ul>
				<li>Bus:</li>
				<li>{'id: '+props.bus.id}</li>
				<li>{'angle: '+props.bus.angle}</li>
			</ul>
			<ul>
				<li>Marker:</li>
				<li>{'x: '+props.location.x}</li>
				<li>{'y: '+props.location.y}</li>
				<li>{'placed: '+props.markerPlaced}</li>
			</ul>
			<ul>
				<li>{'uuid: ' + props.uuid}</li>
			</ul>
		</aside>
	)
}

const mapStateToProps = state => ({
	// location: state.picker.location,
	...state.picker,
	...state.general
})
const mapDispatchToProps = dispatch => bindActionCreators({
	
}, dispatch)

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(StatsPanel)