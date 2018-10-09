import React, { Component } from 'react';
// import Map from '../components/Map/Map';
// import CloudLayer from '../components/layers/CloudLayer';
// import StatsPanel from '../components/StatsPanel/StatsPanel';
// import NotificationCenter from '../components/Notifications/NotificationCenter';
// import Guide from '../components/Guide/Guide'
import {
	Map,
	StatsPanel,
	NotificationCenter,
	ModalTrigger,
	Guide,
} from '../components';
import API from '../utils/API';

class HomePage extends Component {
	constructor(props){
		super(props);
		this.state={}

	}

	componentDidMount = () => {

		API.getIP();
		
	}


	render() {
		return (
			<div className="page-root">
				<main>
					{(process.env.NODE_ENV !== 'production') && <StatsPanel />}
					
					<NotificationCenter />
					
					<Map />
					
					<ModalTrigger modal_id="guide_modal" modal_action="open">
						<i className="material-icons">help</i>
					</ModalTrigger>
					
					<Guide />
				</main>
			</div>
		);
	}
}
export default HomePage;
