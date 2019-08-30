import React, { Component } from 'react'

class ProbationSectionC extends Component {

	constructor() {
		super();
		this.state = {
			trainingQ1: '',
			trainingQ2: '',
			errors: {
				trainingQ1Error: null,
				trainingQ2Error: null,
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
		const { trainingQ1, trainingQ2, errors } = this.state;
		return (
			<section className="tab-body dash_space text-justify">
				<div className="row mt-3">
					<span className="col-md-4">Outline any courses the employee has attended to date.</span>
					<div className="col-md-8">
						<input
							type="text"
							className="form-input"
							name="trainingQ1"
							value={trainingQ1}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
							placeholder="Enter Answer" />
						{
							errors.trainingQ1Error &&
							<span className="errorMsg">Please enter answer</span>
						}
					</div>
				</div>
				<div className="row mt-3">
					<span className="col-md-4">Indicate any future courses that the employee should complete and wheteher they are mandatory or recommended in order to complete the probationary period.</span>
					<div className="col-md-8">
						<input
							type="text"
							className="form-input"
							name="trainingQ2"
							value={trainingQ2}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
							placeholder="Enter Answer" />
						{
							errors.trainingQ2Error &&
							<span className="errorMsg">Please enter answer</span>
						}
					</div>
				</div>
			</section>
		)
	}
}

export default ProbationSectionC