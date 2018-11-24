import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Menu.scss';
import {
	Modal,
	// ModalTrigger,
	CloseBtn,
} from '..'

const Menu = props => {

	return(
		// <Modal id="menu_modal" className="default-modal main-menu" rootClass="menu-modal-root">
		<Modal id="menu_modal" className="fullpage-modal main-menu" rootClass="menu-modal-root fullpage-modal-root">
			<div className="modal-body">
			<section className="menu-header">
				<h2 className="title">Fortnite Hot Drops</h2>
				{/* <h4 className="subtitle">by Wayne Cheng</h4> */}
			</section>
			<section className="menu-section">
				<ul>
					<li><Link to='/'>Drop Markers</Link></li>
					{process.env.NODE_ENV !== 'production' && (
						<li><Link to='/view'>Heat Maps</Link></li>
						)}
					<li> <a href="https://github.com/wayncheng/hot-drop">View on GitHub</a> </li>
				</ul>
			</section>
			<section className="menu-footer">
				<p>Created by Wayne Cheng</p>
				<ul>
					<li><a href="https://github.com/wayncheng">GitHub</a></li>
					<li><a href="https://www.instagram.com/wayncheng/">Instagram</a></li>
					<li><a href="https://twitter.com/wayncheng">Twitter</a></li>
					<li><a href="https://www.linkedin.com/in/wayncheng/">LinkedIn</a></li>
				</ul>
			</section>
		</div>
	<CloseBtn modal_id="menu_modal" top right />
			{/* <ModalTrigger className="close-btn" modal_id="menu_modal" modal_action="close">
				<i className="material-icons">cancel</i>
			</ModalTrigger> */}

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