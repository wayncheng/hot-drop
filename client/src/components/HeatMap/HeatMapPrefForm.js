import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
	setColorCold, 
	setColorHot, 
	setColors, 
	setPreferences, 
	resetPreferences,
	toggleIndividuals,
	toggleHexbin,
} from '../../modules/heatmap';
import { closeModal } from '../../modules/modal';

class HeatMapPrefForm extends Component {
	constructor(props){
		super(props);
		this.state={
			colorCold: '',
			colorHot: '',
		}
	}

	componentDidMount = () => {

		// Check if custom preferences are stored in localStorage first
		// const storedState = localStorage.getItem('heatmapState');
		// if (storedState){
		// 	this.props.setPreferences(JSON.parse(storedState))
		// }

		let {colorCold,colorHot} = this.props;
		
		this.setState({
			colorCold: colorCold,
			colorHot:  colorHot,
		})

	}

	// componentDidUpdate = (prevProps) => {
	// 	if(prevProps !== this.props){
	// 		localStorage.setItem('heatmapState',JSON.stringify(this.props))
	// 		console.log('localStorage.getItem(heatmapState):',localStorage.getItem('heatmapState'));
	// 	}
	// }

	handleColorChange = event => {
		event.preventDefault();
		const {name,value} = event.target;
		this.setState({ [name]: value })
	}

	handleSubmit = event => {
		event.preventDefault();
		const {colorCold,colorHot} = this.state;
		
		// Set user preferences in store
		this.props.setColors(colorCold, colorHot);

		// Close modal
		this.props.closeModal('heatmap_pref_modal')
	}

	handleResetClick = event => {
		event.preventDefault();
		// Reset preferences to default in store
		this.props.resetPreferences();
		// Close modal		
		this.props.closeModal('heatmap_pref_modal') 
	}

	handleIndividualChange = event => {
		// event.preventDefault();
		this.props.toggleIndividuals()
	}
	handleHexbinChange = event => {
		this.props.toggleHexbin()
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="pref-form form">
				<h4 className="form-sec-title">Heat Map Colors</h4>
				<div className="form-group color-form-group">
					<div className="input-group color-input-group">
						<label htmlFor="color-cold">Cold</label>
						<input id="color-cold" className="color-input" type="text" value={this.state.colorCold} onChange={this.handleColorChange} name="colorCold" />
					</div>
					<div className="input-group color-input-group">
						<label htmlFor="color-hot">Hot</label>
						<input id="color-hot" className="color-input" type="text" value={this.state.colorHot} onChange={this.handleColorChange} name="colorHot" />
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<input
							id="show-hexbin"
							name="showHexbin"
							type="checkbox"
							checked={this.props.showingHexbin}
							onChange={this.handleHexbinChange} />
						<label htmlFor="show-hexbin">Show Hexbin Heat Map</label>
					</div>
					<div className="input-group">
						<input
							id="show-individuals"
							name="showIndividuals"
							type="checkbox"
							checked={this.props.showingIndividuals}
							onChange={this.handleIndividualChange} />
						<label htmlFor="show-individuals">Show Individual Players</label>
					</div>
				</div>
				<div className="form-group">
					<button type="submit" className="btn save-btn" >Save</button>
					<button type="button" className="btn reset-btn btn-naked" onClick={this.handleResetClick}>Reset to Default</button>
				</div>
			</form>
		);
	}
}
const mapStateToProps = (state) => ({
	colorCold: state.heatmap.colorCold,
	colorHot: state.heatmap.colorHot,
	showingIndividuals: state.heatmap.showingIndividuals,
	showingHexbin: state.heatmap.showingHexbin,
});

const mapDispatchToProps = (dispatch) => bindActionCreators( {
	setColorCold,
	setColorHot,
	setColors,
	setPreferences,
	resetPreferences,
	closeModal,
	toggleIndividuals,
	toggleHexbin,
}, dispatch );

export default connect(mapStateToProps, mapDispatchToProps) (HeatMapPrefForm);
