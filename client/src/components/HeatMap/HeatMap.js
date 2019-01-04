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

	componentDidUpdate = (prevProps, prevState, snapshot) => {
		if (prevProps.data !== this.props.data) {
			const formatted = this.props.data.map((marker) => {
				return {
					x: marker.mark_x,
					y: 100 - marker.mark_y
					//* IMPORTANT to mirror the y values since our data is measured from top left, but chart uses bottom left as origin.
				};
			});

			this.setState({
				formattedVisData: formatted,
				totalCount: formatted.length
			});
		}
	};

	componentDidMount = () => {};

	// handleMouseLeave = (event) => {
	// 	event.preventDefault();
	// 	this.setState({ hoveredNode: null });
	// };
	handleValueMouseLeave = (datapoint, event) => {
		this.setState({ hoveredNode: null });
	};
	handleValueMouseOver = (datapoint, event) => {
		console.log('---> hovering ', datapoint.length);
		// console.log('datapoint:',datapoint);

		this.setState({ hoveredNode: datapoint });
	};

	render() {
		// console.log('HeatMap data:', this.props.data);`
		return (
			<div className="heatmap">
				<FlexiblePlot
					xDomain={[ 0, 100 ]}
					yDomain={[ 0, 100 ]}
					// width={785}
					// height={785}
					getX={(d) => d.x}
					getY={(d) => d.y}
					// onMouseLeave={this.handleMouseLeave}
					margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
				>
					{/* <XAxis />
				<YAxis /> */}
					<HexbinSeries
						data={this.state.formattedVisData}
						radius={12}
						style={{
							stroke: 'transparent',
							// stroke: 'yellow',
							strokeLinejoin: 'round',
							strokeWidth: 2,
							opacity: 0.8
						}}
						sizeHexagonsWithCount={false}
						// animation
						className="hexbin-blah"
						// onValueMouseOver={(d) => this.setState({ hoveredNode: d })}
						onValueMouseOver={this.handleValueMouseOver}
						onValueMouseOut={this.handleValueMouseLeave}
						// onValueRightClick={this.handleMouse}
						// onValueClick={this.handleMouse}

						colorRange={[ '#ffffcc', 'red' ]}
						xOffset={0}
						yOffset={0}
						// colorRange={['orange', 'cyan']}
						// data={this.props.data}
					/>
				</FlexiblePlot>

				{this.state.hoveredNode && <HeatMapTooltip count={this.state.hoveredNode.length} total={this.state.totalCount} />}
				{/* <HeatMapTooltip total={this.state.totalCount} /> */}
			</div>
		);
	}
}
export default HeatMap;

const FlexiblePlot = makeVisFlexible(XYPlot);
