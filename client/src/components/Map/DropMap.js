import React from 'react';
import {
	StaticMap,
	BusPath,
	Interface,
} from '..';

const DropMap = props => {
	return (
		<StaticMap chapter={props.chapter}>
			{props.children}
			<BusPath />
			<Interface chapter={props.chapter}/>
		</StaticMap>
	)
}
export default DropMap;

DropMap.defaultProps = {
	chapter: '2',
}