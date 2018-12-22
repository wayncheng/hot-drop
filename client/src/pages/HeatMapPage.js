import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { setBusPath } from '../modules/picker';
import { StaticMap, BusPath, PageRoot, HeatMapContainer } from '../components';


class HeatMapPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount = () => {
		const { path_id } = this.props.match.params;
		console.log('path_id:', path_id);
	};
	render() {
		return (
			<PageRoot>
				<StaticMap>
					<HeatMapContainer pathID={parseInt(this.props.match.params.path_id)}/>
					<BusPath />
				</StaticMap>
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