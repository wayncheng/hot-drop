import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { placeMarker, removeMarker, getNewBus } from '../../modules/picker';

class Overlay extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	// componentDidMount = () => {
	// 	this.props.getNewBus();
	// }
	
	formatDecimal = n => {
		let factor = 1000;
		let formatted = Math.floor(n * factor) / factor;
		return formatted;
	}

	handlePlacement = event => {
		event.preventDefault();

		// Get map dimensions in px
		const { clientWidth , clientHeight } = document.getElementById('overlay');

		// Map Offset from top left corner of window (in order to determine mouse offset)
		const { offsetLeft , offsetTop } = document.getElementById('container');

		// Location of Mouse Click on Map in relation to the top left corner of the window
		const { clientX, clientY } = event;
		
		// Calculate Mouse Location (%) relative to the top-left corner of the Map (not window)
		const locationX = 100 * (clientX - offsetLeft) / clientWidth;
		const locationY = 100 * (clientY - offsetTop) / clientHeight;
		
		// Trim decimal
		const finalX = this.formatDecimal(locationX);
		const finalY = this.formatDecimal(locationY);
		// console.log('x,y (%):',finalX,finalY)

		// Place the marker via redux
		this.props.placeMarker({
			x: finalX,
			y: finalY,
		})
	}

	

	render() {
		return (
			<div
				id="overlay"
				className="overlay"
				onMouseDown={this.handlePlacement}
			>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	// location: state.picker.location,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getNewBus,
	placeMarker,
	removeMarker,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Overlay)