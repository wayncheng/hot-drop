import React from 'react';
import './Map.scss';
// import mapImg from '../../static/fortnite-map-s6.jpg';
import mapImg from '../../static/fortnite-map-q5-1920.jpg';

const StaticMap = props => {
	return (
		<div id="map-container" className="container">
			<img
				className="map" 
				src={mapImg} 
				alt="Fortnite Map Season 6" 
			/>
				{props.children}
		</div>
	)
}
export default StaticMap;