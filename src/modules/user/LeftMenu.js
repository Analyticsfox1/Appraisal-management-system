import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {
	render() {
		return (
			<aside className="LeftMenu">
				<div className="logo-image"></div>
				<ul className="dash_ul">
					<p className="text-white"><img src="./assets/images/admin.png" style={{ height: '100px', width: '100px' }} />Welcome, User</p>

					<li><NavLink to="/dashboard" activeClassName="active"><i className="fas fa-home"></i><span>My Dashboard</span></NavLink></li>
					<li><NavLink to="/kra-management" activeClassName="active"><i className="fas fa-tasks"></i><span>KRA Management</span></NavLink></li>
					{/* <li className="has_drop"><NavLink><i className="fas fa-graduation-cap"></i><span>Appraisal</span></NavLink>
						<ul className="custom_drop"> */}
							<li><NavLink to="/performance-appraisal" activeClassName="active"><i className="fas fa-briefcase"></i><span>Performance Appraisal</span></NavLink></li>
							<li><NavLink to="/monthly-appraisal" activeClassName="active"><i className="far fa-calendar-alt"></i><span>Monthly Appraisal</span></NavLink></li>
						{/* </ul>
					</li> */}
					<li><NavLink to="/account" activeClassName="active"><i className="far fa-user"></i><span>My Account</span></NavLink></li>
				</ul>
			</aside>
		)
	}
}

export default LeftMenu