import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeMarker, submitPlacement } from '../../modules/picker';


class Marker extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	
	handleConfirmation = event => {
		event.stopPropagation();
		
		// Submit the Marker Location to be saved in database according to path_id
		this.props.submitPlacement(
			this.props.bus.id,
			this.props.location
		)
	}
	
	// handleRemoval = event => {
	// 	event.stopPropagation();
	// 	this.props.removeMarker();
	// }

	render() {
		return (
			<div
				className="marker"
				style={{
					top: `${this.props.location.y}%`,
					left: `${this.props.location.x}%`,
				}}
				onClick={this.handleConfirmation}
			>
				{/* <i className="material-icons marker-icon"></i> */}
			</div>
			// <div className="marker-container">
				// <div className="marker"> </div>
			// </div>
		)
	}
}

const mapStateToProps = state => ({
	...state.picker
})

const mapDispatchToProps = dispatch => bindActionCreators({
	removeMarker,
	submitPlacement,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Marker)