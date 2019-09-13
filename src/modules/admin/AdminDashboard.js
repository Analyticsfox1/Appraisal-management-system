import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import moment from 'moment';
import { Link } from "react-router-dom";
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
							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<i className="fas fa-users fa-2x"></i>
											<p className="font-weight-normal m-0">Teams
											<span className="font-weight-normal m-0"><Link className="title-orange" to="/team-management">{adminDashboardData ? adminDashboardData.teamCount : null}</Link></span>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<i className="fas fa-user-plus fa-2x"></i>
											<span className="font-weight-normal mb-3">Member Assign to Teams</span>
											<span className="font-weight-normal title-orange m-0">{adminDashboardData ? adminDashboardData.membersAssigned : null}</span>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<i className="fas fa-user-times fa-2x"></i>
											<span className="font-weight-normal m-0">Member not Assign to Teams</span>
											<span className="font-weight-normal title-orange m-0">{adminDashboardData ? adminDashboardData.membersNotAssigned : null}</span>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<i className="fas fa-user-times fa-2x"></i>
											<span className="font-weight-normal m-0">New Registration</span>
											<span className="font-weight-normal title-orange m-0">10</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="col-md-12 mt-4">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<img alt="user" src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/05/05104808/pie-300x221.png" />
										</div>
									</div>
								</div>
							</div> */}
					</section>
				</main>
			</div>
		)
	}
}

export default AdminDashboard