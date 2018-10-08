import React, {Component} from 'react';
import Map from '../components/Map/Map';
import CloudLayer from '../components/layers/CloudLayer';
import StatsPanel from '../components/StatsPanel/StatsPanel';
import NotificationCenter from '../components/Notifications/NotificationCenter';
import Guide from '../components/Guide/Guide'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showGuide, hideGuide } from '../modules/general';

class HomePage extends Component {
	
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

	render(){
		return (
			<div className="page-root">
				<main>
					
				{(process.env.NODE_ENV !== 'production') && <StatsPanel />}
				
				<NotificationCenter />

				{this.props.guideVisible && <Guide />}

					<i 
						className="material-icons info-btn"
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
					<Map/>
					{/* <CloudLayer/> */}
				</main>
      </div>
    );
	}
}
// export default HomePage;

const mapStateToProps = state => ({
	...state.general,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	showGuide,
	hideGuide
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomePage)