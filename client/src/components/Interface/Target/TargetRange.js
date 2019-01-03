import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMarker } from '../../../modules/picker';
import './Target.scss';
import {
	// sendError,
	sendWarning
} from '../../Notifications/NotificationCenter';
// import AreaLand from './AreaLand';
// import AreaWater from './AreaWater';

class TargetRange extends Component {
	handleClick = event => {
		event.preventDefault();
		event.stopPropagation();
		let { target } = event;
		let isTarget = target.classList.contains('target');

		if (isTarget) {
			// Get map dimensions in px
			const { offsetWidth, offsetHeight } = document.getElementById('overlay');

			// Map Offset from top left corner of window (in order to determine mouse offset)
			const { offsetLeft, offsetTop } = document.getElementById( 'map-container' );

			// Location of Mouse Click on Map in relation to the top left corner of the window
			const x = event.pageX;
			const y = event.pageY;

			// Calculate Mouse Location (%) relative to the top-left corner of the Map (not window)
			const locationX = (100 * (x - offsetLeft)) / offsetWidth;
			const locationY = (100 * (y - offsetTop)) / offsetHeight;

			// Trim decimal
			const finalX = this.formatDecimal(locationX);
			const finalY = this.formatDecimal(locationY);
			// console.log('x,y (%):',finalX,finalY)

			// Place the marker via redux
			this.props.setMarker({
				x: finalX,
				y: finalY
			});
		} else {
			sendWarning('You must land on land.', null, 2000);
		}
	};

	formatDecimal = n => {
		let factor = 1000;
		let formatted = Math.floor(n * factor) / factor;
		return formatted;
	};

	render() {
		return (
			<div className="target-container target" onClick={this.handleClick}>
				{/* <AreaLand /> */}
			</div>
		);
	}
}
// export default TargetRange;

const mapStateToProps = state => ({
	// location: state.picker.location,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setMarker
		},
		dispatch
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TargetRange);
