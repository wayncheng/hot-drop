import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import API from '../../utils/API';
import HeatMap from './HeatMap';
import { setBusPath } from '../../modules/picker';


class HeatMapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: []
		};

	}

	componentDidMount = () => {
		const {pathID} = this.props;

		// Set Bus Path to the path we are currently viewing
		this.props.setBusPath(pathID);

		// Query DB for markers with matching pathID
		API.getMarkersByPathId(pathID).then(res => {
			const data = res.data;
			// console.log('data:', data);
			const formattedData = data.map((point) => {
				return {
					x: point.mark_x,
					y: point.mark_y
				};
			});
			// Set markers array in state equal to data returned
			this.setState({ markers: formattedData });
		});
	};

	render() {
		return (
			<div id="heatmap-container" className="heatmap-container">
				<HeatMap data={this.state.markers}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({ 

});

const mapDispatchToProps = dispatch => bindActionCreators( {
	setBusPath
}, dispatch );

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeatMapContainer);

HeatMapContainer.propTypes = {
	pathID: PropTypes.number,
}