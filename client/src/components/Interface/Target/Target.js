import React, {Component} from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMarker } from '../../../modules/picker';

class Target extends Component {
	constructor(props){
		super(props)
		this.state={}
	}

	
	formatDecimal = n => {
		let factor = 1000;
		let formatted = Math.floor(n * factor) / factor;
		return formatted;
	}

	handleTargetClick = event => {
		event.preventDefault();
		event.stopPropagation();

		// Get map dimensions in px
		const { offsetWidth , offsetHeight } = document.getElementById('overlay');

		// Map Offset from top left corner of window (in order to determine mouse offset)
		const { offsetLeft , offsetTop } = document.getElementById('map-container');

		// Location of Mouse Click on Map in relation to the top left corner of the window
		const { clientX, clientY } = event;
		
		// Calculate Mouse Location (%) relative to the top-left corner of the Map (not window)
		const locationX = 100 * (clientX - offsetLeft) / offsetWidth;
		const locationY = 100 * (clientY - offsetTop) / offsetHeight;
		
		// Trim decimal
		const finalX = this.formatDecimal(locationX);
		const finalY = this.formatDecimal(locationY);
		// console.log('x,y (%):',finalX,finalY)

		// Place the marker via redux
		this.props.setMarker({
			x: finalX,
			y: finalY,
		})
	}


	render(){

		return (
			
			<span 
				// {...this.props}
				style={this.props.style}
				className={classNames('target',this.props.className)} 
				onClick={this.handleTargetClick}
			></span>
			)
	}
}

const mapStateToProps = state => ({
	// location: state.picker.location,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	setMarker,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Target)