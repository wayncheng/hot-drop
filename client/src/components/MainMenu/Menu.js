import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Menu.scss';
import {
	Modal,
	ModalTrigger,
} from '..'

const Menu = props => {

	return(
		<Modal id="menu_modal" className="default-modal">

			<section className="menu-section">
				<h3>Main Menu</h3>
				<p>photo booth vinyl Williamsburg Shoreditch pop-up locavore mustache raw denim put a bird on it ethical Pitchfork pickled ennui dreamcatcher 8-bit scenester Wes Anderson bitters Schlitz shabby chic organic Vice biodiesel wayfarers tattooed next level skateboard High Life actually Etsy seitan direct trade  Bushwick leggings retro banjo keytar small batch art party fingerstache pug wolf street art farm-to-table 3 wolf moon before they sold out forage Kickstarter salvia Blue Bottle fashion axe hella Neutra gastropub deep v lomo banh mi slow-carb polaroid Banksy cray meh meggings butcher irony tote bag sustainable cornhole single-origin coffee ugh kitsch fanny pack Echo Park McSweeney's food truck church-key Cosby sweater pork belly mumblecore bespoke typewriter sartorial keffiyeh cliche PBR flexitarian stumptown literally crucifix hoodie trust fund Tonx plaid fap occupy XOXO jean shorts roof party beard tofu lo-fi Thundercats YOLO Brooklyn semiotics drinking vinegar gentrify brunch Pinterest flannel try-hard you probably haven't heard of them +1 chillwave twee craft beer cardigan chia pour-over Carles tousled blog Portland disrupt mlkshk iPhone paleo DIY Odd Future artisan hashtag kogi cred gluten-free letterpress Truffaut four loko swag selvage umami Intelligentsia squid Marfa narwhal aesthetic authentic Austin synth VHS asymmetrical distillery bicycle rights freegan fixie kale chips Godard Tumblr quinoa selfies chambray readymade 90's whatever post-ironic yr master cleanse normcore Helvetica messenger bag vegan heirloom sriracha viral mixtape PBR&B American Apparel</p>
			</section>

			<ModalTrigger modal_id="menu_modal" modal_action="close">
				<i className="material-icons">cancel</i>
			</ModalTrigger>

		</Modal>
	)
}
const mapStateToProps = state => ({
	// allModals: state.modal.allModals,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	// hideMenu,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Menu)