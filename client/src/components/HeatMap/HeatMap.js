import React, { Component } from 'react';
import './HeatMap.scss';
import 'react-vis/dist/style.css';
import { makeVisFlexible, XYPlot, HexbinSeries } from 'react-vis';
import HeatMapTooltip from './HeatMapTooltip';

// const sampleData = [ { x: 25, y: 25 }, { x: 25, y: 50 }, { x: 25, y: 75 }, { x: 50, y: 50 }, { x: 50, y: 75 }, { x: 75, y: 75 }, { x: 1, y: 1 }, { x: 81, y: 75 }, { x: 89, y: 60 }, { x: 72, y: 43 }, { x: 73, y: 19 }, { x: 81, y: 33 }, { x: 55, y: 92 }, { x: 53, y: 25 }, { x: 83, y: 32 }, { x: 81, y: 76 }, { x: 83, y: 78 }, { x: 82, y: 75 }, { x: 36, y: 54 }, { x: 36, y: 53 }, { x: 81, y: 74 }, { x: 36, y: 54 }, { x: 59, y: 78 }, { x: 59, y: 78 }, { x: 38, y: 50 }, { x: 67, y: 35 }, { x: 73, y: 19 }, { x: 28, y: 31 }, { x: 36, y: 52 }, { x: 53, y: 24 }, { x: 35, y: 54 }, { x: 36, y: 54 }, { x: 34, y: 65 }, { x: 35, y: 53 }, { x: 81, y: 76 }, { x: 81, y: 75 }, { x: 80, y: 75 }, { x: 22, y: 64 }, { x: 35, y: 53 }, { x: 36, y: 53 }, { x: 36, y: 51 }, { x: 74, y: 21 } ];

class HeatMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hoveredNode: null,
			formattedVisData: [],
			totalCount: 0
		};
	}

	// componentDidUpdate = (prevProps, prevState, snapshot) => {
	// 	if (prevProps.data !== this.props.data) {
	// 		const formatted = this.props.data.map((marker) => {
	// 			return {
	// 				x: marker.mark_x,
	// 				y: 100 - marker.mark_y
	// 				//* IMPORTANT to mirror the y values since our data is measured from top left, but chart uses bottom left as origin.
	// 			};
	// 		});

	// 		this.setState({
	// 			formattedVisData: formatted,
	// 			totalCount: formatted.length
	// 		});
	// 	}
	// };

	componentDidMount = () => {};

	// handleMouseLeave = (event) => {
	// 	event.preventDefault();
	// 	this.setState({ hoveredNode: null });
	// };
	handleValueMouseLeave = (datapoint, event) => {
		this.setState({ hoveredNode: null });
	};
	handleValueMouseOver = (datapoint, event) => {
		// console.log('---> hovering ', datapoint.length);
		// console.log('datapoint:', datapoint);

		this.setState({ hoveredNode: datapoint });
	};

	render() {
		// const formatted = this.props.data.map((marker) => {
		// 	return {
		// 		x: marker.mark_x,
		// 		y: 100 - marker.mark_y
		// 		//* IMPORTANT to mirror the y values since our data is measured from top left, but chart uses bottom left as origin.
		// 	};
		// });
		// console.log('formatted:',formatted);

		// console.log('this.state.formattedVisData:',this.state.formattedVisData);

		return (
			<div className="heatmap">
				<FlexiblePlot
					xDomain={[ 0, 100 ]}
					yDomain={[ 0, 100 ]}
					getX={(d) => d.x}
					getY={(d) => d.y}
					margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
					// onMouseLeave={this.handleMouseLeave}
				>
					<HexbinSeries
						// data={this.state.formattedVisData}
						data={this.props.data}
						radius={12}
						style={{
							// stroke: 'transparent',
							// stroke: 'yellow',
							strokeLinejoin: 'round',
							// strokeWidth: 2,
							opacity: 0.8
						}}
						sizeHexagonsWithCount={false}
						// animation
						className="heatmap-hexbin"
						onValueMouseOver={this.handleValueMouseOver}
						onValueMouseOut={this.handleValueMouseLeave}
						// onValueRightClick={this.handleMouse}
						// onValueClick={this.handleMouse}
						// colorRange={[ 'rgba(255,255,150,0.9)', 'red' ]}
						// colorRange={[ '#ffffcc', 'red' ]}
						colorRange={this.props.colors}
						xOffset={0}
						yOffset={0}
					/>
				</FlexiblePlot>

				{this.state.hoveredNode && (
					<HeatMapTooltip
						node={this.state.hoveredNode}
						count={this.state.hoveredNode.length}
						total={this.props.data.length}
					/>
				)}
				{/* <HeatMapTooltip total={this.state.totalCount} /> */}
			</div>
		);
	}
}
export default HeatMap;

const FlexiblePlot = makeVisFlexible(XYPlot);
