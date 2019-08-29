import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import UserHeader from './UserHeader';
import MonthlyTabMenu from '../../components/MonthlyTabMenu';


class MonthlyMeeting extends Component {
	render() {
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main>
					<UserHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">Monthly Meeting</h5>
						<MonthlyTabMenu />
					</section>
				</main>
			</div>
		)
	}
}

export default MonthlyMeeting