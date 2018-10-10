import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModalTrigger from './ModalTrigger';
import { openModal } from '../../modules/modal';


class HelpTrigger extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	handleClick = e => {
		e.preventDefault();
		this.props.openModal('guide_modal');
	}

	render(){
		let display = 'initial';
		if (this.props.allModals.guide_modal) {
			display = 'none';
		}

		return(
			<ModalTrigger
				modal_id="guide_modal"
				modal_action="open"
				style={{ display: display }}
			>
				<i className="material-icons info-btn" > help </i>
			</ModalTrigger>

		)
	}
}

const mapStateToProps = state => ({
	allModals: state.modal.allModals,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	openModal,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HelpTrigger)