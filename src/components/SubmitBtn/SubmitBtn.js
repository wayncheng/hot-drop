import React, { Component } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitPlacement } from '../../modules/picker';
import './SubmitBtn.scss';


class SubmitBtn extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.submitPlacement(this.props.bus,this.props.location)
	}
	

	render() {
		return (
			<button 
				id="submit" 
				className={ classNames('btn','submit-btn',{ disabled: !this.props.markerPlaced })} 
				onClick={this.handleSubmit}
			>
				Submit
			</button>
		)
	}
}

const mapStateToProps = state => ({
	location: state.picker.location,
	bus: state.picker.bus,
	markerPlaced: state.picker.markerPlaced,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	submitPlacement
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SubmitBtn)