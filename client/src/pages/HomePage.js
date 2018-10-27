import React, { Component } from 'react';
import {
	Map,
	HelpTrigger,
	Guide,
	PageRoot
} from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { } from '../modules/picker';

class HomePage extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }

	render() {
		return (
			<PageRoot>

				<Map />

				<HelpTrigger />
				<Guide />

			</PageRoot>
		);
	}
}
// export default HomePage;

const mapStateToProps = state => ({
	// uuid: state.picker.uuid
});
const mapDispatchToProps = dispatch => bindActionCreators( {}, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )(
	HomePage
);
