import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { getUserById } from '../../utils/admin';

class ViewUserDetails extends Component {

	state = {
		show: false,
		userDetails: [],
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

	componentDidMount() {
		let obj = this.props.id;
		getUserById(obj).then(response => {
			this.setState({
				userDetails: response.data && response.data.data ? response.data.data : []
			})
		})
	}

	render() {
		const { show, userDetails } = this.state;
		return (
			<>
				<a style={{ color: '#d26425', textDecoration: 'underline', cursor: 'pointer' }} onClick={this.handleShow}> {this.props.id} </a>

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
									<p><b>Email Id : </b> {userDetails.officialEmail}</p>
									<p><b>Mobile No : </b> {userDetails.primaryMobileNo}</p>

								</div>
								<div className="col-md-6">
									<p><b>Gender : </b> {userDetails.gender}</p>
									<p><b>Date of Joining : </b> 01/01/2019</p>
									<p><b>Role : </b> CEO</p>
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