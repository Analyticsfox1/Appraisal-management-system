import React, { Component } from 'react'

class UserHeader extends Component {

	onLogOut = () => {
		this.props.history.push('/')
	}
	render() {
		return (
			<header>
				<div className="dash_head">
					<p>Welcome, User Name</p>
					<div className="time_check"><button className="btn btn2 btn-success btn-rounded">Check In <i className="far fa-clock"></i></button> 00:00 Hrs</div>
					<button onClick={this.onLogOut} className="btn btn-danger btn2"><i className="fas fa-power-off"></i> Logout	</button>
				</div>
			</header>
		)
	}
}

export default UserHeader