import React, { Component } from 'react';
import LeftMenu from '../ceo/LeftMenu';
import CeoHeader from '../ceo/CeoHeader';

class PushNotification extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	render() {
		const { search } = this.state;
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main className="bg-white">
					<CeoHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">Push Notification</h5>
					</section>
				</main>
			</div>
		)
	}
}

export default PushNotification