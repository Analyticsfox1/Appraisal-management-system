import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import UserHeader from './UserHeader';

class KraManagement extends Component {
	render() {
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main>
					<UserHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">KRA Management</h5>
					</section>
				</main>
			</div>
		)
	}
}

export default KraManagement