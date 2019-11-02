import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import API from '../../utils/API';
import './DevSandbox.scss';
import { 
	PageRoot, 
	// BusPath, 
	// StaticMap,
} from '../../components';

class DevSandboxPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allPaths: []
		};
	}

	componentDidMount = () => {
		// API.getAllPaths().then((paths) => { this.setState({ allPaths: paths }); });
	};

	getCounts = (event) => {
		event.preventDefault();

		for (let i = 1; i <= 48; i++) {
			API.getMarkersByPathId(i).then((response) => {
				console.log(i, response.data.length);
			});
		}
	};

	handleFetch = (event) => {
		event.preventDefault();
		const url = event.target.getAttribute('data-url');
		console.log('url:', url);

		axios({
			method: 'GET',
			url: '/api'+url
		})
			.then((response) => {
				console.log('response:', response);
				return response;
			})
			.catch((error) => console.log('error', error));
	};

	render() {
		return (
			<PageRoot id="dev-sandbox-root">
				{/* <StaticMap>
					{this.state.allPaths.map((path) => {
						// if (path.id > 38) {
							return <BusPath key={path.id} override={path} />;
						// }
					})}
				</StaticMap> */}
				
				<button type="button" className="btn" onClick={this.getCounts}> Get Counts </button>
				<button onClick={this.handleFetch} url="/api/mark/all"> /mark/all </button>
				<button onClick={this.handleFetch} url="/api/mark/angle/20"> /mark/angle/20 </button>
				<button onClick={this.handleFetch} url="/api/mark/24"> /mark/24 </button>
				<p>POST /api/mark/save</p>

				{/* <button onClick={this.handleFetch} url="/api/____"> ____ </button> */}
			</PageRoot>
		);
	}
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DevSandboxPage);
