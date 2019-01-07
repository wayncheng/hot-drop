import React from 'react';
import {
	StaticMap,
	BusPath,
	Interface,
} from '..';

const DropMap = props => {
	return (
		<StaticMap>
			{props.children}
			<BusPath />
			<Interface />
		</StaticMap>
	)
}
export default DropMap;