import React, {Component} from 'react'
import {
	MenuBtn,
	Menu,
	NotificationCenter,
	StatsPanel,
} from './index';
import classNames from 'classnames';

class PageRoot extends Component {
	// constructor(props){
	// 	super(props)
	// 	this.state = {}
	// }

	render(){
		return(
			
				<div {...this.props} className={classNames('page-root',this.props.className)} >

					<MenuBtn/>
					<Menu/>

					<main>
						{this.props.children}
					</main>
					
					<NotificationCenter />
					{process.env.NODE_ENV !== 'production' && <StatsPanel />}

				</div>
			// [
			// 	<div {...this.props} className={classNames('page-root',this.props.className)} key="main-page">

			// 		<MenuBtn/>
			// 		<Menu/>

			// 		<main>
			// 			{this.props.children}
			// 		</main>
					
			// 		<NotificationCenter />
			// 		{process.env.NODE_ENV !== 'production' && <StatsPanel />}

			// 	</div>,
			// 	<div className="behind-root" key="page-backdrop"></div>
			// ]
		)
	}
}
export default PageRoot