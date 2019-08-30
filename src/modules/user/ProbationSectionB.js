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
		rating1: null,
		rating2: null,
		rating3: null,
		rating4: null,
		rating5: null,
		rating6: null,
		rating7: null,
		rating8: null,
		manager1: '',
		manager2: '',
		manager3: '',
		manager4: '',
		manager5: '',
		manager6: '',
		manager7: '',
		manager8: '',
		employee1: '',
		employee2: '',
		employee3: '',
		employee4: '',
		employee5: '',
		employee6: '',
		employee7: '',
		employee8: '',
		errors: {
			manager1Error: null,
			manager2Error: null,
			manager3Error: null,
			manager4Error: null,
			manager5Error: null,
			manager6Error: null,
			manager7Error: null,
			manager8Error: null,
			employee1Error: null,
			employee2Error: null,
			employee3Error: null,
			employee4Error: null,
			employee5Error: null,
			employee6Error: null,
			employee7Error: null,
			employee8Error: null,
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

	handleRating1 = rating1 => {
		this.setState({ rating1 });
	}

	handleRating2 = rating2 => {
		this.setState({ rating2 });
	}

	handleRating3 = rating3 => {
		this.setState({ rating3 });
	}

	handleRating4 = rating4 => {
		this.setState({ rating4 });
	}

	handleRating5 = rating5 => {
		this.setState({ rating5 });
	}

	handleRating6 = rating6 => {
		this.setState({ rating6 });
	}

	handleRating7 = rating7 => {
		this.setState({ rating7 });
	}

	handleRating8 = rating8 => {
		this.setState({ rating8 });
	}

	render() {
		const { rating1, rating2, rating3, rating4, rating5, rating6, rating7, rating8, manager1, manager2, manager3, manager4, manager5, manager6, manager7, manager8,
			employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, errors } = this.state;
		return (
			<section className="tab-body probation-form dash_space">
				<div className="row">
					<div className="col-md-8">
						<div className="rating-box">
							<h6 className="title-orange text-center">Rating Description</h6>
							<div className="row mt-3">
								<span className="col-md-4"> 1. Below Expectations</span>
								<span className="col-md-8 text-justify"> Performing in some areas only, needs significant improvement to achieve the required standard.  There are weaknesses apparent in the performance of the employee which can/cannot be overcome at this time.</span>
							</div>
							<div className="row mt-2">
								<span className="col-md-4"> 2. Met Expectations</span>
								<span className="col-md-8 text-justify"> Good performance, all objectives were delivered and expectations were met to the required standard. Overall staff member is effective in the role.</span>
							</div>
							<div className="row mt-2">
								<span className="col-md-4"> 3. Expectations met at high standard</span>
								<span className="col-md-8 text-justify"> Very good performance, employee performing very well to a noticeably good quality, with a high level of output to a high standard.</span>
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
								<span className="col-md-12"> 1. Rate the employee's performance against the competencies, concluding with the overall rating for this probation review. </span>
							</div>
							<div className="row mt-3">
								<span className="col-md-12"> 2. If the competency is not relevant, select "Not relevant to the role". </span>
							</div>
							<div className="row mt-3">
								<span className="col-md-12"> 3. For ratings that are "Below Expectations", agree for Performance Improvement Plan (PIP) for the employee </span>
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
								value={rating1}
								onChange={this.handleRating1}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="manager1"
								value={manager1}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.manager1Error &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="employee1"
								value={employee1}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.employee1Error &&
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
								value={rating2}
								onChange={this.handleRating2}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="manager2"
								value={manager2}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.manager2Error &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="employee2"
								value={employee2}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.employee2Error &&
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
								value={rating3}
								onChange={this.handleRating3}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="manager3"
								value={manager3}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.manager3Error &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="employee3"
								value={employee3}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.employee3Error &&
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
								value={rating4}
								onChange={this.handleRating4}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="manager4"
								value={manager4}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.manager4Error &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="employee4"
								value={employee4}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.employee4Error &&
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
								value={rating5}
								onChange={this.handleRating5}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="manager5"
								value={manager5}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.manager5Error &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="employee5"
								value={employee5}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.employee5Error &&
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
								value={rating6}
								onChange={this.handleRating6}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="manager6"
								value={manager6}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.manager6Error &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="employee6"
								value={employee6}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.employee6Error &&
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
								value={rating7}
								onChange={this.handleRating7}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="manager7"
								value={manager7}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.manager7Error &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="employee7"
								value={employee7}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.employee7Error &&
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
								value={rating8}
								onChange={this.handleRating8}
								options={ratingOption}
							/>
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="manager8"
								value={manager8}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.manager8Error &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
						<div className="col-md-3">
							<textarea
								type="text"
								className="form-input"
								name="employee8"
								value={employee8}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
								placeholder="Enter Comment" />
							{
								errors.employee8Error &&
								<span className="errorMsg">Please enter comment</span>
							}
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default ProbationSectionB