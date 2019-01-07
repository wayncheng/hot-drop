import React, { Component } from 'react';
import './DevSandbox.scss';
import { PageRoot, BusPath, StaticMap } from '../../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import API from '../../utils/API';

class DevSandboxPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allPaths: []
		};
	}

	componentDidMount = () => {
		this.getAllPaths();
	};

	getAllPaths = () => {
		API.getAllPaths().then((paths) => {
			this.setState({
				allPaths: paths
			});
		});
	};

	render() {
		return (
			<PageRoot id="dev-sandbox-root">
				<StaticMap>
					{this.state.allPaths.map((path) => {
						// if (path.id > 38) {
							return <BusPath key={path.id} override={path} />;
						// }
					})}
				</StaticMap>
			</PageRoot>
		);
	}
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DevSandboxPage);
