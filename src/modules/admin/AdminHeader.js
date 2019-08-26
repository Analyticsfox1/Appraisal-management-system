import React, { Component } from 'react'

class AdminHeader extends Component {

	onLogOut = () => {
		this.props.history.push('/')
	}
	
	render() {
		return (
			<header>
				<div className="dash_head d-flex">
					<button onClick={this.onLogOut} className="btn btn-danger btn2 ml-auto"><i className="fas fa-power-off"></i> Logout	</button>
				</div>
			</header>
		)
	}
}

export default AdminHeader