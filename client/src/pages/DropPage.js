import React, {Component} from 'react';
import {DropMap, HelpTrigger, Guide, PageRoot, IntroSlate} from '../components';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {extractPathIdFromUrl} from '../modules/general';

class DropPage extends Component {
	componentDidMount = () => {
		const {match, history} = this.props;
		const pid = this.props.extractPathIdFromUrl(history,match);
		console.log('pid:', pid);
	};

	render() {
		return (
			<PageRoot>
				<Helmet title='Fortnite Drops - Where Would You Drop? (Chapter 2)' />
				<DropMap />
				<HelpTrigger />
				<IntroSlate />
				<Guide />
			</PageRoot>
		);
	}
}
// export default DropPage;

const mapStateToProps = state => ({
	// uuid: state.picker.uuid
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			extractPathIdFromUrl,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(DropPage);
