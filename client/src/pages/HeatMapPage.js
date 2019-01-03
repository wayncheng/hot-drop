import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { setBusPath } from '../modules/picker';
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
		const { path_id } = this.props.match.params;
		console.log('path_id:', path_id);

		API.getAllPaths();
	};
	render() {
		return (
			<PageRoot className="heatmap-page">
				<StaticMap>
					<HeatMapContainer pathID={parseInt(this.props.match.params.path_id)} />
					<BusPath />
				</StaticMap>
				<SliderPathInput />
				{/* <DrawPathInput/> */}
			</PageRoot>
		);
	}
}
export default HeatMapPage;
// const mapStateToProps = state => ({ });

// const mapDispatchToProps = dispatch => bindActionCreators( {
// 	setBusPath
// }, dispatch );

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(HeatMapPage);
