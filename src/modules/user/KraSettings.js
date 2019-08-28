import React, { Component } from 'react';
import Select from 'react-select';

class KraSettings extends Component {

	constructor() {
		super();
		this.state = {
			goal: '',
			managerGoal: '',
			employeeFeedback: '',
			managerFeedback: '',
			employeeRating: '',
			managerRating: '',
			errors: {
				goalError: null,
				managerGoalError: null,
				employeeFeedbackError: null,
				managerFeedbackError: null,
				employeeRatingError: null,
				managerRatingError: null
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

	restrictAlphabets = (e) => {
		const regx = "^[0-9]*$"
		if (e.key.match(regx)) {
			return true
		}
		else {
			e.preventDefault()
		}
	}

	render() {
		const { goal, managerGoal, employeeFeedback, managerFeedback, employeeRating, managerRating, errors } = this.state;
		return (
			<div>
				<section className="tab-body mb-5">
					<div className="row">
						<div className="col-md-12 text-right">
							<button type="button" class="btn btn-rounded btn-success new"><span class="fa fa-plus"></span> Add Goal</button>
						</div>
						<div className="col-md-6 mt-4 ">
							<div>
								<label className="fix_label_width">Goal:</label>
								<div className="flex-grow-1">
									<input
										type="text"
										className="form-input"
										name="goal"
										value={goal}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										placeholder="Enter Goal" />
									{
										errors.goalError &&
										<span className="errorMsg">Please enter goal</span>
									}
								</div>
							</div>
						</div>

						<div className="col-md-6 mt-4">
							<div>
								<label className="fix_label_width">Manager Goal:</label>
								<div className="flex-grow-1">
									<input
										type="text"
										className="form-input"
										name="managerGoal"
										value={managerGoal}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										placeholder="Enter Manager Goal" />
									{
										errors.managerGoalError &&
										<span className="errorMsg">Please enter manager goal</span>
									}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 mt-4">
							<div>
								<label className="fix_label_width">Employee Feedback:</label>
								<div className="flex-grow-1">
									<textarea
										type="text"
										className="form-input"
										name="employeeFeedback"
										value={employeeFeedback}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										placeholder="Enter Employee Feedback" />
									{
										errors.employeeFeedbackError &&
										<span className="errorMsg">Please enter employee feedback</span>
									}
								</div>
							</div>
						</div>
						<div className="col-md-6 mt-4">
							<div>
								<label className="fix_label_width">Manager Feedback:</label>
								<div className="flex-grow-1">
									<textarea
										type="text"
										className="form-input"
										name="managerFeedback"
										value={managerFeedback}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										placeholder="Enter Manager Feedback" />
									{
										errors.managerFeedbackError &&
										<span className="errorMsg">Please enter manager feedback</span>
									}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 mt-4 ">
							<div>
								<label className="fix_label_width">Employee Rating:</label>
								<div className="flex-grow-1">
									<input
										type="number"
										className="form-input"
										name="employeeRating"
										value={employeeRating}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										onKeyPress={this.restrictAlphabets}
										placeholder="Enter Employee Rating" />
									{
										errors.employeeRatingError &&
										<span className="errorMsg">Please enter employee rating</span>
									}
								</div>
							</div>
						</div>
						<div className="col-md-6 mt-4 ">
							<div>
								<label className="fix_label_width">Manager Rating:</label>
								<div className="flex-grow-1">
									<input
										type="number"
										className="form-input"
										name="managerRating"
										value={managerRating}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										onKeyPress={this.restrictAlphabets}
										placeholder="Enter Manager Rating" />
									{
										errors.managerRatingError &&
										<span className="errorMsg">Please enter manager rating</span>
									}
								</div>
							</div>
						</div>
					</div>

				</section>
			</div>
		)
	}
}

export default KraSettings