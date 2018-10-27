import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Menu.scss';
import {
	Modal,
	ModalTrigger,
} from '..'

const Menu = props => {

	return(
		<Modal id="menu_modal" className="default-modal main-menu">
			<section className="menu-header">
				<h2 className="title">Fortnite Hot Drops</h2>
				{/* <h4 className="subtitle">by Wayne Cheng</h4> */}
			</section>
			<section className="menu-section">
				<ul>
					<li><Link to='/'>Drop Markers</Link></li>
					<li><Link to='/view'>Heat Maps</Link></li>
					<li> <a href="#">View on GitHub</a> </li>
				</ul>
			</section>
			<section className="menu-footer">
				<p>by Wayne Cheng</p>
				<ul>
					<li><a href="#">GitHub</a></li>
					<li><a href="#">Instagram</a></li>
					<li><a href="#">LinkedIn</a></li>
				</ul>
			</section>

			<ModalTrigger className="close-btn" modal_id="menu_modal" modal_action="close">
				<i className="material-icons">cancel</i>
			</ModalTrigger>

		</Modal>
	)
}
const mapStateToProps = state => ({
	// allModals: state.modal.allModals,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	// hideMenu,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Menu)