import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { login } from '../utils/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Login extends Component {

	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			invalidEmail: false,
			errors: {
				emailError: null,
				passwordError: null
			}
		}
	}

	handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			this.handleSubmit(e);
		}
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
		const { errors, email, password } = this.state;
		let isLogin = true;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isLogin = false;
			}
		}
		let obj = { email, password }
		if (isLogin) {
			login(obj).then(response => {
				if (response.data && response.data.error === "true") {
					toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
					return false;
				}
				if (response.data && response.data.error === "false") {
					if (response.data.data.role.roleId === 1) {
						sessionStorage.setItem("ceoData", JSON.stringify(response.data.data));
						this.props.history.push('/CEO-kra-management')
						toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
					}
					if (response.data.data.role.roleId === 2) {
						sessionStorage.setItem("adminData", JSON.stringify(response.data.data));
						this.props.history.push('/admin-dashboard')
						toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
					}
					if (response.data.data.role.roleId === 3) {
						sessionStorage.setItem("managerData", JSON.stringify(response.data.data));
						this.props.history.push('/manager-dashboard')
						toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
					}
					if (response.data.data.role.roleId === 4) {
						sessionStorage.setItem("userData", JSON.stringify(response.data.data));
						this.props.history.push('/dashboard')
						toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
					}
					else {
						toast.error("Something Went Wrong", { type: toast.TYPE.ERROR, autoClose: 2000 })
					}
				}
			})
		}
		this.setState({ errors: { ...errors } });
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { email, password, invalidEmail, errors } = this.state;
		return (
			<>
				<ToastContainer />
				<Header />
				<section className="login-section">
					<div className="page-container">
						<div style={{ width: '400px', marginTop: '140px' }} className="content">
							<h3 className="text-center title-font mb-3">SIGN IN</h3>
							<div className="form-group">
								<input
									type="text"
									className="form-input"
									name="email"
									value={email}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									onKeyDown={this.handleKeyDown}
									placeholder="Email ID" />
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
									onKeyDown={this.handleKeyDown}
									placeholder="Password" />
								{
									errors.passwordError &&
									<span className="errorMsg">Please enter password</span>
								}
							</div>
							<div className="form-group">
								<Link to="/forgot-password" className="forgot-password"><i className="fas fa-key mr-2"></i>Forgot password?</Link>
							</div>
							<div className="form-group">
								<button onClick={this.handleSubmit} className="form-submit" > Login</button>
							</div>

							<div className="form-group m-0">
								<p className="loginhere mt-0 mn-0"> Do you haven't an account ? <Link className="loginhere-link" to="/register">Create account</Link></p>
							</div>
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default Login