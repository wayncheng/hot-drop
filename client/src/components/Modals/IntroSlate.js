import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
	Modal,
	ModalTrigger,
	// CloseBtn
} from '..';
import {flagVisited} from '../../modules/general';
import {openModal} from '../../modules/modal';

class IntroSlate extends Component {
	componentDidMount = () => {
		const hasVisited = localStorage.getItem('hasVisited');

		// For first time visitors, open the intro modal
		if (hasVisited !== 'true') {
			this.props.openModal('intro_slate');
		}
	};

	render = () => {
		return (
			<Modal
				id='intro_slate'
				className='default-modal intro-slate'
				rootClass='intro-slate-modal-root default-modal-root'
				initialOpen={this.props.introSlateOpen}
				pre_close={this.props.flagVisited}
			>
				<div className='modal-body'>
					<section className='modal-header'>
						<p className='eyebrow'>Getting Started</p>
						<h2 className='headline'>Where we Hypothetically Droppin?</h2>
						<h3 className='subheadline'>
							To start, all you need to do is place a few markers just like you would in the game. Here's what will
							happen...
						</h3>
					</section>
					<section className='modal-content'>
						<ol className='big-list'>
							<li>Random bus path is displayed</li>
							<li>
								<em>Place a marker</em> where you would drop
							</li>
							<li>
								<em>Submit your drop</em> (by clicking marker)
							</li>
							<li>Rinse and Repeat!</li>
						</ol>
					</section>
				</div>
				<div className='modal-footer'>
					<ModalTrigger
						className='close-modal-trigger end-intro start-btn'
						modal_id='intro_slate'
						modal_action='close'
						post_action={this.props.flagVisited}
					>
						Start
					</ModalTrigger>
				</div>
			</Modal>
		);
	};
}
const mapStateToProps = state => ({
	allModals      : state.modal.allModals,
	introSlateOpen : state.modal.allModals.intro_slate,
	hasVisited     : state.general.hasVisited,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			flagVisited,
			openModal,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(IntroSlate);
