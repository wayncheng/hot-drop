import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
	openModal, 
	closeModal, 
	toggleModal 
} from '../../modules/modal';


class ModalTrigger extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	handleClick = e => {
		e.preventDefault();
		this.props.openModal('guide_modal');

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
			<ModalTrigger
				modal_id="guide_modal"
				modal_action="open"
				// style={{
				// 	position: 'fixed',
				// 	top: '1rem',
				// 	right: '1rem',
				// 	fontSize: '2rem',
				// 	zIndex: 9000,
				// 	color: '#ffffff',
				// 	cursor: 'pointer',
				// }}
			>

			<i 
				className="material-icons info-btn"
				// onClick={this.handleClick}
				
			>
						info
						{/* {this.props.guideVisible ? 'cancel' : 'info'} */}
			</i>
			</ModalTrigger>

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