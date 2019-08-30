import React, { Component } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';

class OneToOneMeeting extends Component {

	state = {
		selectedYear: null,
		selectedMonth: null,
		discussion: '',
		update: '',
		startDate: '',
		meetingStatus: '',
		accept: false,
		reject: false,
		errors: {
			discussionError: null,
		}
	}

	handleYear = (selectedYear) => {
		this.setState({ selectedYear });
	}

	handleMonth = (selectedMonth) => {
		this.setState({ selectedMonth });
	}

	handleDateChange = (date) => {
		this.setState({
			startDate: date
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onChanged = (e) => {
		this.setState({
			meetingStatus: e.currentTarget.value
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
		const { selectedYear, selectedMonth, discussion, meetingStatus, update, errors } = this.state;
		return (
			<div>
				<section className="tab-body">
					<div className="row">
						<div className="col-md-12 text-right">
							<button type="button" className="btn btn-rounded btn-success new"><span className="fa fa-plus"></span> Add Meeting</button>
						</div>

						<div className="col-md-4 mt-4">
							<Select
								cl
								value={selectedYear}
								onChange={this.handleYear}
								placeholder="Year"
							/>
						</div>

						<div className="col-md-4 mt-4">
							<Select
								value={selectedMonth}
								onChange={this.handleMonth}
								placeholder="Month"
							/>
						</div>
						<div className="col-md-4 mt-4">
							<DatePicker
								className="form-input date"
								selected={this.state.startDate}
								onChange={this.handleDateChange}
								dateFormat="dd-MMM-yyyy"
								placeholderText="dd-MMM-yyyy"
							/>
						</div>
					</div>

					<div className="row mt-4">
						<div className="col-md-8">
							<div>
								<label className="fix_label_width">Discussion Points:</label>
								<div className="flex-grow-1">
									<textarea
										type="text"
										className="form-input"
										name="discussion"
										value={discussion}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										placeholder="Please Enter" />
									{
										errors.discussionError &&
										<span className="errorMsg">Please enter points</span>
									}
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div>
								<label className="fix_label_width">Update:</label>
								<div className="flex-grow-1">
									<input
										type="text"
										className="form-input"
										name="update"
										value={update}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										placeholder="Please Enter" />
									{
										errors.updateError &&
										<span className="errorMsg">Please enter</span>
									}
								</div>

								<div className="mt-2">
									<label style={{ color: 'var(--success)' }}>
										<input
											type="radio"
											className="mr-2"
											name="meetingStatus"
											value="accept"
											checked={meetingStatus === "accept"}
											onChange={this.onChanged} />
										Accept </label>
									<label className="ml-2" style={{ color: 'var(--danger)' }}>
										<input
											className="ml-2 mr-2"
											type="radio"
											name="meetingStatus"
											value="reject"
											checked={meetingStatus === "reject"}
											onChange={this.onChanged} />
										Reject </label>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex">
						<Button className="btn-success mt-3 ml-auto">Submit</Button>
					</div>
				</section>
			</div >
		)
	}
}

export default OneToOneMeeting