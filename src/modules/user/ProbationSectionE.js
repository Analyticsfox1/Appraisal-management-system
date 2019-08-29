import React, { Component } from 'react'

class ProbationSectionE extends Component {
	state = {
		recommendation: '',
		emp_sign: '',
		manager_sign: '',
		second_manager_sign: '',
		errors: {
			emp_signError: null,
			manager_signError: null,
			second_manager_signError: null,
		}
	}

	onChanged = (e) => {
		this.setState({
			recommendation: e.currentTarget.value
		});
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
		const { recommendation, emp_sign, manager_sign, second_manager_sign, errors } = this.state;
		return (
			<section className="tab-body dash_space text-justify">
				<div className="row">
					<p className="ml-4">Select one of the two final recommendations:</p>
					<div className="row mt-3">
						<div style={{ paddingLeft: '70px' }} className="col-md-1">
							<input
								type="radio"
								name="recommendation"
								value="recommendation1"
								checked={recommendation === "recommendation1"}
								onChange={this.onChanged} />
						</div>
						<div className="col-md-11">
							I recommend that the staff member be recorded as satisfactory in this final review.  I also recommend that the staff member be confirmed in their current appointment at the end of their probation period. I confirm that the performance of the candidate meets or exceeds expectations.
							<br />If any performance issues arise after completion of this review but still within probation period, these should be raised and dealt with prior to the time of the expiry of the probation period.
						</div>
					</div>
					<div className="row mt-3">
						<div style={{ paddingLeft: '70px' }} className="col-md-1">
							<input
								type="radio"
								name="recommendation"
								value="recommendation2"
								checked={recommendation === "recommendation2"}
								onChange={this.onChanged} />
						</div>
						<div className="col-md-11">
							I recommend that this appointment should be terminated. There are weaknesses apparent in the performance of the candidate which I believe cannot be overcome at this time.  Please contact HR  for further advice at this stage.
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<p className="ml-4"> Signature </p>
				</div>
				<div className="row mt-3">
					<div className="col-md-4">
						<input
							type="text"
							className="form-input signature"
							name="emp_sign"
							value={emp_sign}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
							placeholder="Employee Signature" />
						{
							errors.emp_signError &&
							<span className="errorMsg">Enyer employee signature</span>
						}
					</div>
					<div className="col-md-4">
						<input
							type="text"
							className="form-input signature"
							name="manager_sign"
							value={manager_sign}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
							placeholder="Manager Signature" />
						{
							errors.manager_signError &&
							<span className="errorMsg">Enter manager signature</span>
						}
					</div>
					<div className="col-md-4">
						<input
							type="text"
							className="form-input signature"
							name="second_manager_sign"
							value={second_manager_sign}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
							placeholder="Second Manager Signature" />
						{
							errors.second_manager_signError &&
							<span className="errorMsg">Enter second manager signature</span>
						}
					</div>
				</div>
			</section>
		)
	}
}

export default ProbationSectionE