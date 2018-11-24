import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	Modal,
	ModalTrigger,
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
				{/* <section className="modal-header"> */}
					<h2 className="title">How it Works</h2>
					{/* <h4 className="subtitle">by Wayne Cheng</h4> */}
				{/* </section> */}
				{/* <section className="modal-body"> */}
					<ol>
						<li>Click on the map to place your marker.</li>
						<li> To <em>change</em> marker placement, just click on the new location. </li>
						<li> Confirm the marker location by either clicking on the marker or clicking the submit button.{' '} </li>
						<li>Once you have confirmed, you're all set!</li>
						<li> A new bus will appear and just rinse and repeat however many times you'd like. The more the better! </li>
					</ol>
				{/* </section> */}
				{/* <section className="modal-footer"> */}
					<ModalTrigger
						className='close-modal-trigger end-intro start-btn'
						modal_id='intro_slate'
						modal_action="close"
					>
						Begin
					</ModalTrigger>
			{/* </section> */}
			</div>
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
