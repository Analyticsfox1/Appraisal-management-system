import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {
	render() {
		return (
			<aside className="LeftMenu">
				<div className="logo-image"></div>
				<ul className="dash_ul">
					<li><NavLink to="/user-management" activeClassName="active"><i className="fas fa-user"></i><span>User Management</span></NavLink></li>
					<li><NavLink to="/role-management" activeClassName="active"><i className="fas fa-tasks"></i><span>Role Management</span></NavLink></li>
					<li><NavLink to="/team-management" activeClassName="active"><i className="fas fa-users"></i><span>Team Management</span></NavLink></li>
					<li><NavLink to="/push-notification" activeClassName="active"><i className="fas fa-flag"></i><span>Push Notification</span></NavLink></li>
				</ul>
			</aside>
		)
	}
}

export default LeftMenu