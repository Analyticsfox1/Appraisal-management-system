import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import UserHeader from './UserHeader';
import ProbationTabMenu from '../../components/ProbationTabMenu';

class ProbationForm extends Component {
	render() {
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main>
					<UserHeader {...this.props} />
					<section className="container-fluid">
						<ProbationTabMenu />
					</section>
				</main>
			</div>
		)
	}
}

export default ProbationForm