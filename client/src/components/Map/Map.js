import React from 'react';
import './Map.scss';
import mapImg from '../../static/fortnite-map-s6.jpg';
import Overlay from '../Overlay/Overlay';
import BusPath from '../BusPath/BusPath';
import SubmitBtn from '../SubmitBtn/SubmitBtn';


const Map = props => {
	return (
		<div id="container" className="map-container">
			<img
				className="map" 
				src={mapImg} 
				alt="Fortnite Map Season 6" 
			/>
			<BusPath/>
			<Overlay/>
			<SubmitBtn/>
		</div>
	)
}
export default Map;