import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { getRoleByName } from '../../utils/admin';
import moment from 'moment';

class ViewRoleDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false,
			roleDetails: props.data,
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
		const { show, roleDetails } = this.state;
		const { data } = this.props;
		return (
			<>
				<a className="detail-link" onClick={this.handleShow}> {data.roleName} </a>

				<Modal
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show}
					onHide={this.handleClose}>
					<Modal.Header>
						<Modal.Title>Role Details</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<div className="row">
								<div className="col-md-6">
									<p><b>Created Date : </b> {moment(roleDetails.createdDate).format('MM-DD-YYYY')}</p>
									<p><b>Role ID : </b> {roleDetails.roleId}</p>
								</div>
								<div className="col-md-6">
									<p><b>Role Name : </b> {roleDetails.roleName}</p>
									<p><b>Role Description: </b> {roleDetails.description}</p>
								</div>
							</div>
						</div>
					</Modal.Body>

				</Modal>
			</>
		);
	}
}

export default ViewRoleDetails;