import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet';
import { DropMap, HelpTrigger, Guide, PageRoot, IntroSlate } from '../../components';
// import { } from '../modules/picker';

class Chapter1DropPage extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }

	componentDidMount = () => {
		// document.querySelector('html').classList.add('ch1');
	}

	render() {
		return (
			<PageRoot>
				<Helmet title="Fortnite Drops - Where Would You Drop? - Chapter 1" />
				<DropMap chapter="1"/>
				<HelpTrigger />
				{/* Modals */}
				<IntroSlate/>
				<Guide />
			</PageRoot>
		);
	}
}
// export default Chapter1DropPage;

const mapStateToProps = state => ({
	// uuid: state.picker.uuid
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chapter1DropPage);
