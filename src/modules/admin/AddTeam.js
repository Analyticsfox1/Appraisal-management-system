import React, { Component } from 'react';
import Select from 'react-select';
import { Button, Modal } from 'react-bootstrap';
import { findIndex } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getManagerList, getEmployeeList, addTeam } from '../../utils/admin';

class AddTeam extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
			projectName: '',
			manager: null,
			employees: [],
			comment: '',
			managerOption: '',
			employeeOption: '',
			errors: {
				projectNameError: null,
				commentError: null,
			}
		}
	}

	componentDidMount() {
		this.handleShow();
		this.MangerList();
		this.EmployeeList();
	}

	MangerList = () => {
		getManagerList().then(response => {
			this.setState({
				managerOption: response.data && response.data.data ? response.data.data : []
			})
		})
	}

	EmployeeList = () => {
		getEmployeeList().then(response => {
			this.setState({
				employeeOption: response.data && response.data.data ? response.data.data : []
			})
		})
	}

	handleShow = () => {
		this.setState({ show: true })
	}

	handleClose = () => {
		this.setState({ show: false })
		this.props.addTeam();
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleManager = manager => {
		this.setState({ manager })
	}

	handleMember = employees => {
		this.setState({ employees })
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
	}

	handleSubmit = () => {
		const { errors, projectName, manager, employees, comment } = this.state;
		let isAdd = true;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isAdd = false;
			}
		}
		let obj = { projectName, manager, employees, comment }
		if (isAdd) {
			addTeam(obj).then(response => {
				if (response.data && response.data.error === 'false') {
					toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
				}
				if (response.data.error === 'true') {
					toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
					return false;
				}
			})
			this.handleClose();
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { show, projectName, manager, employees, comment, managerOption, employeeOption, errors } = this.state;

		return (
			<div>
				<ToastContainer />
				<Modal
					className="add-team"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show}
				// onHide={this.handleClose}
				>
					<Modal.Header>
						<Modal.Title>Add Team</Modal.Title>
					</Modal.Header>
					<Modal.Body className="p-4">
						<div className="row mt-3">
							<div className="col-md-3">
								<label>Name of the project:</label>
							</div>
							<div className="col-md-6">
								<input
									type="text"
									className="form-input"
									name="projectName"
									value={projectName}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Project Name" />
								{
									errors.projectNameError &&
									<span className="errorMsg">Please enter project name</span>
								}
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-md-3">
								<label>Manager:</label>
							</div>
							<div className="col-md-6">
								<Select
									className="m-0 w-100"
									value={manager}
									onChange={this.handleManager}
									options={managerOption}
									valueKey="userId"
									labelKey="managerName"
									getOptionLabel={(option) => option["managerName"]}
									getOptionValue={(option) => option["userId"]}
									placeholder="Manager"
								/>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-md-3">
								<label>Team Member:</label>
							</div>
							<div className="col-md-6">
								<Select
									className="m-0 w-100"
									value={employees}
									onChange={this.handleMember}
									options={employeeOption}
									valueKey="userId"
									labelKey="employeeName"
									getOptionLabel={(option) => option["employeeName"]}
									getOptionValue={(option) => option["userId"]}
									placeholder="Employee"
									isMulti={true}
								/>
							</div>
							{/* <div className="col-md-2">
								<button className="add-member ml-auto"> Add Member</button>
							</div> */}
						</div>

						<div className="row mt-4">
							<div className="col-md-3">
								<label>comment:</label>
							</div>
							<div className="col-md-9">
								<textarea
									type="text"
									className="form-input m-0 w-100"
									name="comment"
									value={comment}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter comment" />
								{
									errors.commentError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
						</div>

						<div className="col-md-3">
							<button className="add-member"> Initiate KRA</button>
						</div>

					</Modal.Body>
					<Modal.Footer>
						<Button className="btn-danger" onClick={this.handleClose}>Cancel</Button>
						<Button className="btn-success" onClick={this.handleSubmit}>Create</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default AddTeam