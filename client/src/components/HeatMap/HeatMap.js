import React, { Component } from 'react';
import './HeatMap.scss';
import 'react-vis/dist/style.css';
import { XYPlot,  XAxis, YAxis, HexbinSeries } from 'react-vis';

const sampleData = [ { x: 25, y: 25 }, { x: 25, y: 50 }, { x: 25, y: 75 }, { x: 50, y: 50 }, { x: 50, y: 75 }, { x: 75, y: 75 }, { x: 0, y: 0 }, { x: 81, y: 75 }, { x: 89, y: 60 }, { x: 72, y: 43 }, { x: 73, y: 19 }, { x: 81, y: 33 }, { x: 55, y: 92 }, { x: 53, y: 25 }, { x: 83, y: 32 }, { x: 81, y: 76 }, { x: 83, y: 78 }, { x: 82, y: 75 }, { x: 36, y: 54 }, { x: 36, y: 53 }, { x: 81, y: 74 }, { x: 36, y: 54 }, { x: 59, y: 78 }, { x: 59, y: 78 }, { x: 38, y: 50 }, { x: 67, y: 35 }, { x: 73, y: 19 }, { x: 28, y: 31 }, { x: 36, y: 52 }, { x: 53, y: 24 }, { x: 35, y: 54 }, { x: 36, y: 54 }, { x: 34, y: 65 }, { x: 35, y: 53 }, { x: 81, y: 76 }, { x: 81, y: 75 }, { x: 80, y: 75 }, { x: 22, y: 64 }, { x: 35, y: 53 }, { x: 36, y: 53 }, { x: 36, y: 51 }, { x: 74, y: 21 } ];

class HeatMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hoveredNode: null,
		};
	}

	// componentDidUpdate = (prevProps, prevState, snapshot) => {
	// 	if (prevProps.data !== this.props.data) {
			
	// 	}
	// };

	handleMouseLeave = event => {
		event.preventDefault();
		this.setState({ hoveredNode: null })
	}
	handleValueMouseOver= (d) => {
		this.setState({ hoveredNode: d })
	}
	

	render() {
		// console.log('HeatMap data:', this.props.data);
		return (
			<div className="heatmap">
				<XYPlot
					xDomain={[ 0, 100 ]}
					yDomain={[ 0, 100 ]}
					width={600}
					height={600}
					getX={(d) => d.waiting}
					getY={(d) => d.eruptions}
					onMouseLeave={this.handleMouseLeave}
				>
					<HexbinSeries
						animation
						className="hexbin-blah"
						style={{
							stroke: 'red',
							strokeLinejoin: 'round'
						}}
						// onValueMouseOver={(d) => this.setState({ hoveredNode: d })}
						onValueMouseOver={this.handleValueMouseOver}
						// colorRange={[ 'white', 'black' ]}
						radius={15}
						xOffset={0}
            yOffset={0}
            // colorRange={['orange', 'cyan']}
						// data={this.props.data}
						data={sampleData}
					/>

					{/* <XAxis/> */}
					{/* <YAxis/> */}
				</XYPlot>
			</div>
		);
	}
}
export default HeatMap;

