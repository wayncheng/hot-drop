import React, { Component } from 'react';
import {
	Map,
	StatsPanel,
	NotificationCenter,
	// ModalTrigger,
	HelpTrigger,
	Guide,
} from '../components';
import API from '../utils/API';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUUID } from '../modules/picker';


class HomePage extends Component {
	constructor(props){
		super(props);
		this.state={}

	}

	componentDidMount = () => {
		
		API.getUUID().then(res => {
			console.log('res:',res)
			this.props.setUUID(res)
		});
		
	}


	render() {
		return (
			<div className="page-root">
				<main>
					{(process.env.NODE_ENV !== 'production') && <StatsPanel />}
					
					<NotificationCenter />
					
					<Map />
					
					<HelpTrigger/>
					
					<Guide />
				</main>
			</div>
		);
	}
}
// export default HomePage;

const mapStateToProps = state => ({
	uuid: state.picker.uuid,
})
const mapDispatchToProps = dispatch => bindActionCreators({
	setUUID,
}, dispatch)
export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(HomePage)