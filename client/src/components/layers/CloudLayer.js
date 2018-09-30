import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showGuide, hideGuide } from '../../modules/general';
import Guide from '../Guide/Guide'
import NotificationCenter from '../Notifications/NotificationCenter'
import StatsPanel from '../StatsPanel/StatsPanel'
import './CloudLayer.scss'

class CloudLayer extends Component {
	
	
	
	handleClick = e => {
		e.preventDefault();

		// If guide is visible, click should hide
		if (this.props.guideVisible){
			this.props.hideGuide()
		}
		// If guide is hidden, click should show
		else {
			this.props.showGuide()
		}

	}

	
	render() {
		return (
			<section className="cloud-layer">
				<div className="liner">

					{(process.env.NODE_ENV !== 'production') && <StatsPanel />}

					<NotificationCenter />

					{this.props.guideVisible && <Guide />}

					<i 
						className="material-icons"
						onClick={this.handleClick}
						style={{
							position: 'fixed',
							top: '1rem',
							right: '1rem',
							fontSize: '2rem',
							zIndex: 9000,
							color: '#ffffff',
							cursor: 'pointer',
						}}
					>
						{this.props.guideVisible ? 'cancel' : 'info'}
					</i>
				</div>
			</section>
		)
	}
}


const mapStateToProps = state => ({
	...state.general,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	showGuide,
	hideGuide,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CloudLayer)