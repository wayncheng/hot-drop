import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
	openModal, 
	closeModal, 
	toggleModal 
} from '../../modules/modal';
import classNames from 'classnames';


class ModalTrigger extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	handleClick = event => {
		event.preventDefault();
		
		// let modal_id = event.target.getAttribute('modal_id');
		// let modal_action = event.target.getAttribute('modal_action');
		
		let {modal_id,modal_action} = this.props;
		console.log('modal_id:',modal_id)
		console.log('modal_action:',modal_action)

		if (modal_action === 'close'){
			this.props.closeModal(modal_id)
		}
		else if (modal_action === 'open'){
			this.props.openModal(modal_id);
		}
		else {
			this.props.toggleModal(modal_id)
		}

		// // If guide is visible, click should hide
		// if (this.props.allModal['guide-modal']){
		// 	this.props.toggleModal('guide-modal')
		// }
		// // If guide is hidden, click should show
		// else {
		// 	this.props.showModal('guide-modal')
		// }

	}

	render(){
		return(
			<button
				// {...this.props}
				className={classNames("modal-trigger","default-trigger",this.props.className)}
				onClick={this.handleClick}
				id={this.props.id}
				style={this.props.style}
				modal_id={this.props.modal_id}
				modal_action={this.props.modal_action || 'open'}
			>
						{this.props.children}
						{/* {this.props.guideVisible ? 'cancel' : 'info'} */}
			</button>
		)
	}
}

const mapStateToProps = state => ({
	// ...state.general,
	...state.modal,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	// showGuide,
	// hideGuide,
	openModal,
	closeModal,
	toggleModal,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ModalTrigger)