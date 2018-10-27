import React from 'react';
import { Circle, Rect } from './TargetPieces';

const AreaLand = props => {
	return (
		<div className="target-group">
			<Circle t="8" l="10" w="33" h="33" />
			<Circle t="15" l="41" w="30" h="30" />
			<Circle t="49" l="14" w="25" h="25" />
			<Circle t="39" l="4" w="26" h="26" />
			<Circle t="62" l="11" w="6" h="6" />
			<Circle t="13" l="61" w="30" h="30" />
			<Circle t="44" l="82" w="15" h="15" />
			<Circle t="47" l="69" w="25" h="25" />
			<Circle t="63" l="62" w="29" h="29" />
			<Circle t="70" l="41" w="28" h="28" />
			<Circle t="79" l="30" w="14" h="14" />
			<Rect t="26" l="23" w="50" h="56" r="54" />
			<Rect t="20" l="9" w="20" h="31" r="14" />
			<Rect t="15" l="29" w="25" h="21" r="20" />
			<Rect t="24" l="73" w="20" h="28" r="168" />


			{/* 
			<Circle t="10" l="15" w="8" h="8" name="junk" />
			<Circle t="18" l="10" w="14" h="10" name="haunted" />
			<Circle t="24" l="21" w="14" h="14" name="pleasant" />
			<Circle t="41" l="4" w="6" h="14" r="17" name="snobby" />
			<Circle t="16" l="45" w="17" h="17" name="lazy" />
			<Circle t="33" l="37" w="13" h="13" name="lake" />
			<Circle t="45" l="30" w="13" h="13" name="tilted" />
			<Circle t="59" l="30" w="13" h="13" name="shifty" />
			<Circle t="49" l="8" w="11" h="11" name="viking" />
			<Circle t="58" l="16" w="13" h="13" name="greasy" />
			<Circle t="84" l="30" w="10" h="10" name="flush" />
			<Circle t="87" l="51" w="14" h="11" name="lucky" />
			<Circle t="72" l="54" w="14" h="14" name="fatal" />
			<Circle t="59" l="50" w="13" h="10" name="salty" />
			<Circle t="50" l="50" w="13" h="13" name="dusty" /> 
			*/}
		</div>
	);
};
export default AreaLand;
