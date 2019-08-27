import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

class EditRole extends Component {
	state = {
		show: false,
		role_name: '',
		description: '',
		errors: {
			role_nameError: null,
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
		this.props.editRole();
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
		const { errors } = this.state;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
			}
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { show, role_name, description, errors } = this.state;
		return (
			<div>
				<Modal
					className="add-role"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show}
				// onHide={this.handleClose}
				>
					<Modal.Header>
						<Modal.Title>Edit Role</Modal.Title>
					</Modal.Header>
					<Modal.Body className="p-4">
						<div>
							<div className="col-md-12">
								<label>Role Name</label>
								<input
									type="text"
									className="form-input"
									name="role_name"
									value={role_name}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter role name" />
								{
									errors.role_nameError &&
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
						<Button className="btn-success" onClick={this.handleSubmit}>Update</Button>
						<Button className="btn-danger" onClick={this.handleClose}>Cancel</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default EditRole