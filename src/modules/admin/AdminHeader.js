import React, { Component } from 'react';
import { logout } from '../../utils/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AdminHeader extends Component {

	onLogOut = () => {
		logout().then(response => {
			if (response.data.error === "false") {
				this.props.history.push('/login')
				toast.success("Logout Successfully", { type: toast.TYPE.SUCCESS, autoClose: 2000 })
			}
			if (response.data.error === "true") {
				toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
				return false;
			}
		})
	}

	render() {
		return (
			<header>
				<div className="dash_head justify-content-end logout-btn">
					<a onClick={this.onLogOut} className="button"><i className="logout-icon fas fa-power-off"></i><div className="logout font-weight-bold"> Logout	</div></a>
					{/* <button onClick={this.onLogOut} className="btn btn-danger btn2 ml-auto"><i className="fas fa-power-off"></i> Logout	</button> */}
				</div>
			</header>
		)
	}
}

export default AdminHeader