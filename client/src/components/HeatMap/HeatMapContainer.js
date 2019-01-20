import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBusPath } from '../../modules/picker';
import { getHeatMapMarkersByID, setColors } from '../../modules/heatmap';
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
		let { pathID,colorCold,colorHot } = this.props;

		if (pathID) {
			// Set Bus Path to the path we are currently viewing
			this.props.setBusPath(pathID);

			// Query DB for markers with matching pathID
			this.props.getHeatMapMarkersByID(pathID);
		}

		const localCold = localStorage.getItem('colorCold')
		const localHot = localStorage.getItem('colorHot')
		if (localCold){ colorCold = localCold }
		if (localHot){ colorHot = localHot }
		
		this.props.setColors(colorCold,colorHot);
	};


	componentDidUpdate = (prevProps, prevState, snapshot) => {
		if (prevProps.markers !== this.props.markers) {
			const formatted = this.props.markers.map((marker) => {
				return {
					x: marker.x,
					y: 100 - marker.y
					//* IMPORTANT to mirror the y values since our data is measured from top left, but chart uses bottom left as origin.
				};
			});

			this.setState({
				data: formatted,
				totalCount: formatted.length
			});
		}
	};

	render() {
		// console.log('markers:',this.props.markers);
		return (
			<div id="heatmap-container" className="heatmap-container" data-path-id={this.props.bus.id}>
				{this.props.showingHexbin && (
					<HeatMap 
						data={this.state.data}
						colors={[this.props.colorCold,this.props.colorHot]}
					/>
				)}

				{this.props.showingIndividuals && (
					<IndividualsHeatMap data={this.props.markers} />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	markers: state.heatmap.markers,
	bus: state.picker.bus,
	colorCold: state.heatmap.colorCold,
	colorHot: state.heatmap.colorHot,
	showingIndividuals: state.heatmap.showingIndividuals,
	showingHexbin: state.heatmap.showingHexbin,
});

const mapDispatchToProps = (dispatch) => bindActionCreators( {
	setBusPath,
	getHeatMapMarkersByID,
	setColors,
}, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(HeatMapContainer);

HeatMapContainer.propTypes = {
	pathID: PropTypes.number
};
