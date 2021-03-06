import React from 'react'
import "./StatsPanel.scss";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { } from '../../modules/picker';


const StatsPanel = props => {

	return (
		<aside className="stats-panel">
			<div className="panel-content">
				<ul>
					<li>Bus:</li>
					<li>{'id: ' + props.bus.id}</li>
					<li>{'angle: ' + props.bus.angle}</li>
				</ul>
				<ul>
					<li>Marker:</li>
					<li>{'x: ' + props.location.x}</li>
					<li>{'y: ' + props.location.y}</li>
					<li>{'placed: ' + props.markerPlaced}</li>
				</ul>
				<ul>
					<li>{'uuid: ' + props.uuid}</li>
					<li>{'save count: ' + props.saveCount}</li>
					<li>{'first time: ' + props.isFirstTime}</li>
				</ul>
				<ul>
					<li>Heatmap</li>
					<li>{'pathAngle: ' + props.pathAngle}</li>
					<li>{'pathID: ' + props.pathID}</li>
				</ul>
			</div>
			
			<i className="material-icons" >insert_chart</i>
		</aside>
	)
}

const mapStateToProps = state => ({
	// location: state.picker.location,
	...state.picker,
	...state.general,
	...state.heatmap,
})
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StatsPanel)