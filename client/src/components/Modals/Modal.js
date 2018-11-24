import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { openModal, closeModal } from '../../modules/modal'
import Modal from 'react-modal'
import './Modal.scss'


class GeneralModal extends Component {
	constructor(props){
		super(props)
		this.state = {
			isOpen: false, // closed by default
		}
	}

componentDidMount = () => {
	
}

componentWillReceiveProps = (nextProps) => {
	let {id} = this.props;

	if (nextProps.allModals[id] !== this.props.allModals[id]){
		const newState = nextProps.allModals[id];

		// Manually request to close modal when isOpen goes from true to false.
		// - fixes bug where the window closes but overlay remains
		if (newState === false) {
			this.removeOverlayEffects()
		}

		this.setState({
			isOpen: newState
		})
	}
}

// afterOpenModal ============================================
afterOpenModal = () => {
	// console.log('this.overlayRef:',this.overlayRef)
	// console.log('this.contentRef:',this.contentRef)


	
	// * Listen for ESC key -----------------
	// ? Possibly deprecated. Using react-modal props instead.
	// TODO: Fix ESC key shenanigans
	
	document.addEventListener('keyup', event => {
		event.preventDefault();
		let code = event.charCode || event.keyCode;

		// Escape Key charCode is 27
		if (code === 27) {
			this.closeModal()
		}
	})

	// ! Most likely deprecated. Using react-modal props instead.
	// * Set Focus on Modal Window --------------
	//   - Prevents unwanted interactions with the modal's trigger
	//     For example, by default, after you click on a button to 
	//     open the modal then press space, it will essentially 
	//     click the button again since it is still focused (which 
	//     makes the window close, but the modal overlay remains).
	//     Rather than fighting those side effects, focusing on
	//     the modal window should effectively prevent possible errors
	// const modalWindowEl = this.contentRef;
	// console.log('modalWindowEl:',modalWindowEl)
	// modalWindowEl.focus()	
	
};


// closeModal ================================================
closeModal = () => {

	// Remove blur to our main app
	// this.removeOverlayEffects()

	// Send new state to redux which will sent back and applied here via cWRP
	this.props.closeModal(this.props.id)

};

// Overlay Effect ==================================
// ? instead of manually toggling class on #root, class is toggled on <html> and overlay effects are applied using good old-fashioned CSS.
// ? ... BUT, this removes the ability to apply different styling to #root for different modals. However, custom #root styling per modal was never implemented in the first place. This is mostly a warning to future me if I decide to add this feature
// ! maybe deprecated
//--------------------------------------------------
	addOverlayEffects = () => {
		document.querySelector(this.props.rootSelector)
			.classList.add("blur-for-modal");
	}

	removeOverlayEffects = () => {
		document.querySelector(this.props.rootSelector)
			.classList.remove("blur-for-modal");
	}

	
	selectParent = () => document.getElementById('outer-space')

// RENDER ==================================================
	render(){
		return(
			<Modal
				{...this.props}
				isOpen={this.state.isOpen}
				contentLabel={this.props.contentLabel}
				modal_id={this.props.id}
				parentSelector={this.selectParent}

				// Class Names ------------------
				className={{
					base: classNames("w-modal",this.props.className),
					afterOpen: "w-modal_after-open",
					beforeClose: "w-modal_before-close"
				}}
				overlayClassName={{
					base: classNames("w-modal-overlay",this.props.overlayClass),
					afterOpen: "w-modal-overlay_after-open",
					beforeClose: "w-modal-overlay_before-close"
				}}
				portalClassName={classNames('w-modal-root',this.props.rootClass)}
				htmlOpenClassName='w-modal_is-open'
				// htmlOpenClassName={classNames('w-modal_is-open',this.props.htmlOpenClass)}

				// Handlers -----------------------
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.closeModal}

				// Available Refs -----------------
				overlayRef={node => this.overlayRef = node}
				contentRef={node => this.contentRef = node}

				// Behavior Options
				shouldCloseOnEsc={false} // if ESC key closes modal
				shouldFocusAfterRender={true} // if the modal should be focused after render
				shouldCloseOnOverlayClick={true} // if the overlay should close the modal
				shouldReturnFocusAfterClose={true} // if the modal should restore focus to the element that had focus prior to its display.
			>

				{this.props.children}

			</Modal>
		)
	}
}


////////////////////////////////////////////////////
GeneralModal.defaultProps = {
	isOpen: false,
	rootSelector: '#root',
	// rootClassName: 'w-modal-root',
	// htmlOpenClassName: 'w-modal_is-open',
	// className: {
	// 	base: "w-modal",
	// 	afterOpen: "w-modal_after-open",
	// 	beforeClose: "w-modal_before-close"
	// },
	// overlayClassName: {
	// 	base: "w-modal-overlay",
	// 	afterOpen: "w-modal-overlay_after-open",
	// 	beforeClose: "w-modal-overlay_before-close"
	// },

	rootClass: '',
	overlayClass: '',
}
GeneralModal.propTypes = {
	id: PropTypes.string.isRequired,
}

// Set Modal root
Modal.setAppElement("#root");


// Redux ==================================================
const mapStateToProps = state => ({
	allModals: state.modal.allModals,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	openModal,
	closeModal,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(GeneralModal)
