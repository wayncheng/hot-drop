import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeMarker } from '../../modules/picker';


class Marker extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	handleRemoval = event => {
		event.stopPropagation();
		this.props.removeMarker();
	}

	render() {
		return (
			<div
				className="marker"
				style={{
					top: `${this.props.location.y * 100}%`,
					left: `${this.props.location.x * 100}%`,
				}}
				onClick={this.handleRemoval}
			>
				<i className="material-icons marker-icon"></i>
				{/* <i className="material-icons">location_on</i> */}
				{/* <i className="material-icons">my_location</i> */}
				{/* <i className="material-icons">location_searching</i> */}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	location: state.picker.location,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	removeMarker,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Marker)