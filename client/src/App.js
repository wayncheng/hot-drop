import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import './static/bulma.min.css';
import './App.scss';
import API from './utils/API';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUUID } from './modules/picker';

import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import DevSandboxPage from './pages/Sandbox/DevSandboxPage';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	componentDidMount = () => {
		// Check for UUID in localstorage, then...
		// - If not found --> createUUID then set in local and state
		// - If found in local --> set UUID in state

		let localID = localStorage.getItem('uuid');
		
		if (!localID){
			let newID = API.createUUID();
			console.log('newID:',newID)
			localID = newID;
			// Save to localStorage and set UUID in redux state
			localStorage.setItem('uuid',newID);
		}
		console.log('uuid:',localID);

		this.props.setUUID(localID)
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					{process.env.NODE_ENV !== 'production' && (
						<Route exact path="/dev" component={DevSandboxPage} />
					)}
					<Route exact path="/view/:path_id" component={ViewPage} />
					<Route exact path="/" component={HomePage} />
				</Switch>
			</BrowserRouter>

		);
	}
}

// export default App;

const mapStateToProps = state => ({
	uuid: state.picker.uuid,
})
const mapDispatchToProps = dispatch => bindActionCreators({ 
	setUUID,
}, dispatch)
export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App)