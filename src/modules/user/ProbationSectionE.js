import React, { Component } from 'react'

class ProbationSectionE extends Component {
	state = {
		finalRecommendation: '',
		empCheckbox: '',
		mangrCheckbox: '',
		errors: {
			empCheckboxError: null,
			mangrCheckboxError: null,
		}
	}

	onChanged = (e) => {
		this.setState({
			finalRecommendation: e.currentTarget.value
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onCheckboxChanged = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.checked
		});
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
		const { finalRecommendation, empCheckbox, mangrCheckbox, errors } = this.state;
		return (
			<section className="tab-body dash_space text-justify probation">
				<div className="row">
					<p className="ml-4 title-orange">Select one of the two final recommendations:</p>
					<div className="row mt-3">
						<div style={{ paddingLeft: '70px' }} className="col-md-1">
							<input
								type="radio"
								name="finalRecommendation"
								value="1"
								checked={finalRecommendation === "1"}
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
								name="finalRecommendation"
								value={"2"}
								checked={finalRecommendation === "2"}
								onChange={this.onChanged} />
						</div>
						<div className="col-md-11">
							I recommend that this appointment should be terminated. There are weaknesses apparent in the performance of the candidate which I believe cannot be overcome at this time.  Please contact HR  for further advice at this stage.
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<p className="ml-4 title-orange"> Signature </p>
				</div>
				<div className="row mt-3 mb-4">
					<div className="col-md-2" style={{ paddingLeft: '54px' }}>
						<label className="title-orange checkbox_2">
							<input
								type="checkbox"
								className="checkbox2"
								name="empCheckbox"
								checked={empCheckbox}
								onChange={this.onCheckboxChanged} id="check_emp"
							/>Employee <label className="check_label" htmlFor="check_emp"></label>
						</label>
					</div>

					<div className="col-md-2">
						<label className="title-orange checkbox_2">
							<input
								type="checkbox"
								className="checkbox2"
								name="mangrCheckbox"
								checked={mangrCheckbox}
								onChange={this.onCheckboxChanged} id="check_manager"
							/>Manager <label className="check_label" htmlFor="check_manager"></label>
						</label>
					</div>
				</div>
				<div className="d-flex justify-content-center mt-5">
					<div className="form-group">
						<button onClick={this.handleSubmit} className="form-submit" > Submit</button>
					</div>
				</div>
			</section>
		)
	}
}

export default ProbationSectionE