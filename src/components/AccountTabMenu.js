import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import UpdatePassword from '../modules/user/UpdatePassword';

class AccountTabMenu extends Component {
	state = {
		key: 'account-info'
	}

	render() {
		const { key } = this.state;
		return (
			<div className="mt-4 tabs border_0">
				<Tabs activeKey={key} onSelect={(key) => this.setState({ key })}>
					<Tab eventKey="account-info" title="Account Details">
						<section className="tab-body text-center">
							<p className="fs-22 title-blue">Account Details</p>
							<img src="./assets/images/home.jpg" />
						</section>
					</Tab>
					<Tab eventKey="update-password" title="Update Password">
						<UpdatePassword />
					</Tab>
				</Tabs>
			</div>
		)
	}
}

export default AccountTabMenu