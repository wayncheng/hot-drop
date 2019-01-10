import React, { Component } from 'react';
import { DropMap, HelpTrigger, Guide, PageRoot, IntroSlate } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet';
// import { } from '../modules/picker';

class HomePage extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }

	render() {
		return (
			<PageRoot>
				<Helmet title="Fortnite Drops - Where Would You Drop?" />
				<DropMap/>
				<HelpTrigger />
				{/* Modals */}
				<IntroSlate/>
				<Guide />
			</PageRoot>
		);
	}
}
// export default HomePage;

const mapStateToProps = state => ({
	// uuid: state.picker.uuid
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
