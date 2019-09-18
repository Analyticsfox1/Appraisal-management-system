import React, { Component } from 'react';
import Select from 'react-select';

const ratingOption = [
	{ value: 'Below Expectations', label: 'Below Expectations' },
	{ value: 'Met Expectations', label: 'Met Expectations' },
	{ value: 'Expectations met at high standard', label: 'Expectations met at high standard' },
	{ value: 'Not relevant to the role', label: 'Not relevant to the role' },
];
class ProbationSectionB extends Component {

	state = {
		probPerfApprList: {},
		errors: {
			managerCommentsError: null,
			employeeCommentsError: null,
			ratingError: null
		}
	}

	handleManagerChange = (e, name) => {
		let value = e.target.value;
		this.setState(state => ({
			selectedManager: {
				...state.selectedManager,
				[name]: value,
			},
			probPerfApprList: {
				...state.probPerfApprList,
				[name]: {
					...state.probPerfApprList[name],
					managerComments: value
				}
			}
		}))
	}

	handleEmployeeChange = (e, name) => {
		let value = e.target.value;
		this.setState(state => ({
			selectedEmployee: {
				...state.selectedEmployee,
				[name]: value,
			},
			probPerfApprList: {
				...state.probPerfApprList,
				[name]: {
					...state.probPerfApprList[name],
					employeeComments: value
				}
			}
		}))
	}

	handleRating = (select, name) => {
		this.setState(state => ({
			selectedRating: {
				...state.selectedRating,
				[name]: select,
			},
			probPerfApprList: {
				...state.probPerfApprList,
				[name]: {
					...state.probPerfApprList[name],
					competency: name,
					rating: select.value
				}
			}
		}))
	}

