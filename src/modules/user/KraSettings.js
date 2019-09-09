import React, { Component } from 'react';
import Select from 'react-select';
import StarRatingComponent from 'react-star-rating-component';


class KraSettings extends Component {

	constructor() {
		super();
		this.state = {
			goal: '',
			managerGoalDescription: '',
			employeeAchievement: '',
			managerFeedback: '',
			employeeSelfRating: 0,
			managerRating: 0,
			errors: {
				goalError: null,
				managerGoalDescriptionError: null,
				employeeAchievementError: null,
				managerFeedbackError: null,
				employeeSelfRatingError: null,
				managerRatingError: null
			}
		}
	}

	onStarClick = (nextValue, prevValue, name) => {
		this.setState({ [name]: nextValue });
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

	handleSubmit = () => {
		const { errors, employeeSelfRating } = this.state;
		let isAdd = true;
		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isAdd = false;
			}
		}
		if (employeeSelfRating === 0) {
			this.setState({ errors: { ...errors, employeeSelfRatingError: true } })
		}
		else {
			this.setState({ errors: { ...errors, employeeSelfRatingError: false } })
		}
		this.setState({ errors: { ...errors } });
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
		const { goal, managerGoalDescription, employeeAchievement, managerFeedback, employeeSelfRating, managerRating, errors } = this.state;
		return (
			<div>
				<section className="tab-body mb-5">
					<div className="row">
						<div className="col-md-12 text-right">
							<button type="button" onClick={this.handleSubmit} className="btn btn-rounded btn-success new">
								<span className="fa fa-plus"></span> Add Goal</button>
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
								<label className="fix_label_width">Manager Goal Description:</label>
								<div className="flex-grow-1">
									<textarea
										type="text"
										className="form-input"
										name="managerGoalDescription"
										value={managerGoalDescription}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										disabled={true}
										placeholder="Enter Manager Goal Description" />
									{
										errors.managerGoalDescriptionError &&
										<span className="errorMsg">Please enter manager goal description</span>
									}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 mt-4">
							<div>
								<label className="fix_label_width">Employee Achievement:</label>
								<div className="flex-grow-1">
									<textarea
										type="text"
										className="form-input"
										name="employeeAchievement"
										value={employeeAchievement}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										placeholder="Enter Employee Achievement" />
									{
										errors.employeeAchievementError &&
										<span className="errorMsg">Please enter employee achievement</span>
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
										disabled={true}
										placeholder="Enter Manager Feedback" />
									{
										errors.managerFeedbackError &&
										<span className="errorMsg">Please enter manager feedback</span>
									}
								</div>
							</div>
						</div>
					</div>
					<div className="row star-rating">
						<div className="col-md-6 mt-4 ">
							<div className="d-flex align-items-center">
								<label className="fix_label_width mr-3">Employee Self Rating: </label>
								<StarRatingComponent
									name="employeeSelfRating"
									starCount={5}
									renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
									value={employeeSelfRating}
									onStarClick={this.onStarClick}
								/>
							</div>
								{
									errors.employeeSelfRatingError &&
									<span className="errorMsg">Please enter employee rating</span>
								}
						</div>
						<div className="col-md-6 mt-4 ">
							<div className="d-flex align-items-center">
								<label className="fix_label_width mr-3">Manager Rating: </label>
								<StarRatingComponent
									name="managerRating"
									starCount={5}
									renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
									value={managerRating}
									onStarClick={this.onStarClick}
									emptyStarColor={"lightgray"}
									editing={false}
								/>
							</div>
						</div>
					</div>

				</section>
			</div>
		)
	}
}

export default KraSettings