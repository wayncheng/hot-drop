import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	Modal,
	// ModalTrigger,
	CloseBtn,
} from '..'

const Guide = props => {

	return(
		<Modal id="guide_modal" className="default-modal" rootClass="guide-modal-root">

			<section className="guide-section">
				<h3>How to Choose your Drop Location:</h3>
				<ol>
					<li>Click on the map to place your marker.</li>
					<li>To <em>change</em> marker placement, just click on the new location.</li>
					<li>Confirm the marker location by either clicking on the marker or clicking the submit button. </li>
					<li>Once you have confirmed, you're all set!</li>
					<li>A new bus will appear and just rinse and repeat however many times you'd like. The more the better!</li>
					{/* <h4>More Contributions &rarr; Better Results</h4> */}
				</ol>
			</section>

			{/* <ModalTrigger className="modal-trigger close-btn" modal_id="guide_modal" modal_action="close">
				<i className="material-icons">cancel</i>
			</ModalTrigger> */}
			<CloseBtn modal_id="guide_modal" top left />

		</Modal>
	)
}
const mapStateToProps = state => ({
	// allModals: state.modal.allModals,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	// hideGuide,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Guide)