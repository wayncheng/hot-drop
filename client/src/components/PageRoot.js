import React, {Component} from 'react'
import {
	MenuBtn,
	Menu,
} from './index';

class PageRoot extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		return(
			<div className="page-root asdfasdfads">
				<MenuBtn/>
				<Menu/>
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}
export default PageRoot