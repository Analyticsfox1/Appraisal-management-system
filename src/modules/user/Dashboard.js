import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import UserHeader from './UserHeader';

class Dashboard extends Component {
	render() {
		console.log("called Dashboard")
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main>
					<UserHeader { ...this.props} />
					<section className="container-fluid dash_space">
						<div className="row">
							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card2_head d-flex align-items-center">
										<i className="fas icon_light fa-birthday-cake"></i>
										<h5 className="font-weight-normal m-0">Birthday</h5>
									</div>
									<div className="card-body">
										<div className="no_data text-center">
											<img alt="birthday" src="./assets/images/birthday.svg" />
											No Birthday Buddies Found.
											</div>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card2_head d-flex align-items-center">
										<i className="fas icon_light fa-user-plus bg2"></i>
										<h5 className="font-weight-normal m-0">New Joins</h5>
									</div>
									<div className="card-body">
										<div className="no_data text-center">
											<img alt="user" src="./assets/images/user.png" />
											No New Joinees i past 15 days.
											</div>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card2_head d-flex align-items-center">
										<i className="fas icon_light fa-users bg3"></i>
										<h5 className="font-weight-normal m-0">Teams</h5>
									</div>
									<div className="card-body">
										<div className="no_data text-center">
											<img alt="team" src="./assets/images/team.png" />
											No Teams are Found.
											</div>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="card2 bg-white">
									<div className="card2_head d-flex align-items-center">
										<i className="fas fa-bullhorn bg4 icon_light"></i>
										<h5 className="font-weight-normal m-0">Announcement</h5>
									</div>
									<div className="card-body">
										<div className="no_data text-center">
											<img alt="announcement" src="./assets/images/announcement.svg" />
											No Announcement Found.
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

export default Dashboard