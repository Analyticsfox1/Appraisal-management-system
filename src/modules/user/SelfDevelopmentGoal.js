import React, { Component } from 'react'

class SelfDevelopmentGoal extends Component {

	constructor() {
		super();
		this.state = {
			employeeQ1: '',
			employeeQ2: '',
			employeeQ3: '',
			managerQ1: '',
			managerQ2: '',
			managerQ3: '',
			errors: {
				employeeQ1Error: null,
				employeeQ2Error: null,
				employeeQ3Error: null,
				managerQ1Error: null,
				managerQ2Error: null,
				managerQ3Error: null,
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
	}

	render() {
		const { employeeQ1, employeeQ2, employeeQ3, managerQ1, managerQ2, managerQ3, errors } = this.state;
		return (
			<div>
				<section className="tab-body">
					<h6>Employee Form</h6>
					<div className="row mt-3">
						<p className="col-md-4">1. What are three things that you think manager should start doing.</p>
						<div className="col-md-8">
							<input
								type="text"
								className="form-input"
								name="employeeQ1"
								value={employeeQ1}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Answer" />
							{
								errors.employeeQ1Error &&
								<span className="errorMsg">Please enter answer</span>
							}
						</div>
					</div>
					<div className="row mt-3">
						<p className="col-md-4">2. What are three things that you think manager should stop doing.</p>
						<div className="col-md-8">
							<input
								type="text"
								className="form-input"
								name="employeeQ2"
								value={employeeQ2}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Answer" />
							{
								errors.employeeQ2Error &&
								<span className="errorMsg">Please enter answer</span>
							}
						</div>
					</div>
					<div className="row mt-3">
						<p className="col-md-4">3. What are three things that you think manager should continue doing.</p>
						<div className="col-md-8">
							<input
								type="text"
								className="form-input"
								name="employeeQ3"
								value={employeeQ3}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Answer" />
							{
								errors.employeeQ3Error &&
								<span className="errorMsg">Please enter answer</span>
							}
						</div>
					</div>
					</section>
					<section className="tab-body">
					<h6>Manager Form</h6>
					<div className="row mt-3">
						<p className="col-md-4">1. What are three things that you think he/she should start doing.</p>
						<div className="col-md-8">
							<input
								type="text"
								className="form-input"
								name="managerQ1"
								value={managerQ1}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Answer" />
							{
								errors.managerQ1Error &&
								<span className="errorMsg">Please enter answer</span>
							}
						</div>
					</div>
					<div className="row mt-3">
						<p className="col-md-4">2. What are three things that you think he/she should stop doing.</p>
						<div className="col-md-8">
							<input
								type="text"
								className="form-input"
								name="managerQ2"
								value={managerQ2}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Answer" />
							{
								errors.managerQ2Error &&
								<span className="errorMsg">Please enter answer</span>
							}
						</div>
					</div>
					<div className="row mt-3">
						<p className="col-md-4">2. What are three things that you think he/she should continue doing.</p>
						<div className="col-md-8">
							<input
								type="text"
								className="form-input"
								name="managerQ3"
								value={managerQ3}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Answer" />
							{
								errors.managerQ3Error &&
								<span className="errorMsg">Please enter answer</span>
							}
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default SelfDevelopmentGoal