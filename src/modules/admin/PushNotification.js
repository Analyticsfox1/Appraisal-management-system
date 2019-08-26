import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import Select from 'react-select';

const messageOption = [
	{ value: 'Off', label: 'Off' },
	{ value: 'On', label: 'On' },
];

const alertType = [
	{ value: 'Message', label: 'Message' },
	{ value: 'Email', label: 'Email' },
]

class PushNotification extends Component {

	constructor() {
		super();
		this.state = {
			enableMessage: messageOption[0],
			selectedType: alertType[0],
			alertMessage: ''
		}
	}

	handleMessageChange = enableMessage => {
		this.setState({ enableMessage });
	};

	handleAlertType = selectedType => {
		this.setState({ selectedType });
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		const { enableMessage, selectedType, alertMessage } = this.state;
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main className="bg-white">
					<AdminHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">Push Notification</h5>
						<div className="col-md-6 mt-5 d-flex align-items-center">
							<label className="notification-label">Enable Alert Message:</label>
							<Select
								value={enableMessage}
								onChange={this.handleMessageChange}
								options={messageOption}
							/>
						</div>
						<div className="col-md-9 mt-4 d-flex align-items-center">
							<label className="notification-label">Alert Message:</label>
							<textarea value={alertMessage} name="alertMessage" onChange={this.handleChange} />
						</div>
						<div className="col-md-6 mt-4 d-flex align-items-center">
							<label className="notification-label">Alert Type:</label>
							<Select
								value={selectedType}
								onChange={this.handleAlertType}
								options={alertType}
							/>
						</div>
						<div className="mt-4 col-md-9 d-flex justify-content-end">
							<button className="discard-btn mr-2">Discard Changes</button>
							<button className="save-btn">Save</button>
						</div>
					</section>
				</main>
			</div>
		)
	}
}

export default PushNotification