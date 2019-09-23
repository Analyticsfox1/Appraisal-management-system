import React, { Component } from 'react';
import Select from 'react-select';
import { addProbationForm, getProbationFormByUniqueId } from '../../utils/user';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();

const ratingOption = [
	{ value: 'Below Expectations', label: 'Below Expectations' },
	{ value: 'Met Expectations', label: 'Met Expectations' },
	{ value: 'Expectations met at high standard', label: 'Expectations met at high standard' },
	{ value: 'Not relevant to the role', label: 'Not relevant to the role' },
];

class ManagerProbationSection extends Component {

	state = {
		user: {},
		PerfApprList: {},
		coursesAttndToDate: null,
		coursesFuture: null,
		ovrallEmpPerfRate: null,
		mangrComment: null,
		finalRecommendation: null,
		empCheckbox: null,
		mangrCheckbox: null,
		probFormId: null,
		errors: {
			coursesAttndToDateError: null,
			coursesFutureError: null,
			ovrallEmpPerfRateError: null,
			mangrCommentError: null,
			empCheckboxError: null,
			mangrCheckboxError: null,
		}
	}

	componentDidMount() {
		if (sessionStorage.getItem('userData')) {
			this.ProbationFormData();
		}
	}

	ProbationFormData = () => {
		const { PerfApprList, selectedRating } = this.state;
		let userObj = JSON.parse(sessionStorage.getItem('userData'));
		this.setState({
			user: userObj
		})
		getProbationFormByUniqueId(userObj ? userObj.uniqueId : null).then(response => {
			if (response.data && response.data.error === 'false') {
				let data = response.data.data;
				Object.keys(data.probPerfApprList).map(key => {
					PerfApprList[data.probPerfApprList[key].compentency] = data.probPerfApprList[key];
				});
				this.setState(data)
				this.setState({ probFormId: response.data && response.data.data.probFormId })
				toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
			}
			if (response.data && response.data.error === 'true') {
				toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
			}
		})
	}

	onChanged = (e) => {
		this.setState({
			finalRecommendation: e.currentTarget.value
		});
	}

