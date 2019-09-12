import React, { Component } from 'react';
import Select from 'react-select';
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { getManagerList, getEmployeeList, addTeam } from '../../utils/admin';
toast.configure();

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
				managerError: null,
				employeesError: null
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
			console.log("TCL: AddTeam -> EmployeeList -> response", response)
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

	onValidate = (name) => {
		const { manager, employees, errors } = this.state;
		if (name === 'manager') {
			if (manager === "" || manager === null || manager === undefined) {
				this.setState({ errors: { ...errors, managerError: true } })
			}
			else {
				this.setState({ errors: { ...errors, managerError: false } })
			}
		}
		if (name === 'employee') {
			if (employees === "" || employees === null || employees === undefined) {
				this.setState({ errors: { ...errors, employeesError: true } })
			}
			else {
				this.setState({ errors: { ...errors, employeesError: false } })
			}
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
		let managerId = manager ? manager.userId : null
		let obj = { projectName, managerId, employees, comment }
		if (isAdd) {
			addTeam(obj).then(response => {
				if (response.data && response.data.error === 'false') {
					toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
				}
				if (response.data && response.data.error === 'true') {
					toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
				}
				this.handleClose();
			})
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
									onBlur={() => this.onValidate('manager')}
									valueKey="userId"
									labelKey="managerName"
									getOptionLabel={(option) => option["managerName"]}
									getOptionValue={(option) => option["userId"]}
									placeholder="Manager"
								/>
								{
									errors.managerError &&
									<span className="errorMsg">Please select manager</span>
								}
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
									onBlur={() => this.onValidate('employee')}
									onChange={this.handleMember}
									options={employeeOption}
									valueKey="userId"
									labelKey="employeeName"
									getOptionLabel={(option) => option["employeeName"]}
									getOptionValue={(option) => option["userId"]}
									placeholder="Employee"
									isMulti={true}
								/>
								{
									errors.employeesError &&
									<span className="errorMsg">Please select employee</span>
								}
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