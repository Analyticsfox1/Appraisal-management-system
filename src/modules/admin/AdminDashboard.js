import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import moment from 'moment';
class AdminDashboard extends Component {

	constructor() {
		super();
		this.state = {
			dashboardData: []
		}
	}

	render() {
		const { dashboardData } = this.state;
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main>
					<AdminHeader {...this.props} />
					<section className="container-fluid dash_space admin-dashboard">
						<div className="row">
							<div className="col-md-4">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="no_data text-center">
											<img alt="team" src="./assets/images/team.png" />
											<h5 className="font-weight-normal m-0">Teams</h5>
											<h5 className="font-weight-normal m-0">10</h5>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="no_data text-center">
											<img alt="user" src="./assets/images/user.png" />
											<h5 className="font-weight-normal m-0">Graph</h5>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="no_data text-center">
											<img alt="announcement" src="./assets/images/announcement.svg" />
											<h5 className="font-weight-normal m-0">Member Assign to Teams</h5>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4 mt-3">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="no_data text-center">
											<img alt="team" src="./assets/images/team.png" />
											<h5 className="font-weight-normal m-0">Member not Assign to Teams</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		)
	}
}

export default AdminDashboard