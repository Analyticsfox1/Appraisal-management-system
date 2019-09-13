import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import moment from 'moment';
import { getAdminDashboard } from '../../utils/admin';
class AdminDashboard extends Component {

	constructor() {
		super();
		this.state = {
			adminDashboardData: []
		}
	}

	componentDidMount() {
		this.adminDashboardList();
	}

	adminDashboardList = () => {
		getAdminDashboard().then(response => {
			this.setState({
				adminDashboardData: response && response.data ? response.data : []
			})
		})
	}

	render() {
		const { adminDashboardData } = this.state;
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
										<div className="mt-5 text-center">
											<i className="fas fa-users fa-4x"></i>
											<h5 className="font-weight-normal m-0 mt-4 mb-3">Teams</h5>
											<h4 className="font-weight-normal title-orange m-0">{adminDashboardData ? adminDashboardData.teamCount : null}</h4>
										</div>
									</div>
								</div>
							</div>


							<div className="col-md-4">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="mt-5 text-center">
											<i className="fas fa-user-plus fa-4x"></i>
											<h5 className="font-weight-normal m-0 mt-4 mb-3">Member Assign to Teams</h5>
											<h4 className="font-weight-normal title-orange m-0">{adminDashboardData ? adminDashboardData.membersAssigned : null}</h4>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="mt-5 text-center">
											<i className="fas fa-user-times fa-4x"></i>
											<h5 className="font-weight-normal m-0 mt-4 mb-3">Member not Assign to Teams</h5>
											<h4 className="font-weight-normal title-orange m-0">{adminDashboardData ? adminDashboardData.membersNotAssigned : null}</h4>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-12 mt-4">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<img alt="user" src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/05/05104808/pie-300x221.png" />
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