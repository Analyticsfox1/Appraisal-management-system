import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {
	render() {
		return (
			<aside className="LeftMenu">
				<div className="logo-image"></div>
				<ul className="dash_ul">
					<p className="text-white"><img src="./assets/images/admin.png" style={{ height: '100px', width: '100px' }} />Welcome, PM</p>
					<li><NavLink to="/manager-dashboard" activeClassName="active"><i className="fas fa-home"></i><span>My Dashboard</span></NavLink></li>
				</ul>
			</aside>
		)
	}
}

export default LeftMenu