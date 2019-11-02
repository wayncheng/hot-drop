import React from 'react'
import {Circle,Rect} from './TargetPieces';

const AreaWater = props => {

	return(
		<div id="water-group" className="target-group">
			<Circle t="-58" l="21" w="75" h="75" />
			<Rect t="0" l="-10" w="20" h="50" r="15" />
		</div>
	)
}
export default AreaWater



// Chapter 1 AreaWater .........................
// <Circle t="-58" l="21" w="75" h="75" />
// <Circle t="74"  l="17" w="15" h="15" />
// <Rect t="0" l="-10" w="20" h="50" r="15" />
// <Rect t="40" l="-4" w="10" h="60" r="-5" />
// <Rect t="62" l="-20" w="40" h="40" r="45" />
// <Rect t="-10" l="90" w="40" h="70" r="-18" />