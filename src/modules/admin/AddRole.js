import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { addRole } from '../../utils/admin';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();

class AddRole extends Component {
	state = {
		show: false,
		roleName: '',
		description: '',
		errors: {
			roleNameError: null,
			descriptionError: null,
		}
	}

	componentDidMount() {
		this.handleShow()
	}

	handleShow = () => {
		this.setState({ show: true })
	}

	handleClose = () => {
		this.setState({ show: false })
		this.props.addRole();
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
	}

	handleSubmit = () => {
		const { errors, roleName, description } = this.state;
		let isAdd = true;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isAdd = false;
			}
		}
		let obj = { roleName, description }
		if (isAdd) {
			addRole(obj).then(response => {
				if (response.data.error === 'false') {
					toast.success("Role Added Successfully", { type: toast.TYPE.SUCCESS, autoClose: 2000 })
				}
				if (response.data.error === 'true') {
					toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
				}
				this.handleClose();
			})
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { show, roleName, description, errors } = this.state;
		return (
			<div>
				<ToastContainer />
				<Modal
					className="add-role"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show}
				>
					<Modal.Header>
						<Modal.Title>Add Role</Modal.Title>
					</Modal.Header>
					<Modal.Body className="p-4">
						<div>
							<div className="col-md-12">
								<label>Role Name</label>
								<input
									type="text"
									className="form-input"
									name="roleName"
									value={roleName}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter role name" />
								{
									errors.roleNameError &&
									<span className="errorMsg">Please enter role name</span>
								}
							</div>
							<div className="form-group mt-2 col-md-12">
								<label>Description</label>
								<textarea
									type="text"
									className="form-input"
									name="description"
									value={description}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter description" />
								{
									errors.descriptionError &&
									<span className="errorMsg">Please enter description</span>
								}
							</div>
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

export default AddRole