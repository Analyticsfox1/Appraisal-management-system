import React, { Component } from 'react';
import LeftMenu from '../manager/LeftMenu';
import ManagerHeader from '../manager/ManagerHeader';

class ManagerDashboard extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	render() {
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main className="bg-white">
					<ManagerHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">Dashboard</h5>
					</section>
				</main>
			</div>
		)
	}
}

export default ManagerDashboard