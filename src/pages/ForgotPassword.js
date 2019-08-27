import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';

class ForgotPassword extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			invalidEmail: false,
			errors: {
				emailError: null,
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
	}

	handleSubmit = () => {
		const { errors, invalidEmail } = this.state;
		let isSuccess = true;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isSuccess = false;
			}
		}
		if (invalidEmail) {
			isSuccess = false;
		}
		if (isSuccess) {
			this.props.history.push(`/change-password`);
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { email, invalidEmail, errors } = this.state;
		return (

			<section className="login-section">
				<Header />
				<div className="page-container">
					<div style={{width:'400px'}} className="content">
						<h3 className="text-center title-font mb-3">Reset Password</h3>
						<p className="text-center w3-text-gray mb-5">Enter your email address below and we'll send you an email with instructions.</p>

						<div className="form-group">
							<input
								type="email"
								className="form-input"
								name="email"
								value={email}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Email" />
							{
								errors.emailError &&
								<span className="errorMsg">Please enter email</span>
							}
							{
								invalidEmail &&
								<span className="errorMsg">Please enter valid email</span>
							}
						</div>
						<div className="form-group">
							<button onClick={this.handleSubmit} className="form-submit">Send Mail</button>
						</div>

						<p className="loginhere mt-0" ><Link to="login" className="loginhere-link"><i className="fas fa-sign-in-alt mr-2"></i>Back to Login</Link></p>
					</div>
				</div>
			</section>

		)
	}
}

export default ForgotPassword