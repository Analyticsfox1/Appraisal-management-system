import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {

	state = {
		admin: {}
	}

	componentWillMount() {
		let data = JSON.parse(sessionStorage.getItem('adminData'));
		this.setState({
			admin: data
		})
	}

	render() {
		const { admin } = this.state;
		return (
			<aside className="LeftMenu">
				<div className="logo-image"></div>
				<ul className="dash_ul">
					<div className="row px-3">
						<div>
							<img src="./assets/images/admin.png" style={{ height: '100px', width: '100px' }} />
						</div>
						<div className="text-center p-2 mt-4">
							<h6 className="title-orange">Welcome </h6>
							<h6 style={{ overflowWrap: 'break-word' }} className="text-white">{admin ? admin.name : 'Admin'}</h6>
						</div>
					</div>
					<div className="custom-hr">
						<hr />
					</div>
					<li><NavLink to="/admin-dashboard" activeClassName="active"><i className="fas fa-home"></i><span>My Dashboard</span></NavLink></li>
					<li><NavLink to="/user-management" activeClassName="active"><i className="fas fa-user"></i><span>&nbsp;User Management</span></NavLink></li>
					<li><NavLink to="/new-register" activeClassName="active"><i className="fas fa-user-clock"></i><span>New Registered Users</span></NavLink></li>
					<li><NavLink to="/role-management" activeClassName="active"><i className="fas fa-tasks"></i><span>&nbsp;Role Management</span></NavLink></li>
					<li><NavLink to="/access-management" activeClassName="active"><i className="fab fa-keycdn fa-lg"></i><span>Access Management</span></NavLink></li>
					<li><NavLink to="/team-management" activeClassName="active"><i className="fas fa-users"></i><span>Team Management</span></NavLink></li>
					<li><NavLink to="/push-notification" activeClassName="active"><i className="fas fa-flag"></i><span>&nbsp;Push Notification</span></NavLink></li>
				</ul>
			</aside >
		)
	}
}

export default LeftMenu