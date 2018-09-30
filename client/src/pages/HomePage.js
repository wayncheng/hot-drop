import React, {Component} from 'react';
import Map from '../components/Map/Map';
import CloudLayer from '../components/layers/CloudLayer';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { showGuide } from '../modules/general';

class HomePage extends Component {

	render(){
		return (
			<div className="page-root">
				<main>
					<CloudLayer/>
					<Map/>
				</main>
      </div>
    );
	}
}
export default HomePage;

// const mapStateToProps = state => ({
// 	...state.general,
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
// 	showGuide,
// }, dispatch)

// export default connect(
//   mapStateToProps, 
//   mapDispatchToProps
// )(HomePage)