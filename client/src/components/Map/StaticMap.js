import React from 'react';
import './Map.scss';
import mapImg from '../../static/fortnite-map-s7.jpg';

const StaticMap = props => {
	return (
		<div id="map-container" className="container">
			<img
				className="map" 
				src={mapImg} 
				alt="Fortnite Map Season 7" 
			/>
				{props.children}
		</div>
	)
}
export default StaticMap;