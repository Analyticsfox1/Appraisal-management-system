import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import UserHeader from './UserHeader';
import ProbationSection from './ProbationSection';

class ProbationForm extends Component {
	render() {
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main>
					<UserHeader {...this.props} />
					<section className="container-fluid mt-3">
					<h5 className="text-center mx-auto mb-3 user-box">Probation Form</h5>
						<ProbationSection />
					</section>
				</main>
			</div>
		)
	}
}

export default ProbationForm