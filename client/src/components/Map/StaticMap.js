import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Map.scss';
import mapImgChapter1 from '../../static/fortnite-map-s7.jpg';
import mapImg from '../../static/fortnite-map-c2-1920.jpg';

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
				{/* {this.props.chapter === '1' ? (
				<img className="map" src={mapImgChapter1} alt="Fortnite Map Chapter 1" />
				) : (
					<img className="map" src={mapImg} alt="Fortnite Map Chapter 2" />
				)}  */}
				{/* <img className="map" src={this.props.chapter === '1' ? mapImgChapter1 : mapImg} alt="Fortnite Map Season 7" /> */}
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
