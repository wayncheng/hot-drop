import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
	// setMarker, 
	// removeMarker, 
	getNewBus,
	sendNextBus,
} from '../../modules/picker';
import './Interface.scss';
import Overlay from './Overlay';
import Marker from './Marker';
import TargetRange from './Target/TargetRange';

class Interface extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount = () => {
		this.props.getNewBus();
		// this.props.sendNextBus(this.props.saveCount);
	}

	render() {
		return (
			<section id="interface" className="ui-container" >
				<Overlay/>
				<TargetRange/>
				<Marker/>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	// location: state.picker.location,
	// markerPlaced: state.picker.markerPlaced,
	// saveCount: state.picker.saveCount,
	...state.picker,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getNewBus,
	sendNextBus,
	// setMarker,
	// removeMarker,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Interface)