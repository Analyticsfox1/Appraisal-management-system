import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import ProbationSectionB from '../modules/user/ProbationSectionB';
import ProbationSectionC from '../modules/user/ProbationSectionC';
import ProbationSectionD from '../modules/user/ProbationSectionD';
import ProbationSectionE from '../modules/user/ProbationSectionE';

class ProbationTabMenu extends Component {
	state = {
		key: 'sectionB'
	}

	render() {
		const { key } = this.state;
		return (
			<div className="mt-4 probation-tabs border_0">
				<Tabs activeKey={key} onSelect={(key) => this.setState({ key })}>
					<Tab eventKey="sectionB" title="Performance Appraisal">
						<ProbationSectionB />
					</Tab>
					<Tab eventKey="sectionC" title="Training Needs / Undertaken">
						<ProbationSectionC />
					</Tab>
					<Tab eventKey="sectionD" title="Overall Rating">
						<ProbationSectionD />
					</Tab>
					<Tab eventKey="sectionE" title="Final Outcome">
						<ProbationSectionE />
					</Tab>
				</Tabs>
			</div>
		)
	}
}

export default ProbationTabMenu