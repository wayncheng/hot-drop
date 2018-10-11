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
// import address from 'address';
// const address = require('address');
// const extIP = require('external-ip');


class HomePage extends Component {
	constructor(props){
		super(props);
		this.state={}

	}

	componentDidMount = () => {
		
		// API.getUUID().then(res => {
		// 	console.log('res:',res)
		// 	this.props.setUUID(res)
		// });
		

		// const uuid = API.getUUID();
		// console.log('uuid:',uuid)
		
		// const ip = address.ip('en');
		// const ip = address.interface('IPv4', 'eth1');
		// console.log('ip:',ip)

		// address('en',function (err, addrs) {
		// 	console.log(addrs.ip, addrs.ipv6, addrs.mac);
		// 	// '192.168.0.2', 'fe80::7aca:39ff:feb0:e67d', '78:ca:39:b0:e6:7d'
		// });

	// 	let getIP = extIP({
	// 		replace: true,
	// 		services: ['http://ifconfig.co/x-real-ip', 'http://ifconfig.io/ip'],
	// 		timeout: 600,
	// 		getIP: 'parallel',
	// 		userAgent: 'Chrome 15.0.874 / Mac OS X 10.8.1'
	// });
	// 		getIP((err, ip) => {
	// 				if (err) {
	// 						// every service in the list has failed
	// 						throw err;
	// 				}
	// 				console.log(ip);
	// 		});
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