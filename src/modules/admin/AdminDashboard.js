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
											<div className="d-flex justify-content-center">
												<i className="fas fa-users bg1 fa-3x m-0"></i>
											</div>
											<p className="font-weight-normal mt-3">Teams</p>
											<p className="font-weight-normal fs-24"><Link className="title-orange" to="/team-management">{adminDashboardData ? adminDashboardData.teamCount : 'No teams are found'}</Link></p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<div className="d-flex justify-content-center">
												<i className="fas fa-user-plus fa-3x bg2 m-0"></i>
											</div>
											<p className="font-weight-normal mt-3">Member Assign to Teams</p>
											<p className="font-weight-normal fs-24"><Link className="title-orange" to="/member-assigned">{adminDashboardData ? adminDashboardData.membersAssigned : 'No members are found'}</Link></p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<div className="d-flex justify-content-center">
												<i className="fas fa-user-times fa-3x bg3 m-0"></i>
											</div>
											<p className="font-weight-normal mt-3">Member not Assign to Teams</p>
											<p className="font-weight-normal fs-24"><Link className="title-orange" to="/member-not-assigned">{adminDashboardData ? adminDashboardData.membersNotAssigned : 'No members are found'}</Link></p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<div className="d-flex justify-content-center">
												<i className="fas fa-user fa-3x bg4 m-0"></i>
											</div>
											<p className="font-weight-normal mt-3">New Registration</p>
											<p className="font-weight-normal fs-24"><Link className="title-orange" to="/new-register">{adminDashboardData ? adminDashboardData.newRegistrations : 'No new registartion found'}</Link></p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 mt-4">
								<div className="card2 bg-white">
									<div className="card-body">
										<div className="text-center">
											<img alt="user" src="https://lh6.googleusercontent.com/proxy/4kqcqzxi9mpv1Kt2QVUzLWLJY-VmGMHyH2wvkrF_bAqEzJUoUw5ZDtdjw3dY7gDW6XSnVdfvKEeRUIWuQ-tnr1VxcD9i=s0-d" />
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