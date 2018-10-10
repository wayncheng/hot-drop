import React, {Component} from 'react'
import './Display.scss';

class PointsDisplay extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		return(
			<div className="display points-display">
				{this.props.data.map( (point) => {
					let id = 'point-'+point.id;
					return (
						<span 
							{...point}
							key={id} 
							id={id}
							className="data-point"
							style={{
								top:  `${point.mark_y}%`,
								left: `${point.mark_x}%`,
							}}
						></span>
					)
				})
				}
			</div>
		)
	}
}
export default PointsDisplay