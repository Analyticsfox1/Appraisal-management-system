import React, { Component } from 'react';
import { addProbationForm } from '../../utils/user';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();

class ProbationSectionC extends Component {

	constructor() {
		super();
		this.state = {
			coursesAttndToDate: '',
			coursesFuture: '',
			errors: {
				coursesAttndToDateError: null,
				coursesFutureError: null,
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

	handleSubmit = (event) => {
		const { errors, coursesAttndToDate, coursesFuture } = this.state;
		let isAdd = true;

		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isAdd = false;
			}
		}

		let obj = { coursesAttndToDate, coursesFuture }
		if (isAdd) {
			addProbationForm(obj).then(response => {
				if (response.data && response.data.error === 'false') {
					toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 });
				}
				if (response.data && response.data.error === 'true') {
					toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
				}
			})
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { coursesAttndToDate, coursesFuture, errors } = this.state;
		return (
			<section className="tab-body dash_space text-justify probation">
				<ToastContainer />
				<div className="row mt-3">
					<span className="col-md-4">Outline any courses the employee has attended to date.</span>
					<div className="col-md-8">
						<input
							type="text"
							className="form-input"
							name="coursesAttndToDate"
							value={coursesAttndToDate}
							onChange={this.handleChange}
							onBlur={this.handleValidate}
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
							onBlur={this.handleValidate}
							placeholder="Enter Answer" />
						{
							errors.coursesFutureError &&
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

export default ProbationSectionC