import React from 'react';
// import './Map.scss';
// import mapImg from '../../static/fortnite-map-s6.jpg';
// import Overlay from '../interface/Overlay';
import {
	StaticMap,
	BusPath,
	Interface,
} from '../';

const Map = props => {
	return (
		<StaticMap>
			{props.children}
			<BusPath />
			<Interface />
		</StaticMap>
	)
}
export default Map;