import React, { Component } from 'react';
import { logout } from '../../utils/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UserHeader extends Component {

	onLogOut = () => {
		logout().then(response => {
			if (!response.error) {
				this.props.history.push('/')
				toast.success("Logout Successfull", { type: toast.TYPE.SUCCESS, autoClose: 2000 })
			}
		})
	}

	render() {
		return (
			<header>
				<div className="dash_head">
					<div className="time_check"><button className="btn btn2 btn-success btn-rounded">Check In <i className="far fa-clock"></i></button> 00:00 Hrs</div>
					<button onClick={this.onLogOut} className="btn btn-danger btn2"><i className="fas fa-power-off"></i> Logout	</button>
				</div>
				<ToastContainer />
			</header>
		)
	}
}

export default UserHeader