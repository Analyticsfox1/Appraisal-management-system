import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { getUserById } from '../../utils/admin';
import moment from 'moment';
class ViewUserDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false,
			userDetails: props.data,
		}
	}

	handleClose = () => {
		this.setState({
			show: false
		})
	}

	handleShow = () => {
		this.setState({
			show: true
		})
	}

	render() {
		const { show, userDetails } = this.state;
		const { data } = this.props;
		return (
			<>
				<a className="detail-link" onClick={this.handleShow}> {data.uniqueId} </a>
				<Modal
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show}
					onHide={this.handleClose}>
					<Modal.Header>
						<Modal.Title>User Details</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<div className="row">
								<div className="col-md-6">
									<p><b>Employee ID : </b> {userDetails.uniqueId}</p>
									<p><b>Employee Name : </b> {userDetails.name}</p>
									<p><b>Email Id : </b> {userDetails.email}</p>
									<p><b>Address : </b> {userDetails.address}</p>
								</div>
								<div className="col-md-6">
									<p><b>Aadhar No. : </b> {userDetails.aadhar}</p>
									<p><b>Account No. : </b> {userDetails.accountNo}</p>
									<p><b>Role : </b>{userDetails.role}</p>
									<p><b>Status : </b> {userDetails.status}</p>
								</div>
							</div>
						</div>
					</Modal.Body>

				</Modal>
			</>
		);
	}
}

export default ViewUserDetails;