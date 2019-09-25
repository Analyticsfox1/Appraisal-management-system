import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {

	state = {
		user: {}
	}

	componentWillMount() {
		let data = JSON.parse(sessionStorage.getItem('userData'));
		this.setState({
			user: data
		})
	}
	render() {
		const { user } = this.state;
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
							<h6 style={{ overflowWrap: 'break-word' }} className="text-white">{user ? user.name : 'User'}</h6>
						</div>
					</div>
					<div className="custom-hr">
						<hr />
					</div>
					<li><NavLink to="/dashboard" activeClassName="active"><i className="fas fa-home"></i><span>My Dashboard</span></NavLink></li>
					{/* <li className="has_drop"><NavLink><i className="fas fa-tasks"></i><span>KRA Management</span></NavLink>
						<ul className="custom_drop"> */}
					<li><NavLink to="/probation-form" activeClassName="active"><i className="fas fa-hourglass-half"></i><span>&nbsp;Probation Form</span></NavLink></li>
					<li><NavLink to="/performance-appraisal" activeClassName="active"><i className="fas fa-briefcase"></i><span>Performance Appraisal</span></NavLink></li>
					<li><NavLink to="/monthly-meeting" activeClassName="active"><i className="far fa-calendar-alt"></i><span>Monthly Meeting</span></NavLink></li>
					{/* </ul>
					</li> */}
					<li><NavLink to="/account" activeClassName="active"><i className="far fa-user"></i><span>My Account</span></NavLink></li>
				</ul>
			</aside>
		)
	}
}

export default LeftMenu