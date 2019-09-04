import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import UserHeader from './UserHeader';
import AccountTabMenu from '../../components/AccountTabMenu';

class MyAccount extends Component {
	render() {
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main>
					<UserHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">My Account</h5>
						<AccountTabMenu />
					</section>
				</main>
			</div>
		)
	}
}

export default MyAccount