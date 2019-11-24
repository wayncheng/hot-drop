import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import './static/bulma.min.css';
import './App.scss';
import API from './utils/API';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUUID } from './modules/picker';

// import HomePage from './pages/HomePage';
// import HeatMapPage from './pages/HeatMapPage';
// import DevSandboxPage from './pages/sandbox/DevSandboxPage';
import {
	HeatMapPage,
	DropPage,
	// Chapter1DropPage,
	Chapter1HeatMapPage,
	DevSandboxPage,
} from './pages';

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
			localID = newID;
			// Save to localStorage and set UUID in redux state
			localStorage.setItem('uuid',newID);
		}
		this.props.setUUID(localID)
	}

	render() {
		return (
			<BrowserRouter forceRefresh>
				<Switch>
					{process.env.NODE_ENV !== 'production' && (
						<Route exact path="/dev" component={DevSandboxPage} />
					)}
					{/* Chapter 1 (Legacy) */}
					<Route exact path="/chapter1/heatmap/:path_id?" component={Chapter1HeatMapPage} />
					{/* <Route exact path="/chapter1/drop" component={Chapter1DropPage} /> */}
					
					{/* Current Routes */}
					<Route exact path="/heatmap/:path_id?" component={HeatMapPage} />
					<Route exact path="/" component={DropPage} />
					
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