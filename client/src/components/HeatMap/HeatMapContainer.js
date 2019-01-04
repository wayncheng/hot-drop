import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBusPath } from '../../modules/picker';
import { getHeatMapMarkersByID } from '../../modules/heatmap';
import {
	IndividualsHeatMap,
	HeatMap,
} from '../index';

class HeatMapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: []
		};
	}

	componentDidMount = () => {
		const { pathID } = this.props;

		if (pathID) {
			// Set Bus Path to the path we are currently viewing
			this.props.setBusPath(pathID);

			// Query DB for markers with matching pathID
			this.props.getHeatMapMarkersByID(pathID);

			// API.getMarkersByPathId(pathID).then(res => {
			// 	const data = res.data;
			// 	// console.log('data:', data);
			// 	const formattedData = data.map((point) => {
			// 		return {
			// 			x: point.mark_x,
			// 			y: point.mark_y
			// 		};
			// 	});
			// 	// Set markers array in state equal to data returned
			// 	this.setState({ markers: formattedData });
			// });
		}
	};

	render() {
		// console.log('markers:',this.props.markers);
		return (
			<div id="heatmap-container" className="heatmap-container" data-path-id={this.props.bus.id}>
				{/* <HeatMap data={this.state.markers}/> */}
				<HeatMap data={this.props.markers}/>
				{/* <IndividualsHeatMap data={this.props.markers} /> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	markers: state.heatmap.markers,
	bus: state.picker.bus,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setBusPath,
			getHeatMapMarkersByID
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(HeatMapContainer);

HeatMapContainer.propTypes = {
	pathID: PropTypes.number
};
