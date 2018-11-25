import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	Modal,
	ModalTrigger
	// CloseBtn
} from '..';

const IntroSlate = (props) => {
	return (
		// <Modal id="menu_modal" className="default-modal main-menu" rootClass="menu-modal-root">
		<Modal
			id="intro_slate"
			className="default-modal intro-slate"
			rootClass="intro-slate-modal-root default-modal-root"
			initialOpen={true}
		>
			<div className="modal-body">
				<section className="modal-header">
					<p className="eyebrow">Submit Drop Spots</p>
					<h2 className="headline">
						Where we Hypothetically Droppin'?
					</h2>
					<h3 className="subheadline">
						To contribute, all you need to do is place a few markers just like you would in the game. Here's what will happen...
					</h3>
				</section>
				<section className="modal-content">
					<ol className="big-list">
						<li>Random bus is shown</li>
						<li>Place your marker</li>
						<li>Confirm placement</li>
						<li>That's it! Just rinse and repeat with the next bus.</li>
					</ol>
					{/* <p className="modal-copy">
						A new bus will appear and just rinse and repeat however many times you'd like. The more the better!
					</p> */}
				</section>
			</div>
			<ModalTrigger
				className="close-modal-trigger end-intro start-btn"
				modal_id="intro_slate"
				modal_action="close"
			>
				Start
			</ModalTrigger>
			{/* <CloseBtn modal_id="intro_slate" top right /> */}
			{/* <ModalTrigger className="close-btn" modal_id="menu_modal" modal_action="close">
				<i className="material-icons">cancel</i>
			</ModalTrigger> */}
		</Modal>
	);
};
const mapStateToProps = (state) => ({
	// allModals: state.modal.allModals,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			// hideIntroSlate,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(IntroSlate);
