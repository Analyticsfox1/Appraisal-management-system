import React, { Component } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class OneToOneMeeting extends Component {

	state = {
		selectedYear: null,
		selectedMonth: null,
		discussion: '',
		startDate: new Date(),
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

	handleCheckedChange = (e) => {
		this.setState({
			[e.target.name]: e.target.checked
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
		const { selectedYear, selectedMonth, discussion, accept, reject, errors } = this.state;
		return (
			<div>
				<section className="tab-body">
					<div className="row">
						<div className="col-md-4">
							<Select
								cl
								value={selectedYear}
								onChange={this.handleYear}
								placeholder="Year"
							/>
						</div>
						
						<div className="col-md-4">
							<Select
								value={selectedMonth}
								onChange={this.handleMonth}
								placeholder="Month"
							/>
						</div>
						<div className="col-md-2 text-center">
							<label style={{color:'var(--success)'}} className="mr-2">Accept</label>
							<input
								name="accept"
								type="checkbox"
								checked={accept}
								onChange={this.handleCheckedChange} />
						</div>
						<div className="col-md-2">
							<label style={{color:'var(--danger)'}} className="mr-2">Reject</label>
							<input
								name="reject"
								type="checkbox"
								checked={reject}
								onChange={this.handleCheckedChange} />
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
								<label className="fix_label_width">Date:</label>
								<div>
									<DatePicker
										className="form-input"
										selected={this.state.startDate}
										onChange={this.handleDateChange}
										dateFormat="dd-MMM-yyyy"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div >
		)
	}
}

export default OneToOneMeeting