import React, { Component } from 'react';
import Header from './Header';

class OTPCode extends Component {
	constructor() {
		super();
		this.state = {
			OTP: '',
			invalidOTP: false,
			errors: {
				OTPError: null,
			}
		}
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

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleValidate = (e) => {
		const { errors, invalidOTP } = this.state;
		let name = e.target.name;
		let value = e.target.value;
		if (value === "" || value === null || value === undefined) {
			this.setState({ errors: { ...errors, [name + 'Error']: true } });
		}
		else {
			this.setState({ errors: { ...errors, [name + 'Error']: false } });
		}
		if (value && value.length < 6) {
			this.setState({
				invalidOTP: true
			})
		}
		else{
			this.setState({
				invalidOTP: false
			})
		}
	}

	handleSubmit = () => {
		const { errors, invalidOTP } = this.state;
		let isSuccess = true;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isSuccess = false;
			}
		}
		if (invalidOTP) {
			isSuccess = false;
		}
		if (isSuccess) {
			this.props.history.push(`/change-password`);
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { OTP, invalidOTP, errors } = this.state;
		return (
			<section className="login-section">
				<Header />
				<div className="page-container">
					<div style={{width:'400px'}} className="content">
						<h3 className="text-center title-font mb-3">Enter OTP Code</h3>
						<h6 className="text-center w3-text-gray mb-5">Check your email for OTP Code.</h6>
						<div className="form-group">
							<input
								type="text"
								pattern="\d*"
								maxLength="6"
								className="form-input"
								name="OTP"
								value={OTP}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								onKeyPress={this.restrictAlphabets}
								placeholder="One Time Password" />
							{
								errors.OTPError &&
								<span className="errorMsg">Please enter OTP code</span>
							}
							{
								invalidOTP &&
								<span className="errorMsg">Please enter valid OTP code</span>
							}
						</div>
						<div className="form-group">
							<button onClick={this.handleSubmit} className="form-submit">Submit</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default OTPCode