	onCheckboxChanged = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.checked
		});
	}

	handleManagerChange = (e, name) => {
		let value = e.target.value;
		this.setState(state => ({
			selectedManager: {
				...state.selectedManager,
				[name]: value,
			},
			PerfApprList: {
				...state.PerfApprList,
				[name]: {
					...state.PerfApprList[name],
					compentency: name,
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
			PerfApprList: {
				...state.PerfApprList,
				[name]: {
					...state.PerfApprList[name],
					compentency: name,
					employeeComments: value
				}
			}
		}))
	}

	handleRating = (select, name, fieldName) => {
		this.setState(state => ({
			selectedRating: {
				...state.selectedRating,
				[name]: select,
			},
			PerfApprList: {
				...state.PerfApprList,
				[name]: {
					...state.PerfApprList[name],
					compentency: name,
					rating: select.value
				}
			}
		}))
	}

	handleValidate = (e, name) => {
		const { errors } = this.state;
		let value = e.target.value;
		let fieldName = e.target.name;
		if (value === "" || value === null || value === undefined) {
			this.setState({
				errors: {
					...this.state.errors,
					[name]: {
						...this.state.errors[name],
						[fieldName + 'Error']: true
					}
				}
			});
		}
		else {
			this.setState({
				errors: {
					...this.state.errors,
					[name]: {
						...this.state.errors[name],
						[fieldName + 'Error']: false
					}
				}
			});
		}
	}

	onValidate = (e, name, fieldName) => {
		const { errors, selectedRating } = this.state;
		if (!selectedRating || !selectedRating[name]) {
			this.setState({
				errors: {
					...this.state.errors,
					[name]: {
						...this.state.errors[name],
						[fieldName + 'Error']: true
					}
				}
			});
		}
		else {
			this.setState({
				errors: {
					...this.state.errors,
					[name]: {
						...this.state.errors[name],
						[fieldName + 'Error']: false
					}
				}
			});
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSectionValidate = (e) => {
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
		const { PerfApprList, coursesAttndToDate, coursesFuture, ovrallEmpPerfRate, mangrComment, finalRecommendation, empCheckbox, mangrCheckbox, user, probFormId } = this.state;

		let probPerfApprList = Object.values(PerfApprList);
		let userUniqueId = user ? user.uniqueId : null
		let createdDate = null
		let updatedDate = null
		let inProbation = false
		let obj = { probPerfApprList, coursesAttndToDate, coursesFuture, ovrallEmpPerfRate, mangrComment, finalRecommendation, empCheckbox, mangrCheckbox, userUniqueId, createdDate, updatedDate, inProbation, probFormId }

		addProbationForm(obj).then(response => {
			if (response.data && response.data.error === 'false') {
				toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 });
			}
			if (response.data && response.data.error === 'true') {
				toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
			}
		})
	}

	render() {
		const { selectedRating, selectedManager, selectedEmployee, PerfApprList, coursesAttndToDate, coursesFuture, ovrallEmpPerfRate, mangrComment, finalRecommendation, empCheckbox, mangrCheckbox, errors, data } = this.state;
		return (
			<>
				<ToastContainer />
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
					<h5 className="mt-4 text-center title-blue"> Performance Appraisal </h5>
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
									value={selectedRating && selectedRating['Time Keeping']}
									onChange={(select) => this.handleRating(select, "Time Keeping", "rating")}
									onBlur={(e) => this.onValidate(e, "Time Keeping", "rating")}
									options={ratingOption}
								/>
								{
									errors["Time Keeping"] && errors["Time Keeping"].ratingError &&
									<span className="errorMsg">Please select rating</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									name="managerComments"
									className="form-input"
									value={PerfApprList["Time Keeping"] && PerfApprList["Time Keeping"].managerComments}
									onChange={(e) => this.handleManagerChange(e, "Time Keeping")}
									onBlur={(e) => this.handleValidate(e, "Time Keeping")}
									placeholder="Enter Comment" />
								{
									errors["Time Keeping"] && errors["Time Keeping"].managerCommentsError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									name="employeeComments"
									className="form-input"
									value={PerfApprList["Time Keeping"] && PerfApprList["Time Keeping"].employeeComments}
									onChange={(e) => this.handleEmployeeChange(e, "Time Keeping")}
									disabled={true}
									onBlur={(e) => this.handleValidate(e, "Time Keeping")}
									placeholder="Enter Comment" />
								{
									errors["Time Keeping"] && errors["Time Keeping"].employeeCommentsError &&
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
									value={selectedRating && selectedRating['Knowledge of Testing/ Development Process']}
									onChange={(select) => this.handleRating(select, "Knowledge of Testing/ Development Process")}
									onBlur={(e) => this.onValidate(e, "Knowledge of Testing/ Development Process", "rating")}
									options={ratingOption}
								/>
								{
									errors["Knowledge of Testing/ Development Process"] && errors["Knowledge of Testing/ Development Process"].ratingError &&
									<span className="errorMsg">Please select rating</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="managerComments"
									value={PerfApprList["Knowledge of Testing/ Development Process"] && PerfApprList["Knowledge of Testing/ Development Process"].managerComments}
									onChange={(e) => this.handleManagerChange(e, "Knowledge of Testing/ Development Process")}
									onBlur={(e) => this.handleValidate(e, "Knowledge of Testing/ Development Process")}
									placeholder="Enter Comment" />
								{
									errors["Knowledge of Testing/ Development Process"] && errors["Knowledge of Testing/ Development Process"].managerCommentsError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="employeeComments"
									value={PerfApprList["Knowledge of Testing/ Development Process"] && PerfApprList["Knowledge of Testing/ Development Process"].employeeComments}
									onChange={(e) => this.handleEmployeeChange(e, "Knowledge of Testing/ Development Process")}
									onBlur={(e) => this.handleValidate(e, "Knowledge of Testing/ Development Process")}
									disabled={true}
									placeholder="Enter Comment" />
								{
									errors["Knowledge of Testing/ Development Process"] && errors["Knowledge of Testing/ Development Process"].employeeCommentsError &&
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
									onBlur={(e) => this.onValidate(e, "Motivation, Flexibility and Dependability", "rating")}
									options={ratingOption}
								/>
								{
									errors["Motivation, Flexibility and Dependability"] && errors["Motivation, Flexibility and Dependability"].ratingError &&
									<span className="errorMsg">Please select rating</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="managerComments"
									value={PerfApprList["Motivation, Flexibility and Dependability"] && PerfApprList["Motivation, Flexibility and Dependability"].managerComments}
									onChange={(e) => this.handleManagerChange(e, "Motivation, Flexibility and Dependability")}
									onBlur={(e) => this.handleValidate(e, "Motivation, Flexibility and Dependability")}
									placeholder="Enter Comment" />
								{
									errors["Motivation, Flexibility and Dependability"] && errors["Motivation, Flexibility and Dependability"].managerCommentsError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="employeeComments"
									value={PerfApprList["Motivation, Flexibility and Dependability"] && PerfApprList["Motivation, Flexibility and Dependability"].employeeComments}
									onChange={(e) => this.handleEmployeeChange(e, "Motivation, Flexibility and Dependability")}
									onBlur={(e) => this.handleValidate(e, "Motivation, Flexibility and Dependability")}
									disabled={true}
									placeholder="Enter Comment" />
								{
									errors["Motivation, Flexibility and Dependability"] && errors["Motivation, Flexibility and Dependability"].employeeCommentsError &&
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
									onBlur={(e) => this.onValidate(e, "Initiative and openness to learning", "rating")}
									options={ratingOption}
								/>
								{
									errors["Initiative and openness to learning"] && errors["Initiative and openness to learning"].ratingError &&
									<span className="errorMsg">Please select rating</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="managerComments"
									value={PerfApprList["Initiative and openness to learning"] && PerfApprList["Initiative and openness to learning"].managerComments}
									onChange={(e) => this.handleManagerChange(e, "Initiative and openness to learning")}
									onBlur={(e) => this.handleValidate(e, "Initiative and openness to learning")}
									placeholder="Enter Comment" />
								{
									errors["Initiative and openness to learning"] && errors["Initiative and openness to learning"].managerCommentsError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="employeeComments"
									value={PerfApprList["Initiative and openness to learning"] && PerfApprList["Initiative and openness to learning"].employeeComments}
									onChange={(e) => this.handleEmployeeChange(e, "Initiative and openness to learning")}
									onBlur={(e) => this.handleValidate(e, "Initiative and openness to learning")}
									disabled={true}
									placeholder="Enter Comment" />
								{
									errors["Initiative and openness to learning"] && errors["Initiative and openness to learning"].employeeCommentsError &&
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
									onBlur={(e) => this.onValidate(e, "Communication Skills /Interpersonal Skills", "rating")}
									options={ratingOption}
								/>
								{
									errors["Communication Skills /Interpersonal Skills"] && errors["Communication Skills /Interpersonal Skills"].ratingError &&
									<span className="errorMsg">Please select rating</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="managerComments"
									value={PerfApprList["Communication Skills /Interpersonal Skills"] && PerfApprList["Communication Skills /Interpersonal Skills"].managerComments}
									onChange={(e) => this.handleManagerChange(e, "Communication Skills /Interpersonal Skills")}
									onBlur={(e) => this.handleValidate(e, "Communication Skills /Interpersonal Skills")}
									placeholder="Enter Comment" />
								{
									errors["Communication Skills /Interpersonal Skills"] && errors["Communication Skills /Interpersonal Skills"].managerCommentsError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="employeeComments"
									value={PerfApprList["Communication Skills /Interpersonal Skills"] && PerfApprList["Communication Skills /Interpersonal Skills"].employeeComments}
									onChange={(e) => this.handleEmployeeChange(e, "Communication Skills /Interpersonal Skills")}
									onBlur={(e) => this.handleValidate(e, "Communication Skills /Interpersonal Skills")}
									disabled={true}
									placeholder="Enter Comment" />
								{
									errors["Communication Skills /Interpersonal Skills"] && errors["Communication Skills /Interpersonal Skills"].employeeCommentsError &&
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
									onBlur={(e) => this.onValidate(e, "Team Work", "rating")}
									options={ratingOption}
								/>
								{
									errors["Team Work"] && errors["Team Work"].ratingError &&
									<span className="errorMsg">Please select rating</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="managerComments"
									value={PerfApprList["Team Work"] && PerfApprList["Team Work"].managerComments}
									onChange={(e) => this.handleManagerChange(e, "Team Work")}
									onBlur={(e) => this.handleValidate(e, "Team Work")}
									placeholder="Enter Comment" />
								{
									errors["Team Work"] && errors["Team Work"].managerCommentsError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="employeeComments"
									value={PerfApprList["Team Work"] && PerfApprList["Team Work"].employeeComments}
									onChange={(e) => this.handleEmployeeChange(e, "Team Work")}
									onBlur={(e) => this.handleValidate(e, "Team Work")}
									disabled={true}
									placeholder="Enter Comment" />
								{
									errors["Team Work"] && errors["Team Work"].employeeCommentsError &&
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
									onBlur={(e) => this.onValidate(e, "Diligence", "rating")}
									options={ratingOption}
								/>
								{
									errors["Diligence"] && errors["Diligence"].ratingError &&
									<span className="errorMsg">Please select rating</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="managerComments"
									value={PerfApprList["Diligence"] && PerfApprList["Diligence"].managerComments}
									onChange={(e) => this.handleManagerChange(e, "Diligence")}
									onBlur={(e) => this.handleValidate(e, "Diligence")}
									placeholder="Enter Comment" />
								{
									errors["Diligence"] && errors["Diligence"].managerCommentsError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="employeeComments"
									value={PerfApprList["Diligence"] && PerfApprList["Diligence"].employeeComments}
									onChange={(e) => this.handleEmployeeChange(e, "Diligence")}
									onBlur={(e) => this.handleValidate(e, "Diligence")}
									disabled={true}
									placeholder="Enter Comment" />
								{
									errors["Diligence"] && errors["Diligence"].employeeCommentsError &&
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
									onBlur={(e) => this.onValidate(e, "Attention to Detail", "rating")}
									options={ratingOption}
								/>
								{
									errors["Attention to Detail"] && errors["Attention to Detail"].ratingError &&
									<span className="errorMsg">Please select rating</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="managerComments"
									value={PerfApprList["Attention to Detail"] && PerfApprList["Attention to Detail"].managerComments}
									onChange={(e) => this.handleManagerChange(e, "Attention to Detail")}
									onBlur={(e) => this.handleValidate(e, "Attention to Detail")}
									placeholder="Enter Comment" />
								{
									errors["Attention to Detail"] && errors["Attention to Detail"].managerCommentsError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
							<div className="col-md-3">
								<textarea
									type="text"
									className="form-input"
									name="employeeComments"
									value={PerfApprList["Attention to Detail"] && PerfApprList["Attention to Detail"].employeeComments}
									disabled={true}
									onChange={(e) => this.handleEmployeeChange(e, "Attention to Detail")}
									onBlur={(e) => this.handleValidate(e, "Attention to Detail")}
									placeholder="Enter Comment" />
								{
									errors["Attention to Detail"] && errors["Attention to Detail"].employeeCommentsError &&
									<span className="errorMsg">Please enter comment</span>
								}
							</div>
						</div>
					</div>
					<h5 className="mt-4 text-center title-blue"> Training Needs / Undertaken </h5>
					<div className="table-border mt-4 p-3">
						<div className="row mt-3">
							<span className="col-md-4">Outline any courses the employee has attended to date.</span>
							<div className="col-md-8">
								<input
									type="text"
									className="form-input"
									name="coursesAttndToDate"
									value={coursesAttndToDate}
									onChange={this.handleChange}
									onBlur={this.handleSectionValidate}
									placeholder="Enter Answer" />
								{
									errors.coursesAttndToDateError &&
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
									name="coursesFuture"
									value={coursesFuture}
									onChange={this.handleChange}
									onBlur={this.handleSectionValidate}
									placeholder="Enter Answer" />
								{
									errors.coursesFutureError &&
									<span className="errorMsg">Please enter answer</span>
								}
							</div>
						</div>
					</div>
					<h5 className="mt-4 text-center title-blue"> Overall Rating </h5>
					<div className="table-border mt-4 p-3">
						<div className="row mt-3">
							<span className="col-md-4">Based on the ratings above, rate the employee's overall performance</span>
							<div className="col-md-8">
								<input
									type="text"
									className="form-input"
									name="ovrallEmpPerfRate"
									value={ovrallEmpPerfRate}
									onChange={this.handleChange}
									onBlur={this.handleSectionValidate}
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
									onBlur={this.handleSectionValidate}
									placeholder="Enter Answer" />
								{
									errors.mangrCommentError &&
									<span className="errorMsg">Please enter answer</span>
								}
							</div>
						</div>
					</div>
					<h5 className="mt-4 text-center title-blue"> Final Outcome </h5>
					<div className="table-border mt-4 p-3">
						<div className="row">
							<p className="ml-4 title-orange">Select one of the two final recommendations:</p>
							<div className="row mt-3">
								<div style={{ paddingLeft: '70px' }} className="col-md-1">
									<input
										type="radio"
										name="finalRecommendation"
										value={1}
										checked={finalRecommendation == 1}
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
										value={2}
										checked={finalRecommendation == 2}
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
								<label className="pt-0 title-orange checkbox_2">
									<input
										type="checkbox"
										className="checkbox2"
										name="empCheckbox"
										checked={empCheckbox}
										disabled={true}
										onChange={this.onCheckboxChanged} id="check_emp"
									/>Employee <label className="check_label" htmlFor="check_emp"></label>
								</label>
							</div>

							<div className="col-md-2">
								<label className="pt-0 title-orange checkbox_2">
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
					</div>
					{
						mangrCheckbox ?
							<div className="d-flex justify-content-center mt-5">
								<div className="form-group mb-0">
									<button onClick={this.handleSubmit} className="form-submit" > Submit</button>
								</div>
							</div> :
							null
					}
				</section>
			</>
		)
	}
}

export default ManagerProbationSection