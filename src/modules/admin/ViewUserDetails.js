import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ViewUserDetails(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (

		<>
			<a style={{ color: '#d26425', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleShow}> {props.name} </a>

			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>User Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<div className="row">
							<div className="col-md-6">
								<p><b>Employee ID : </b> PR2008193946</p>
								<p><b>Employee Name : </b> Prakash</p>
								<p><b>Email Id : </b> piyer@teracrunch.com</p>
								<p><b>Mobile No : </b> 98744563210</p>
							
							</div>
							<div className="col-md-6">
								<p><b>DOB : </b> 15/05/1965</p>
								<p><b>Date of Joining : </b> 01/01/2019</p>
								<p><b>Role : </b> Admin</p>
								<p><b>Status : </b> Active</p>

							</div>
						</div>
					</div>
				</Modal.Body>

			</Modal>
		</>
	);
}