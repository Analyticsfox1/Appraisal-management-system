import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Select from 'react-select';

class EditUser extends Component {
	state = {
		show: false,
		selectedRole: null,
		selectedStatus: null,
		employee_name: '',
		employee_id: '',
		email: '',
		invalidEmail: false,
		mobile_no: '',
		invalidMobile: false,
		inValidRole: false,
		inValidStatus: false,
		errors: {
			selectedRoleError: null,
			employee_nameError: null,
			employee_idError: null,
			emailError: null,
			mobile_noError: null,
		}
	}

	componentDidMount() {
		this.handleShow()
	}

	restrictAlphabets = (e) => {
		const regx = "^[0-9]*$"
		if (e.key.match(regx)) {
			return true
		}
		else {
			e.preventDefault()
		}
	}

	handleShow = () => {
		this.setState({ show: true })
	}

	handleClose = () => {
		this.setState({ show: false })
		this.props.editUser();
	}

	handleRole = (selectedRole) => {
		this.setState({ selectedRole });
	}

	handleStatus = (selectedStatus) => {
		this.setState({ selectedStatus });
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleValidate = (e) => {
		const { errors } = this.state;
		let name = e.target.name;
		let value = e.target.value;
		if (value === "" || value === null || value === undefined) {
			this.setState({ errors: { ...errors, [name + 'Error']: true } });
		}
		else {
			this.setState({ errors: { ...errors, [name + 'Error']: false } });
		}
		if (name === 'email') {
			let emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (value && !value.match(emailRegx)) {
				this.setState({
					invalidEmail: true
				});
			}
			else {
				this.setState({
					invalidEmail: false
				});
			}
		}
		if (name === 'mobile_no') {
			if (value && value.length < 10) {
				this.setState({
					invalidMobile: true
				});
			}
			else {
				this.setState({
					invalidMobile: false
				});
			}
		}
	}

	onValidate = (name) => {
		const { selectedRole, selectedStatus } = this.state;
		if (name === 'selectedRole') {
			if (selectedRole === "" || selectedRole === null || selectedRole === undefined) {
				this.setState({ inValidRole: true })
			}
			else {
				this.setState({ inValidRole: false })
			}
		}
		if (name === 'selectedStatus') {
			if (selectedStatus === "" || selectedStatus === null || selectedStatus === undefined) {
				this.setState({ inValidStatus: true })
			}
			else {
				this.setState({ inValidStatus: false })
			}
		}
	}

	handleSubmit = () => {
		const { errors } = this.state;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
			}
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { show, selectedRole, selectedStatus, employee_name, employee_id, email, invalidEmail, mobile_no, invalidMobile, inValidRole, inValidStatus, errors } = this.state;
		return (
			<div>
				<Modal
					className="add-user"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show}
				// onHide={this.handleClose}
				>
					<Modal.Header>
						<Modal.Title>Edit User</Modal.Title>
					</Modal.Header>
					<Modal.Body className="p-4">
						<div className="row">
							<div className="col-md-4">
								<label>Role</label>
								<Select
									value={selectedRole}
									onChange={this.handleRole}
									onBlur={() => this.onValidate("selectedRole")}
									placeholder="Role"
								/>
								{
									inValidRole &&
									<span className="errorMsg">Please select role</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Employee Name</label>
								<input
									type="text"
									className="form-input"
									name="employee_name"
									value={employee_name}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Name" />
								{
									errors.employee_nameError &&
									<span className="errorMsg">Please enter employee name</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Employee ID</label>
								<input
									type="text"
									className="form-input"
									name="employee_id"
									value={employee_id}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter ID" />
								{
									errors.employee_idError &&
									<span className="errorMsg">Please enter employee id</span>
								}
							</div>
						</div>
						<div className="row">
							<div className="form-group col-md-4">
								<label>Email ID</label>
								<input
									type="text"
									className="form-input"
									name="email"
									value={email}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter email" />
								{
									errors.emailError &&
									<span className="errorMsg">Please enter email</span>
								}
								{
									invalidEmail &&
									<span className="errorMsg">Please enter valid email</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Mobile No.</label>
								<input
									type="text"
									pattern="\d*"
									maxLength="10"
									className="form-input"
									name="mobile_no"
									value={mobile_no}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									onKeyPress={this.restrictAlphabets}
									placeholder="Enter mobile number" />
								{
									errors.mobile_noError &&
									<span className="errorMsg">Please enter Mobile number</span>
								}
								{
									invalidMobile &&
									<span className="errorMsg">Please enter valid Mobile number</span>
								}
							</div>
							<div className="col-md-4">
								<label>Status</label>
								<Select
									value={selectedStatus}
									onChange={this.handleStatus}
									onBlur={() => this.onValidate("selectedStatus")}
									placeholder="Status"
								/>
								{
									inValidStatus &&
									<span className="errorMsg">Please select status</span>
								}
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button className="btn-success" onClick={this.handleSubmit}>Update</Button>
						<Button className="btn-danger" onClick={this.handleClose}>Cancel</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default EditUser

