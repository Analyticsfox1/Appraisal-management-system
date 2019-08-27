import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {
	render() {
		return (
			<aside className="LeftMenu">
				<div className="logo-image"></div>
				<ul className="dash_ul">
					<p className="text-white"><img src="./assets/images/admin.png" style={{ height: '100px', width: '100px' }} />Welcome, CEO</p>
					<li><NavLink to="/CEO-kra-management" activeClassName="active"><i className="fas fa-tasks"></i><span>KRA Management</span></NavLink></li>
					<li><NavLink to="/CEO-team-management" activeClassName="active"><i className="fas fa-users"></i><span>Team Management</span></NavLink></li>
					<li><NavLink to="/CEO-organizational-goal" activeClassName="active"><i className="fas fa-sitemap"></i><span>Organizational Goal</span></NavLink></li>
					<li><NavLink to="/CEO-push-notification" activeClassName="active"><i className="fas fa-flag"></i><span>Push Notification</span></NavLink></li>
				</ul>
			</aside>
		)
	}
}

export default LeftMenu