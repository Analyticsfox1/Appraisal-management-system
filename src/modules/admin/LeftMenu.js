import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {
	render() {
		return (
			<aside className="LeftMenu">
				<div className="logo-image"></div>
				<ul className="dash_ul">
					<p className="text-white"><img src="./assets/images/admin.png" style={{ height: '100px', width: '100px' }} />Welcome, Admin</p>
					<li><NavLink to="/admin-dashboard" activeClassName="active"><i className="fas fa-home"></i><span>My Dashboard</span></NavLink></li>
					<li><NavLink to="/user-management" activeClassName="active"><i className="fas fa-user"></i><span>&nbsp;User Management</span></NavLink></li>
					<li><NavLink to="/role-management" activeClassName="active"><i className="fas fa-tasks"></i><span>&nbsp;Role Management</span></NavLink></li>
					<li><NavLink to="/team-management" activeClassName="active"><i className="fas fa-users"></i><span>Team Management</span></NavLink></li>
					<li><NavLink to="/push-notification" activeClassName="active"><i className="fas fa-flag"></i><span>&nbsp;Push Notification</span></NavLink></li>
				</ul>
			</aside>
		)
	}
}

export default LeftMenu