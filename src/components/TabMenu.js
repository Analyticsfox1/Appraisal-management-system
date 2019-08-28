import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import KraSettings from '../modules/user/KraSettings';
import SelfDevelopmentGoal from '../modules/user/SelfDevelopmentGoal';
import OneToOneMeeting from '../modules/user/OneToOneMeeting';

class TabMenu extends Component {
	state = {
		key: 'KRA'
	}

	render() {
		const { key } = this.state;
		return (
			<div className="mt-4 tabs border_0">
				<Tabs activeKey={key} onSelect={(key) => this.setState({ key })}>
					<Tab eventKey="KRA" title="KRA Settings">
						<KraSettings />
					</Tab>
					<Tab eventKey="self-dev" title="Self Development Goal">
						<SelfDevelopmentGoal />
					</Tab>
					<Tab eventKey="meeting" title="One to One Meeting">
						<OneToOneMeeting />
					</Tab>
				</Tabs>
			</div>
		)
	}
}

export default TabMenu