import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getRoleList, addUser } from '../../utils/admin';
import ImageUploader from 'react-images-upload';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const statusOption = [
	{ value: 'Active', label: 'Active' },
	{ value: 'Inactive', label: 'Inactive' },
];

class AddEditUser extends Component {
	state = {
		show: false,
		role: null,
		status: null,
		name: '',
		title: '',
		officialEmail: '',
		invalidofficialEmail: false,
		personalEmail: '',
		invalidpersonalEmail: false,
		primaryMobileNo: '',
		invalidprimaryMobileNo: false,
		secondaryMobileNo: '',
		invalidsecondaryMobileNo: false,
		DOJ: '',
		DOB: '',
		bloodGroup: '',
		aadharNo: '',
		invalidaadharNo: false,
		address: '',
		gender: '',
		bankName: '',
		accountNumber: '',
		invalidaccountNumber: false,
		inValidRole: false,
		inValidStatus: false,
		roleOption: [],
		errors: {
			nameError: null,
			titleError: null,
			officialEmailError: null,
			personalEmailError: null,
			primaryMobileNoError: null,
			secondaryMobileNoError: null,
			bloodGroupError: null,
			aadharNoError: null,
			addressError: null,
			bankNameError: null,
			accountNumberError: null
		}
	}

	componentDidMount() {
		this.handleShow();
		this.RoleList();
		let obj = { ...this.props.editObj };
		if(this.props.editObj){

			obj.DOB = new Date(obj.dateOfBirth);
			obj.DOJ = new Date(obj.dateOfJoining);
			
		}
		this.setState(obj);
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

	RoleList = () => {
		getRoleList().then(response => {
			this.setState({
				roleOption: response.data && response.data.data ? response.data.data : []
			})
		})
	}

	handleDOJChange = date => {
		this.setState({
			DOJ: date
		});
	};

	handleDOBChange = date => {
		this.setState({
			DOB: date
		});
	};

	onChanged = (e) => {
		this.setState({
			gender: e.currentTarget.value
		});
	}

	handleShow = () => {
		this.setState({ show: true })
	}

	handleClose = () => {
		this.setState({ show: false })
		this.props.userAddEdit();
	}

	handleRole = (role) => {
		this.setState({ role });
	}

	handleStatus = (status) => {
		this.setState({ status });
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
		if (name === 'officialEmail') {
			let emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (value && !value.match(emailRegx)) {
				this.setState({
					invalidofficialEmail: true
				});
			}
			else {
				this.setState({
					invalidofficialEmail: false
				});
			}
		}
		if (name === 'personalEmail') {
			let emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (value && !value.match(emailRegx)) {
				this.setState({
					invalidpersonalEmail: true
				});
			}
			else {
				this.setState({
					invalidpersonalEmail: false
				});
			}
		}
		if (name === 'primaryMobileNo') {
			if (value && value.length < 10) {
				this.setState({
					invalidprimaryMobileNo: true
				});
			}
			else {
				this.setState({
					invalidprimaryMobileNo: false
				});
			}
		}
		if (name === 'secondaryMobileNo') {
			if (value && value.length < 10) {
				this.setState({
					invalidsecondaryMobileNo: true
				});
			}
			else {
				this.setState({
					invalidsecondaryMobileNo: false
				});
			}
		}
		if (name === 'aadharNo') {
			if (value && value.length < 12) {
				this.setState({
					invalidaadharNo: true
				});
			}
			else {
				this.setState({
					invalidaadharNo: false
				});
			}
		}
		if (name === 'accountNumber') {
			let accountRegx = /^\d{9,18}$/;
			if (value && !value.match(accountRegx)) {
				this.setState({
					invalidaccountNumber: true
				});
			}
			else {
				this.setState({
					invalidaccountNumber: false
				});
			}
		}
	}

	onValidate = (name) => {
		const { role, status } = this.state;
		if (name === 'role') {
			if (role === "" || role === null || role === undefined) {
				this.setState({ inValidRole: true })
			}
			else {
				this.setState({ inValidRole: false })
			}
		}
	}

	handleSubmit = () => {
		const { errors, name, title, officialEmail, personalEmail, DOJ, DOB, primaryMobileNo,
			secondaryMobileNo, gender, bloodGroup, aadharNo, address, bankName, accountNumber, role, status } = this.state;
		let isAdd = true;

		if (this.props.editObj) {
			for (var val in errors) {
				if (errors[val]) {
					errors[val] = true;
					isAdd = false;
				}
			}
		}
		else {
			for (var val in errors) {
				if (errors[val] === null || errors[val]) {
					errors[val] = true;
					isAdd = false;
				}
			}
		}

		let dateOfJoining = DOJ ? moment(DOJ).format('x') : null;
		let dateOfBirth = DOB ? moment(DOB).format('x') : null;
		role.createdDate = +new Date(role.createdDate);

		let uniqueId = this.props.editObj ? this.props.editObj.uniqueId : null;
		let userId = this.props.editObj ? this.props.editObj.userId : null;
		let password = this.props.editObj ? this.props.editObj.password : null;
		let token = this.props.editObj ? this.props.editObj.token : null;
		let updatedDate = this.props.editObj ? moment(this.props.editObj.updatedDate).format('x') : null;
		let probationEndDate = this.props.editObj ? moment(this.props.editObj.probationEndDate).format('x') : null;
		let createdDate = this.props.editObj ? moment(this.props.editObj.createdDate).format('x') : null;
		
		let obj = {
			name, title, officialEmail, personalEmail, dateOfJoining, dateOfBirth, primaryMobileNo, secondaryMobileNo,
			gender, bloodGroup, aadharNo, address, bankName, accountNumber, role, uniqueId, userId, password, token, updatedDate, probationEndDate, createdDate
		}

		if (isAdd) {
			addUser(obj).then(response => {
				if (response.data && response.data.error === 'false') {
					toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
				}
				if (response.data.error === 'true') {
					toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
					return false;
				}
				this.handleClose();
			})
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { show, role, roleOption, status, name, title, address, gender, bloodGroup, bankName, accountNumber, invalidaccountNumber, officialEmail, personalEmail, invalidpersonalEmail, invalidofficialEmail, primaryMobileNo, invalidprimaryMobileNo, secondaryMobileNo, invalidsecondaryMobileNo, DOJ, DOB, aadharNo, invalidaadharNo, inValidRole, inValidStatus, errors } = this.state;
		return (
			<div>
				<ToastContainer />
				<Modal
					className="add-user"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show}
				>
					<Modal.Header>
						<Modal.Title>{this.props.editObj ? 'Edit' : 'Add'} User</Modal.Title>
					</Modal.Header>
					<Modal.Body className="p-4">
						<div className="row">

							<div className="form-group col-md-4">
								<label>Employee Name</label>
								<input
									type="text"
									className="form-input"
									name="name"
									value={name}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Name" />
								{
									errors.nameError &&
									<span className="errorMsg">Please enter employee name</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Employee Title</label>
								<input
									type="text"
									className="form-input"
									name="title"
									value={title}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter title" />
								{
									errors.titleError &&
									<span className="errorMsg">Please enter employee title</span>
								}
							</div>
							<div className="col-md-4">
								<label>Date Of Birth</label><br />
								<DatePicker
									className="form-input"
									selected={DOB}
									onChange={this.handleDOBChange}
									dateFormat="yyyy-MM-dd"
									placeholderText="YYYY-MM-DD"
								/>
							</div>

							<div className="form-group col-md-4">
								<label>Address</label>
								<textarea
									type="text"
									className="form-input"
									name="address"
									value={address}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Address" />
								{
									errors.addressError &&
									<span className="errorMsg">Please enter address</span>
								}
							</div>
							<div className="col-md-4">
								<label>Gender</label>
								<div className="mt-2">
									<label>
										<input
											type="radio"
											className="mr-3"
											name="gender"
											value="Male"
											checked={gender === "Male"}
											onChange={this.onChanged} />
										Male </label>
									<label className="ml-2">
										<input
											className="ml-2 mr-3"
											type="radio"
											name="gender"
											value="Female"
											checked={gender === "Female"}
											onChange={this.onChanged} />
										Female </label>
								</div>
							</div>
							<div className="form-group col-md-4">
								<label>Blood Group</label>
								<input
									type="text"
									className="form-input"
									name="bloodGroup"
									value={bloodGroup}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Blood Group" />
								{
									errors.bloodGroupError &&
									<span className="errorMsg">Please enter blood group</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Official Email ID</label>
								<input
									type="text"
									className="form-input"
									name="officialEmail"
									value={officialEmail}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Official Email" />
								{
									errors.officialEmailError &&
									<span className="errorMsg">Please enter email</span>
								}
								{
									invalidofficialEmail &&
									<span className="errorMsg">Please enter valid email</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Personal Email ID</label>
								<input
									type="text"
									className="form-input"
									name="personalEmail"
									value={personalEmail}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Personal Email" />
								{
									errors.personalEmailError &&
									<span className="errorMsg">Please enter email</span>
								}
								{
									invalidpersonalEmail &&
									<span className="errorMsg">Please enter valid email</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Primary Mobile No.</label>
								<input
									type="text"
									pattern="\d*"
									maxLength="10"
									className="form-input"
									name="primaryMobileNo"
									value={primaryMobileNo}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									onKeyPress={this.restrictAlphabets}
									placeholder="Enter primary mobile number" />
								{
									errors.primaryMobileNoError &&
									<span className="errorMsg">Please enter mobile number</span>
								}
								{
									invalidprimaryMobileNo &&
									<span className="errorMsg">Please enter valid mobile number</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Secondary Mobile No.</label>
								<input
									type="text"
									pattern="\d*"
									maxLength="10"
									className="form-input"
									name="secondaryMobileNo"
									value={secondaryMobileNo}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									onKeyPress={this.restrictAlphabets}
									placeholder="Enter secondary mobile number" />
								{
									errors.secondaryMobileNoError &&
									<span className="errorMsg">Please enter mobile number</span>
								}
								{
									invalidsecondaryMobileNo &&
									<span className="errorMsg">Please enter valid mobile number</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Aadhar Card No.</label>
								<input
									type="text"
									pattern="\d*"
									maxLength="12"
									className="form-input"
									name="aadharNo"
									value={aadharNo}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									onKeyPress={this.restrictAlphabets}
									placeholder="Enter aadhar number" />
								{
									errors.aadharNoError &&
									<span className="errorMsg">Please enter aadhar number</span>
								}
								{
									invalidaadharNo &&
									<span className="errorMsg">Please enter valid aadhar number</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Bank Name</label>
								<input
									type="text"
									className="form-input"
									name="bankName"
									value={bankName}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Bank Name" />
								{
									errors.bankNameError &&
									<span className="errorMsg">Please enter bank name</span>
								}
							</div>
							<div className="form-group col-md-4">
								<label>Bank Account Number</label>
								<input
									type="text"
									pattern="\d*"
									maxLength="18"
									className="form-input"
									name="accountNumber"
									value={accountNumber}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter account number" />
								{
									errors.accountNumberError &&
									<span className="errorMsg">Please enter account number</span>
								}
								{
									invalidaccountNumber &&
									<span className="errorMsg">Please enter valid account number</span>
								}
							</div>
							<div className="col-md-4">
								<label>Date Of Joining</label><br />
								<DatePicker
									className="form-input"
									selected={DOJ}
									onChange={this.handleDOJChange}
									dateFormat="yyyy-MM-dd"
									placeholderText="YYYY-MM-DD"
								/>
							</div>
							<div className="col-md-4">
								<label>Role</label>
								<Select
									value={role}
									onChange={this.handleRole}
									onBlur={() => this.onValidate("role")}
									options={roleOption}
									valueKey="roleId"
									labelKey="roleName"
									getOptionLabel={(option) => option["roleName"]}
									getOptionValue={(option) => option["roleId"]}
									placeholder="Role"
								/>
								{
									inValidRole &&
									<span className="errorMsg">Please select role</span>
								}
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button className="btn-danger" onClick={this.handleClose}>Cancel</Button>
						<Button className="btn-success" onClick={this.handleSubmit}>{this.props.editObj ? 'Update' : 'Create'}</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default AddEditUser

