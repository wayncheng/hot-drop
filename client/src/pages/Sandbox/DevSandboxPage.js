import React, { Component } from 'react';
import './DevSandbox.scss';
import {
	PageRoot,
} from '../../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DevSandboxPage extends Component {

	render() {
		return (
			<PageRoot id="dev-sandbox-root">
				<section>
					<div className="marker mk-1"></div>
					<div className="mk-2"></div>
					<div className="mk-3"></div>
				</section>
			</PageRoot>
		);
	}
}
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => bindActionCreators( {}, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )(
	DevSandboxPage
);
