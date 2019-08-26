import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import UserHeader from './UserHeader';

class PerformanceAppraisal extends Component {
	render() {
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main>
					<UserHeader {...this.props}/>
					<section className="container-fluid">
						Performance Appraisal
					</section>
				</main>
			</div>
		)
	}
}

export default PerformanceAppraisal