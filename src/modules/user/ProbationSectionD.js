import React, { Component } from 'react'

class ProbationSectionD extends Component {

	constructor() {
		super();
		this.state = {
			ovrallEmpPerfRate: '',
			mangrComment: '',
			errors: {
				ovrallEmpPerfRateError: null,
				mangrCommentError: null,
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
		const { ovrallEmpPerfRate, mangrComment, errors } = this.state;
		return (
			<section className="tab-body dash_space text-justify probation">
				<div className="row mt-3">
					<span className="col-md-4">Based on the ratings above, rate the employee's overall performance</span>
					<div className="col-md-8">
						<input
							type="text"
							className="form-input"
							name="ovrallEmpPerfRate"
							value={ovrallEmpPerfRate}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
							placeholder="Enter Answer" />
						{
							errors.ovrallEmpPerfRateError &&
							<span className="errorMsg">Please enter answer</span>
						}
					</div>
				</div>
				<div className="row mt-3">
					<span className="col-md-4">Manager Comment: (Mention whether Probation Successful, Extend Probation, Probation Failed)</span>
					<div className="col-md-8">
						<input
							type="text"
							className="form-input"
							name="mangrComment"
							value={mangrComment}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
							placeholder="Enter Answer" />
						{
							errors.mangrCommentError &&
							<span className="errorMsg">Please enter answer</span>
						}
					</div>
				</div>
				<div className="d-flex justify-content-center mt-5">
					<div className="form-group">
						<button onClick={this.handleSubmit} className="form-submit" > Next</button>
					</div>
				</div>
			</section>
		)
	}
}

export default ProbationSectionD