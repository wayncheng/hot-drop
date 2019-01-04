import React from "react";

const HeatMapTooltip = props => {
	const {count,total} = props;
	const pct = Math.round(1000*count/total)/10;
	return (
		<span className="tooltip heatmap-tooltip">
			{`${pct}% (${count}/${total})`}
		</span>
	)
}
export default HeatMapTooltip

HeatMapTooltip.defaultProps = {
	count: 0,
}