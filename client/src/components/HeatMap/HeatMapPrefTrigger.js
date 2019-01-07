import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {ModalTrigger} from '../';
import { openModal } from '../../modules/modal';


class HeatMapPrefTrigger extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	handleClick = e => {
		e.preventDefault();
		this.props.openModal('heatmap_pref_modal');
	}

	render(){
		let display = 'initial';
		if (this.props.allModals.heatmap_pref_modal) {
			display = 'none';
		}

		return(
			<ModalTrigger
				modal_id="heatmap_pref_modal"
				modal_action="open"
				style={{ display: display }}
				className='default-trigger pref-btn'
			>
				<i className="material-icons" > settings </i>
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
)(HeatMapPrefTrigger)