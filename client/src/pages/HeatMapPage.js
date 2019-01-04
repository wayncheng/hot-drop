import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHeatMapMarkersByID } from '../modules/heatmap';
import { 
	StaticMap, 
	BusPath, 
	PageRoot, 
	HeatMapContainer, 
	// DrawPathInput, 
	SliderPathInput 
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
		return (
			<PageRoot className="heatmap-page">
				<StaticMap>
					{/* <HeatMapContainer /> */}
					{/* <HeatMapContainer pathID={this.props.match.params.path_id} /> */}
					<HeatMapContainer pathID={parseInt(this.props.match.params.path_id)} />
					{this.props.bus.id >= 1 && (
						<BusPath />
					)}
				</StaticMap>
				<SliderPathInput />
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
