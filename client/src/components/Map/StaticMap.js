import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Map.scss';
import mapImgChapter1 from '../../static/fortnite-map-s7.jpg';
import mapImg from '../../static/fortnite-map-c2-labeled-1920.jpg';

const mapConfig = {
	'1' : {
		src : mapImgChapter1,
		alt : 'Fortnite Map Chapter 1',
	},
	'2' : {
		src : mapImg,
		alt : 'Fortnite Map Chapter 2',
	},
};

class StaticMap extends Component {
	componentDidMount = () => {
		if (this.props.chapter === '1'){
			document.querySelector('html').classList.add('ch1');
		}
	}
	
	render() {
		const {chapter} = this.props;
		const mapData = mapConfig[chapter];
		return (
			<div id='map-container' className='container'>
				<img className='map' src={mapData.src} alt={mapData.alt} />
				{this.props.children}
			</div>
		);
	}
}
export default StaticMap;

StaticMap.defaultProps = {
	chapter : '2',
};

StaticMap.propTypes = {
	chapter : PropTypes.string,
};


// {chapter === "2" && (
// 	<div className="poi-label-container">
// 		<p className="poi-label" style={{top: '37%', left: '17%'}}>Sweaty Sands</p>
// 		<p className="poi-label" style={{top: '25%', left: '39%'}}>Pleasant Park</p>
// 		<p className="poi-label" style={{top: '53%', left: '15%'}}>Holly Hedges</p>
// 		<p className="poi-label" style={{top: '44%', left: '34%'}}>Salty Springs</p>
// 		<p className="poi-label" style={{top: '73%', left: '27%'}}>Slurpy Swamp</p>
// 		<p className="poi-label" style={{top: '67%', left: '67%'}}>Lazy Lake</p>
// 	</div>
// )}
