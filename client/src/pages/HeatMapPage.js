import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet';
import { getHeatMapMarkersByID } from '../modules/heatmap';
import { 
	StaticMap, 
	BusPath, 
	PageRoot, 
	HeatMapContainer, 
	SliderPathInput, 
	HeatMapPrefTrigger,
	HeatMapPrefModal,
} from '../components';
import API from '../utils/API';

class HeatMapPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount = () => {
		// const { path_id } = this.props.match.params;
		// console.log('path_id:', path_id);

		// if (path_id) {
		// 	this.props.getHeatMapMarkersByID(path_id)
		// }

		API.getAllPaths();
	};
	render() {
		// console.log('this.props.match.params.path_id:',this.props.match.params.path_id);
		return (
			<PageRoot className="heatmap-page">
				<Helmet title="Fortnite Drops - Heat Maps (Chapter 2)" />
				<StaticMap>
					{/* <HeatMapContainer /> */}
					{/* <HeatMapContainer pathID={this.props.match.params.path_id} /> */}
					<HeatMapContainer pathID={parseInt(this.props.match.params.path_id)} chapter="2"/>
					{this.props.bus.id >= 1 && (
						<BusPath />
					)}
				</StaticMap>
				<SliderPathInput />
				<HeatMapPrefTrigger/>
				<HeatMapPrefModal />
				{/* <DrawPathInput/> */}
			</PageRoot>
		);
	}
}
// export default HeatMapPage;
const mapStateToProps = state => ({ 
	bus: state.picker.bus,
});

const mapDispatchToProps = dispatch => bindActionCreators( {
	getHeatMapMarkersByID
}, dispatch );

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeatMapPage);
