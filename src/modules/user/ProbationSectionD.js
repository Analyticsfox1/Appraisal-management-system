import React, { Component } from 'react';
import { addProbationForm } from '../../utils/user';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();

class ProbationSectionD extends Component {

	constructor() {
		super();
		this.state = {
			ovrallEmpPerfRate: '',
			mangrComment: '',
			errors: {
				ovrallEmpPerfRateError: null,
				mangrCommentError: null,
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
		const { errors, ovrallEmpPerfRate, mangrComment } = this.state;
		let isAdd = true;

		for (var val in errors) {
			if (errors[val] === null || errors[val]) {
				errors[val] = true;
				isAdd = false;
			}
		}

		let obj = { ovrallEmpPerfRate, mangrComment }
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
		const { ovrallEmpPerfRate, mangrComment, errors } = this.state;
		return (
			<>
				<ToastContainer />
				<section className="tab-body dash_space text-justify probation">
					<div className="row mt-3">
						<span className="col-md-4">Based on the ratings above, rate the employee's overall performance</span>
						<div className="col-md-8">
							<input
								type="text"
								className="form-input"
								name="ovrallEmpPerfRate"
								value={ovrallEmpPerfRate}
								onChange={this.handleChange}
								onBlur={this.handleValidate}
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
								onBlur={this.handleValidate}
								placeholder="Enter Answer" />
							{
								errors.mangrCommentError &&
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
			</>
		)
	}
}

export default ProbationSectionD