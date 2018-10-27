import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ModalTrigger from '../Modals/ModalTrigger';
import { openModal } from '../../modules/modal';


class MenuBtn extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	handleClick = e => {
		e.preventDefault();
		this.props.openModal('menu_modal');
	}

	render(){
		let display;
		if (this.props.allModals.menu) {
			display = 'none';
		}

		return(
			<ModalTrigger
				modal_id="menu_modal"
				modal_action="open"
				style={{ display: display }}
				className="menu-btn"
			>
				<i className="material-icons info-btn" > menu </i>
				{/* <span>Menu</span> */}
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
)(MenuBtn)