import React, {Component} from 'react'
import {
	MenuBtn,
	Menu,
	NotificationCenter,
	StatsPanel,
} from './index';

class PageRoot extends Component {
	// constructor(props){
	// 	super(props)
	// 	this.state = {}
	// }

	render(){
		return(
			<div className="page-root asdfasdfads">

				<MenuBtn/>
				<Menu/>

				<main>
					{this.props.children}
				</main>
				
				<NotificationCenter />
				{process.env.NODE_ENV !== 'production' && <StatsPanel />}

			</div>
		)
	}
}
export default PageRoot