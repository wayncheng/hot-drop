import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	Modal,
	// ModalTrigger,
	CloseBtn,
	HeatMapPrefForm,
} from '../'

const HeatMapPrefModal = props => {

	return(
		<Modal id="heatmap_pref_modal" className="default-modal" rootClass="top-left-modal-root heatmap-pref-modal-root">

			<h3 className="modal-title">Heat Map Preferences</h3>
			<section className="form-section">
				<HeatMapPrefForm/>

			</section>
			<CloseBtn modal_id="heatmap_pref_modal" top left />

		</Modal>
	)
}
const mapStateToProps = state => ({
	// allModals: state.modal.allModals,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	// hideHeatMapPrefModal,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HeatMapPrefModal)