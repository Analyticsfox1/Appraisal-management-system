import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {
	state = {
		ceo: {}
	}

	componentWillMount() {
		let data = JSON.parse(sessionStorage.getItem('ceoData'));
		this.setState({
			ceo: data
		})
	}

	render() {
		const { ceo } = this.state;

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
							<h6 style={{ overflowWrap: 'break-word' }} className="text-white">{ceo ? ceo.name : 'CEO'}</h6>
						</div>
					</div>
					<div className="custom-hr">
						<hr />
					</div>
					<li><NavLink to="/CEO-kra-management" activeClassName="active"><i className="fas fa-tasks"></i><span>KRA Management</span></NavLink></li>
					<li><NavLink to="/CEO-team-management" activeClassName="active"><i className="fas fa-users"></i><span>Team Management</span></NavLink></li>
					<li><NavLink to="/CEO-organizational-goal" activeClassName="active"><i className="fas fa-bullseye"></i><span>Organizational Goal</span></NavLink></li>
					<li><NavLink to="/CEO-push-notification" activeClassName="active"><i className="fas fa-flag"></i><span>Push Notification</span></NavLink></li>
				</ul>
			</aside>
		)
	}
}

export default LeftMenu