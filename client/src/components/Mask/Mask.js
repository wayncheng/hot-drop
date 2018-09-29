import React from 'react';
import './Mask.scss';
import MaskSVG from '../../static/map-land-clip.svg';

const Mask = props => {
	return (
		<div className="mask-container">
			{/* <img className="mask" src={maskSVG} alt="Fortnite Mask Season 6" /> */}
			<MaskSVG className="map-target"/>
		</div>
	)
}
export default Mask;