import React, { Component } from 'react';
import LeftMenu from '../ceo/LeftMenu';
import CeoHeader from '../ceo/CeoHeader';

class KraManagement extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	render() {
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main className="bg-white">
					<CeoHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">KRA Management</h5>
					</section>
				</main>
			</div>
		)
	}
}

export default KraManagement