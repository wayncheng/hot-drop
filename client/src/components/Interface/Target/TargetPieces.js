import React from 'react';
import Target from './Target'

export const Circle = props => {
	let circleStyle = {
		top   : props.t+'%',
		left  : props.l+'%',
		width : props.w+'%',
		height: props.h+'%',
	}
	return (
		<Target className="circle" style={circleStyle} />
	)
}


export const Rect = props => {
	let rectStyle = {
		top   : props.t+'%',
		left  : props.l+'%',
		width : props.w+'%',
		height: props.h+'%',
		transform: `rotateZ(${props.r}deg)`,
	}
	return (
		<Target className="rect" style={rectStyle} />
	)
}

