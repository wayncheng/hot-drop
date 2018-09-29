import React from 'react';
import './Map.scss';
import mapImg from '../../static/fortnite-map-s6.jpg';
// import Overlay from '../interface/Overlay';
import BusPath from '../BusPath/BusPath';
import Interface from '../Interface/Interface';


const Map = props => {
	return (
		<div id="container" className="map-container">
			<img
				className="map" 
				src={mapImg} 
				alt="Fortnite Map Season 6" 
			/>
			<BusPath/>
			<Interface/>
		</div>
	)
}
export default Map;