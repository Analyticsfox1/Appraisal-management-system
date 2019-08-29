import React, { Component } from 'react'

class ProbationSectionD extends Component {

	constructor() {
		super();
		this.state = {
			overallQ1: '',
			overallQ2: '',
			errors: {
				overallQ1Error: null,
				overallQ2Error: null,
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
		const { overallQ1, overallQ2, errors } = this.state;
		return (
			<section className="tab-body dash_space text-justify">
				<div className="row mt-3">
					<p className="col-md-4">Based on the ratings above, rate the employee's overall performance</p>
					<div className="col-md-8">
						<input
							type="text"
							className="form-input"
							name="overallQ1"
							value={overallQ1}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
							placeholder="Enter Answer" />
						{
							errors.overallQ1Error &&
							<span className="errorMsg">Please enter answer</span>
						}
					</div>
				</div>
				<div className="row mt-3">
					<p className="col-md-4">Manager Comment: (Mention whether Probation Successful, Extend Probation, Probation Failed)</p>
					<div className="col-md-8">
						<input
							type="text"
							className="form-input"
							name="overallQ2"
							value={overallQ2}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
							placeholder="Enter Answer" />
						{
							errors.overallQ2Error &&
							<span className="errorMsg">Please enter answer</span>
						}
					</div>
				</div>
			</section>
		)
	}
}

export default ProbationSectionD