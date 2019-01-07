import React, {Component} from 'react'

class IndividualsHeatMap extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		return(
			<div className="individuals-heatmap points-display">
				{this.props.data.map( (point) => {
					let id = 'point-'+point.id;
					return (
						<span 
							{...point}
							key={id} 
							id={id}
							className="individual"
							style={{
								top:  `${point.mark_y}%`,
								left: `${point.mark_x}%`,
							}}
						/>						
					)
				})
				}
			</div>
		)
	}
}
export default IndividualsHeatMap