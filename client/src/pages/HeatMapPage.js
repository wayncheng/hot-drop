import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet';
import { getHeatMapMarkersByID } from '../modules/heatmap';
import { extractPathIdFromUrl } from '../modules/general';

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
		this.state = {
			path_id: '0',
		};
	}
	componentDidMount = () => {
		API.getAllPaths();
		
		// let {path_id} = this.props.match.params;
		// if (path_id === undefined){
		// 	path_id = '0';
		// 	const queryFull = this.props.location.search;
		// 	const queryPathRegex = /[?&]p=[\w]+[&?#]?/g;
		// 	const matches = queryFull.match(queryPathRegex);
		// 	if (matches){
		// 		path_id = matches[0].slice(3).replace(/\W/g,'');
		// 	}
		// }
		// console.log('path_id:',path_id);
		
		// this.setState({ path_id })

	};
	render = () => {

		// let {path_id} = this.props.match.params;
		// if (path_id === undefined){
		// 	path_id = '0';
		// 	const queryFull = this.props.location.search;
		// 	const queryPathRegex = /[?&]p=[\w]+[&?#]?/g;
		// 	const matches = queryFull.match(queryPathRegex);
		// 	if (matches){
		// 		path_id = matches[0].slice(3).replace(/\W/g,'');
		// 	}
		// }
		const path_id = this.props.extractPathIdFromUrl(this.props.history,this.props.match)
		console.log('path_id:',path_id);
		
		return (
			<PageRoot className="heatmap-page">
				<Helmet title="Fortnite Drops - Heat Maps (Chapter 2)" />
				<StaticMap>
					{/* <HeatMapContainer /> */}
					{/* <HeatMapContainer pathID={this.props.match.params.path_id} /> */}
					{/* <HeatMapContainer pathID={parseInt(this.props.match.params.path_id)} chapter="2"/> */}
					{/* <HeatMapContainer pathID={parseInt(this.state.path_id)} chapter="2"/> */}
					<HeatMapContainer pathID={parseInt(path_id)} chapter="2"/>
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
	getHeatMapMarkersByID,
	extractPathIdFromUrl,
}, dispatch );

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeatMapPage);
