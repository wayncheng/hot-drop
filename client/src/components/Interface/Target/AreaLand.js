import React from 'react';
import { Circle, Rect } from './TargetPieces';

const AreaLand = props => {
	return (
		<div className="target-group">
			<Circle t="8"  l="10" w="33" h="33" />
			<Circle t="15" l="41" w="30" h="30" />
			<Circle t="49" l="10" w="45" h="45" />
			<Circle t="39" l="4"  w="26" h="26" />
			<Circle t="13" l="61" w="30" h="30" />
			<Circle t="44" l="82" w="15" h="15" />
			<Circle t="47" l="69" w="25" h="25" />
			<Circle t="63" l="62" w="29" h="29" />
			<Circle t="70" l="41" w="28" h="28" />
			<Circle t="79" l="9"  w="18" h="18" />

			<Rect t="26" l="23" w="50" h="56" r="54" />
			<Rect t="20" l="9"  w="20" h="31" r="14" />
			<Rect t="15" l="29" w="25" h="21" r="20" />
			<Rect t="24" l="73" w="20" h="28" r="168" />
			<Rect t="52" l="7"  w="15" h="25" r="346" />
			<Rect t="72" l="9"  w="15" h="15" r="329" />
		</div>
	);
};
export default AreaLand;
