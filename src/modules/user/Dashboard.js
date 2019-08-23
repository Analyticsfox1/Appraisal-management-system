import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		return (
			<div className="dash_grid">
				<aside>
					<div className="logo-image"></div>
					<ul className="dash_ul">
						<li><NavLink to="/dashboard" activeClassName="active"><i className="fas fa-home"></i><span>My Dashboard</span></NavLink></li>
						<li><NavLink activeClassName="active"><i className="fas fa-tasks"></i><span>KRA Management</span></NavLink></li>
						<li className="has_drop">
							<NavLink>
								<i className="fas fa-graduation-cap"></i><span>Appraisal</span>
							</NavLink>
							<ul className="custom_drop">
								<li><NavLink activeClassName="active"><i className="fas fa-theater-masks"></i><span>Performance</span></NavLink></li>
								<li><NavLink activeClassName="active">&nbsp;<i className="far fa-calendar-alt"></i><span>&nbsp;Monthly</span></NavLink></li>
							</ul>
						</li>
						<li><NavLink activeClassName="active"><i className="far fa-user"></i><span>My Account</span></NavLink></li>
					</ul>
				</aside>
				<main>
					<header>
						<div className="dash_head">
							<p>Welcome, User Name</p>
							<div className="time_check"><button className="btn btn2 btn-success btn-rounded">Check In <i className="far fa-clock"></i></button> 00:00 Hrs</div>
							<button className="btn btn-danger btn2"><i className="fas fa-power-off"></i> Logout	</button>
						</div>
					</header>
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
											<img src="https://www.svgrepo.com/show/243571/confetti-birthday.svg" />
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
											<img src="https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/Add-Male-User.png" />
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
											<img src="https://www.svgrepo.com/show/122958/group.svg" />
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
											<img src="https://image.flaticon.com/icons/svg/1738/1738646.svg" />
											No Data Found.
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