	handleSubmit = () => {
		const { errors, probPerfApprList } = this.state;
		for (var val in errors) {
			if (errors[val] === null) {
				errors[val] = true;
			}
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { selectedRating, selectedManager, selectedEmployee, probPerfApprList, errors } = this.state;
		return (
			<section className="tab-body probation-form dash_space probation">
				<div className="row">
					<div className="col-md-8">
						<div className="rating-box">
							<h6 className="title-orange text-center">Rating Description</h6>
							<div className="row mt-3">
								<span className="col-md-4"> 1. Below Expectations</span>
								<span className="col-md-8 text-justify"> Performing in some areas only, needs significant improvement to achieve the required standard.  There are weaknesses apparent in the performance of the employeeComments which can/cannot be overcome at this time.</span>
							</div>
							<div className="row mt-2">
								<span className="col-md-4"> 2. Met Expectations</span>
								<span className="col-md-8 text-justify"> Good performance, all objectives were delivered and expectations were met to the required standard. Overall staff member is effective in the role.</span>
							</div>
							<div className="row mt-2">
								<span className="col-md-4"> 3. Expectations met at high standard</span>
								<span className="col-md-8 text-justify"> Very good performance, employeeComments performing very well to a noticeably good quality, with a high level of output to a high standard.</span>
							</div>
							<div className="row mt-2">
								<span className="col-md-4"> 4. Not relevant to the role</span>
								<span className="col-md-8 text-justify"> Competency is not relevant to the role.</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="rating-box text-justify">
							<h6 className="title-orange text-center">Notes</h6>
							<div className="row mt-3">
								<span className="col-md-12"> 1. Rate the employeeComments's performance against the competencies, concluding with the overall rating for this probation review. </span>
							</div>
							<div className="row mt-3">
								<span className="col-md-12"> 2. If the competency is not relevant, select "Not relevant to the role". </span>
							</div>
							<div className="row mt-3">
								<span className="col-md-12"> 3. For ratings that are "Below Expectations", agree for Performance Improvement Plan (PIP) for the employeeComments </span>
							</div>
						</div>
					</div>
				</div>
				<div className="table-border mt-4">
					<div className="row d-flex align-items-center  light-orange text-center table-border-bottom">
						<div className="col-md-3">
							<h6 className="title-orange fs-14"> Competency & <br />Competency Description </h6>
						</div>
						<div className="col-md-3">
							<h6 className="title-orange fs-14"> Rating </h6>
						</div>
						<div className="col-md-3">
							<h6 className="title-orange fs-14"> Manager Comments </h6>
						</div>
						<div className="col-md-3">
							<h6 className="title-orange fs-14"> Employee Comments </h6>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-md-3">
							<span className="font-weight-bold-600 title-black"> 1. Time Keeping </span><br />
							<span className="fs-13"> Adheres to the time-keeping and attendance requirements of the section as outlined in the employment contract;  prompt /on-time for required meetings. </span>
						</div>
						<div className="col-md-3">
							<Select
								value={selectedRating && selectedRating["Time Keeping"]}
								onChange={(select) => this.handleRating(select, "Time Keeping")}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedManager && selectedManager["Time Keeping"]}
								onChange={(e) => this.handleManagerChange(e, "Time Keeping")}
								placeholder="Enter Comment" />
							{
								errors.managerCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedEmployee && selectedEmployee["Time Keeping"]}
								onChange={(e) => this.handleEmployeeChange(e, "Time Keeping")}
								placeholder="Enter Comment" />
							{
								errors.employeeCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
					</div>
					<hr />
					<div className="row mt-4">
						<div className="col-md-3">
							<span className="font-weight-bold-600 title-black"> 2. Knowledge of Testing/ Development Process </span><br />
							<span className="fs-13"> Knowledge of all procedures and policies required to do the job. </span>
						</div>
						<div className="col-md-3">
							<Select
								value={selectedRating && selectedRating["Knowledge of Testing/ Development Process"]}
								onChange={(select) => this.handleRating(select, "Knowledge of Testing/ Development Process")}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedManager && selectedManager["Knowledge of Testing/ Development Process"]}
								onChange={(e) => this.handleManagerChange(e, "Knowledge of Testing/ Development Process")}
								placeholder="Enter Comment" />
							{
								errors.managerCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedEmployee && selectedEmployee["Knowledge of Testing/ Development Process"]}
								onChange={(e) => this.handleEmployeeChange(e, "Knowledge of Testing/ Development Process")}
								placeholder="Enter Comment" />
							{
								errors.employeeCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
					</div>
					<hr />
					<div className="row mt-4">
						<div className="col-md-3">
							<span className="font-weight-bold-600 title-black"> 3. Motivation, Flexibility and Dependability </span><br />
							<span className="fs-13"> Shows interest in the job. Can be trusted to work independently and unsupervised. Willing to listen and carry out instructions. Adaptable to the requirements of the post, shows commitment to the job and team members at all times. </span>
						</div>
						<div className="col-md-3">
							<Select
								value={selectedRating && selectedRating["Motivation, Flexibility and Dependability"]}
								onChange={(select) => this.handleRating(select, "Motivation, Flexibility and Dependability")}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedManager && selectedManager["Motivation, Flexibility and Dependability"]}
								onChange={(e) => this.handleManagerChange(e, "Motivation, Flexibility and Dependability")}
								placeholder="Enter Comment" />
							{
								errors.managerCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedEmployee && selectedEmployee["Motivation, Flexibility and Dependability"]}
								onChange={(e) => this.handleEmployeeChange(e, "Motivation, Flexibility and Dependability")}
								placeholder="Enter Comment" />
							{
								errors.employeeCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
					</div>
					<hr />
					<div className="row mt-4">
						<div className="col-md-3">
							<span className="font-weight-bold-600 title-black"> 4. Initiative and openness to learning </span><br />
							<span className="fs-13"> Adaptable to the requirements of the post, shows commitment to the job and team members at all times.  Demonstrates wilingness to learn.  Looks to participate in training – quick learner. </span>
						</div>
						<div className="col-md-3">
							<Select
								value={selectedRating && selectedRating["Initiative and openness to learning"]}
								onChange={(select) => this.handleRating(select, "Initiative and openness to learning")}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedManager && selectedManager["Initiative and openness to learning"]}
								onChange={(e) => this.handleManagerChange(e, "Initiative and openness to learning")}
								placeholder="Enter Comment" />
							{
								errors.managerCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedEmployee && selectedEmployee["Initiative and openness to learning"]}
								onChange={(e) => this.handleEmployeeChange(e, "Initiative and openness to learning")}
								placeholder="Enter Comment" />
							{
								errors.employeeCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
					</div>
					<hr />
					<div className="row mt-4">
						<div className="col-md-3">
							<span className="font-weight-bold-600 title-black"> 5. Communication Skills /Interpersonal Skills </span><br />
							<span className="fs-13"> Effectively communicates to provide information, clear and concise, gains understanding and maintains effective working relationships.  Demonstrates good manners and politeness even in potentially difficult situations. Comfortable in liaising with people within and outside of team. </span>
						</div>
						<div className="col-md-3">
							<Select
								value={selectedRating && selectedRating["Communication Skills /Interpersonal Skills"]}
								onChange={(select) => this.handleRating(select, "Communication Skills /Interpersonal Skills")}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedManager && selectedManager["Communication Skills /Interpersonal Skills"]}
								onChange={(e) => this.handleManagerChange(e, "Communication Skills /Interpersonal Skills")}
								placeholder="Enter Comment" />
							{
								errors.managerCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedEmployee && selectedEmployee["Communication Skills /Interpersonal Skills"]}
								onChange={(e) => this.handleEmployeeChange(e, "Communication Skills /Interpersonal Skills")}
								placeholder="Enter Comment" />
							{
								errors.employeeCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
					</div>
					<hr />
					<div className="row mt-4">
						<div className="col-md-3">
							<span className="font-weight-bold-600 title-black"> 6. Team Work </span><br />
							<span className="fs-13"> Works co-operatively with others on the team. Supportive of other team members. </span>
						</div>
						<div className="col-md-3">
							<Select
								value={selectedRating && selectedRating["Team Work"]}
								onChange={(select) => this.handleRating(select, "Team Work")}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedManager && selectedManager["Team Work"]}
								onChange={(e) => this.handleManagerChange(e, "Team Work")}
								placeholder="Enter Comment" />
							{
								errors.managerCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedEmployee && selectedEmployee["Team Work"]}
								onChange={(e) => this.handleEmployeeChange(e, "Team Work")}
								placeholder="Enter Comment" />
							{
								errors.employeeCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
					</div>
					<hr />
					<div className="row mt-4">
						<div className="col-md-3">
							<span className="font-weight-bold-600 title-black"> 7. Diligence </span><br />
							<span className="fs-13"> Focuses on getting things finished, persists until the job is completed. </span>
						</div>
						<div className="col-md-3">
							<Select
								value={selectedRating && selectedRating["Diligence"]}
								onChange={(select) => this.handleRating(select, "Diligence")}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedManager && selectedManager["Diligence"]}
								onChange={(e) => this.handleManagerChange(e, "Diligence")}
								placeholder="Enter Comment" />
							{
								errors.managerCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedEmployee && selectedEmployee["Diligence"]}
								onChange={(e) => this.handleEmployeeChange(e, "Diligence")}
								placeholder="Enter Comment" />
							{
								errors.employeeCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
					</div>
					<hr />
					<div className="row mt-4">
						<div className="col-md-3">
							<span className="font-weight-bold-600 title-black"> 8. Attention to Detail </span><br />
							<span className="fs-13"> Thorough in accomplishing a task with concern for all the areas involved (no matter how small).  Performs routine or repetitious tasks with care and attention. </span>
						</div>
						<div className="col-md-3">
							<Select
								value={selectedRating && selectedRating["Attention to Detail"]}
								onChange={(select) => this.handleRating(select, "Attention to Detail")}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedManager && selectedManager["Attention to Detail"]}
								onChange={(e) => this.handleManagerChange(e, "Attention to Detail")}
								placeholder="Enter Comment" />
							{
								errors.managerCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								value={selectedEmployee && selectedEmployee["Attention to Detail"]}
								onChange={(e) => this.handleEmployeeChange(e, "Attention to Detail")}
								placeholder="Enter Comment" />
							{
								errors.employeeCommentsError &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
					</div>
					<div className="d-flex justify-content-center mt-5">
						<div className="form-group">
							<button onClick={this.handleSubmit} className="form-submit" > Next</button>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default ProbationSectionB