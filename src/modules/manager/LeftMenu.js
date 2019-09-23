import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {

	state = {
		manager: {}
	}

	componentWillMount() {
		let data = JSON.parse(sessionStorage.getItem('managerData'));
		this.setState({
			manager: data
		})
	}

	render() {
		const { manager } = this.state;
		return (
			<aside className="LeftMenu">
				<div className="logo-image"></div>
				<ul className="dash_ul">
					<p className="text-white"><img src="./assets/images/admin.png" style={{ height: '100px', width: '100px' }} />Welcome, {manager ? manager.name : 'PM'} </p>
					<li><NavLink to="/manager-dashboard" activeClassName="active"><i className="fas fa-home"></i><span>My Dashboard</span></NavLink></li>
					<li><NavLink to="/manager-team-management" activeClassName="active"><i className="fas fa-users"></i><span>Team Management</span></NavLink></li>
					<li><NavLink to="/manager-employee-probation-management" activeClassName="active"><i className="fas fa-user-clock"></i><span>Employee In Probation</span></NavLink></li>
					<li><NavLink to="/manager-probation-form" activeClassName="active">&nbsp;<i className="fas fa-hourglass-half"></i><span>&nbsp;Probation Form</span></NavLink></li>
				</ul>
			</aside>
		)
	}
}

export default LeftMenu