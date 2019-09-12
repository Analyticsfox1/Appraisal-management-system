import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import UpdatePassword from '../pages/UpdatePassword';

class AccountTabMenu extends Component {
	state = {
		key: 'update-password'
	}

	render() {
		const { key } = this.state;
		return (
			<div className="mt-4 tabs border_0">
				<Tabs activeKey={key} onSelect={(key) => this.setState({ key })}>
					<Tab eventKey="account-info" title="Account Details">
						<section className="tab-body">
							<h5 className="title-blue">Account Details</h5>
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