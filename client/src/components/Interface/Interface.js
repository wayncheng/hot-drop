import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
	// setMarker, 
	// removeMarker, 
	getNewBus 
} from '../../modules/picker';
import './Interface.scss';
import Overlay from './Overlay';
import Marker from './Marker';
import TargetRange from './Target/TargetRange';
import SubmitBtn from './SubmitBtn';

class Interface extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount = () => {
		this.props.getNewBus();
	}


	render() {
		return (
			<section 
				id="interface" 
				className="ui-container" 
				// onKeyDown={this.handleSubmit}
			>
				<Overlay/>
				<TargetRange/>
				<Marker/>
				<SubmitBtn/>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	// location: state.picker.location,
	markerPlaced: state.picker.markerPlaced,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getNewBus,
	// setMarker,
	// removeMarker,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Interface)