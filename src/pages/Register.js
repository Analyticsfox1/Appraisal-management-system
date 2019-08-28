import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import { register } from '../utils/user';


class Register extends Component {

	constructor() {
		super();
		this.state = {
			username: '',
			email: '',
			password: '',
			conf_password: '',
			invalidEmail: false,
			invalidPassword: false,
			invalidConfPassword: false,
			errors: {
				usernameError: null,
				emailError: null,
				passwordError: null,
				conf_passwordError: null
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
		if (name === 'password') {
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
			if (value && value !== this.state.password) {
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

	handleSubmit = (event) => {
		const { errors, invalidPassword, invalidEmail, invalidConfPassword, username, email, password, conf_password } = this.state;
		let isRegister = true;
		let obj = { username, email, password, conf_password }
		console.log(obj)
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isRegister = false;
			}
		}
		if (invalidPassword || invalidEmail || invalidConfPassword) {
			isRegister = false;
		}
		if (isRegister) {
			register(obj).then(response => {
				console.log("response...", response)
				if (response.error) {
					console.log("response error")
					return false;
				}
			}
			);
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { username, email, password, conf_password, invalidEmail, invalidPassword, invalidConfPassword, errors } = this.state;

		return (
			<section className="login-section">
				<Header />
				<div className="page-container">
					<div style={{width:'400px'}} className="content">
						<h3 className="text-center title-font mb-3">SIGN UP</h3>
						<div className="form-group">
							<input
								type="text"
								className="form-input"
								name="username"
								value={username}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Username" />
							{
								errors.usernameError &&
								<span className="errorMsg">Please enter username</span>
							}
						</div>
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
							<input
								type="password"
								className="form-input"
								name="password"
								value={password}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Password" />

							{
								errors.passwordError &&
								<span className="errorMsg">Please enter password</span>
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
								placeholder="Confirm your password" />

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
							<button onClick={this.handleSubmit} className="form-submit" > SIGN UP</button>
						</div>

						<p className="loginhere">
							Have already an account ? <Link to="/login" className="loginhere-link">Login here</Link>
						</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Register