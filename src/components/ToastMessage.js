import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ToastMessage extends Component {

	success = () => toast.success('Success', { type: toast.TYPE.SUCCESS, autoClose: 2000 });

	render() {
		return (
			<div>
				<ToastContainer />
				<button onClick={this.success}>Notify</button>
			</div>
		);
	}
}

export default ToastMessage;