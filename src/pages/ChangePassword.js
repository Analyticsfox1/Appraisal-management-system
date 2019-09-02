import React, { Component } from 'react';
import Header from './Header';
import { updatePassword } from '../utils/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ChangePassword extends Component {

	constructor() {
		super();
		this.state = {
			new_password: '',
			conf_password: '',
			invalidPassword: false,
			invalidConfPassword: false,
			errors: {
				new_passwordError: null,
				conf_passwordError: null,
			}
		}
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
		if (name === 'new_password') {
			let passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
			if (value && !value.match(passwordRegx)) {
				this.setState({
					invalidPassword: true
				});
			}
			else {
				this.setState({
					invalidPassword: false
				});
			}
		}
		if (name === 'conf_password') {
			if (value && value !== this.state.new_password) {
				this.setState({
					invalidConfPassword: true
				});
			}
			else {
				this.setState({
					invalidConfPassword: false
				});
			}
		}
	}

	handleSubmit = () => {
		const { errors, invalidPassword, invalidConfPassword, new_password, conf_password } = this.state;
		let isSuccess = true;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isSuccess = false;
			}
		}
		if (invalidPassword || invalidConfPassword) {
			isSuccess = false;
		}
		let obj = { new_password, conf_password }
		if (isSuccess) {
			updatePassword(obj).then(response => {
				if (response.error) {
					toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
					return false;
				}
				if (response.data && !response.error) {
					toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
					this.props.history.push(`/login`);
				}
			})
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { new_password, conf_password, invalidPassword, invalidConfPassword, errors } = this.state;
		return (
			<section className="login-section">
				<Header />
				<div className="page-container">
					<div style={{ width: '400px' }} className="content">
						<h3 className="text-center title-font mb-3">Change Password</h3>
						<div className="form-group">
							<input
								type="password"
								className="form-input"
								name="new_password"
								value={new_password}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter password" />
							{
								errors.new_passwordError &&
								<span className="errorMsg">Please enter new password</span>
							}
							{
								invalidPassword &&
								<span className="errorMsg">Password must contain at least 8 characters, including uppercase, lowercase and numbers</span>
							}
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-input"
								name="conf_password"
								value={conf_password}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Confirm password" />
							{
								errors.conf_passwordError &&
								<span className="errorMsg">Please enter confirm password</span>
							}
							{
								invalidConfPassword &&
								<span className="errorMsg">Confirm password does not match</span>
							}
						</div>
						<div className="form-group">
							<button onClick={this.handleSubmit} className="form-submit">Change Password</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default ChangePassword