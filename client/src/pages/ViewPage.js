import React, { Component } from 'react';
import {
	StaticMap,
	StatsPanel,
	NotificationCenter,
	PointsDisplay,
	BusPath,
} from '../components';
import API from '../utils/API';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUUID, setBusPath } from '../modules/picker';


class ViewPage extends Component {
	constructor(props){
		super(props);
		this.state={
			markers: [],
		}
	}

	componentDidMount = () => {
		const { path_id } = this.props.match.params; 
		console.log('path_id:',path_id)

		// Set Bus Path to the path we are currently viewing
		this.props.setBusPath(path_id)

		// Query DB for markers with matching path_id
		API.getMarkersByPathId(path_id).then(res => {
			const data = res.data;
			console.log('data:',data)
			
			// Set markers array in state equal to data returned
			this.setState({
				markers: data
			})
		})


		// API.getUUID().then(res => {
		// 	this.props.setUUID(res)
		// });
		
	}


	render() {
		return (
			<div className="page-root">
				<main>
					
					<StaticMap>
						<PointsDisplay data={this.state.markers}/>
						<BusPath/>
					</StaticMap>

					

					{(process.env.NODE_ENV !== 'production') && <StatsPanel />}
					<NotificationCenter />
				</main>
			</div>
		);
	}
}
// export default ViewPage;

const mapStateToProps = state => ({
	uuid: state.picker.uuid,
})
const mapDispatchToProps = dispatch => bindActionCreators({
	setUUID,
	setBusPath,
}, dispatch)
export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(ViewPage)