import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import OneToOneMeeting from '../modules/user/OneToOneMeeting';

class MonthlyTabMenu extends Component {
	state = {
		key: 'meeting'
	}

	render() {
		const { key } = this.state;
		return (
			<div className="mt-4 tabs border_0">
				<Tabs activeKey={key} onSelect={(key) => this.setState({ key })}>
					<Tab eventKey="meeting" title="One to One Meeting">
						<OneToOneMeeting />
					</Tab>
				</Tabs>
			</div>
		)
	}
}

export default MonthlyTabMenu