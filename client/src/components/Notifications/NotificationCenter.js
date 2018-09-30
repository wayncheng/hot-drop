import React from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './Notifications.scss';

	// NotificationManager.info(message, title, timeOut, callback, priority);
	// e.g. NotificationManager.error('Error message', 'Click me!', 5000, () => { alert('callback'); });

export const sendError = (msg, title, timeout) => {
		NotificationManager.error(msg, title, timeout)
}
export const sendInfo = (msg, title, timeout) => {
		NotificationManager.info(msg, title, timeout)
}
export const sendSuccess = (msg, title, timeout) => {
		NotificationManager.success(msg, title, timeout)
}
export const sendWarning = (msg, title, timeout) => {
		NotificationManager.warning(msg, title, timeout)
}



const NotificationCenter = () => (
	<aside className="notification-center">
		<NotificationContainer enterTimeout={0} leaveTimeout={0}/>
	</aside>
);
export default NotificationCenter