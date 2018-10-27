import React from 'react';
import classNames from 'classnames';
import { ModalTrigger } from '../';

const CloseBtn = props => {
	return (
		<ModalTrigger
			className={classNames("close-btn", {
				'pos-top':    props.top,
				'pos-bottom': props.bottom,
				'pos-left':   props.left,
				'pos-right':  props.right,
			})}
			modal_id={props.modal_id}
			modal_action="close"
		>
			<i className="material-icons">cancel</i>
		</ModalTrigger>
	);
};
export default CloseBtn;
