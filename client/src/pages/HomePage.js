import React, { Component } from 'react';
import {
	Map,
	StatsPanel,
	NotificationCenter,
	// ModalTrigger,
	HelpTrigger,
	Guide,
	PageRoot
} from '../components';
// import API from '../utils/API';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUUID } from '../modules/picker';
// import address from 'address';
// const address = require('address');
// const extIP = require('external-ip');

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<PageRoot>
				{process.env.NODE_ENV !== 'production' && <StatsPanel />}

				<NotificationCenter />

				<Map />

				<HelpTrigger />

				<Guide />
			</PageRoot>
		);
	}
}
// export default HomePage;

const mapStateToProps = state => ({
	uuid: state.picker.uuid
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setUUID
		},
		dispatch
	);
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
