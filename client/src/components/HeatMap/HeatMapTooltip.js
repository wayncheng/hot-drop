import React from 'react';

const HeatMapTooltip = (props) => {
	const { count, total } = props;
	const pct = Math.round(1000 * count / total) / 10;
	return (
		<span 
			style={{
				top: props.node.y - 60,
				left: props.node.x,
			}}
			className="tooltip heatmap-tooltip">
			{/* <span className="focus">{pct + '%'}</span> */}
			<span className="focus">{pct}</span>
			<span className="subfocus">{`(${count}/${total})`}</span>
			{/* {`${pct}% (${count}/${total})`} */}
		</span>
	);
};
export default HeatMapTooltip;

HeatMapTooltip.defaultProps = {
	count: 0
};
