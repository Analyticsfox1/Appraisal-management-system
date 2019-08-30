import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import Select from 'react-select';

class TeamManagement extends Component {
	constructor() {
		super();
		this.state = {
			prj_name: '',
			selectedManager: null,
			selectedMember: null,
			comments: '',
			errors: {
				prj_nameError: null,
				commentsError: null,
			}
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleManager = selectedManager => {
		this.setState({ selectedManager })
	}

	handleMember = selectedMember => {
		this.setState({ selectedMember })
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
		const { prj_name, selectedManager, selectedMember, comments, errors } = this.state;
		return (
			<div className="dash_grid team-page">
				<LeftMenu />
				<main className="bg-white">
					<AdminHeader {...this.props} />
					<section className="container-fluid px-5">
						<h5 className="text-center mt-2 mx-auto user-box">Team Management</h5>

						<div className="row mt-5">
							<div className="col-md-2">
								<label>Name of the project:</label>
							</div>
							<div className="col-md-4">
								<input
									type="text"
									className="form-input"
									name="prj_name"
									value={prj_name}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Project Name" />
								{
									errors.prj_nameError &&
									<span className="errorMsg">Please enter project name</span>
								}
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-md-2">
								<label>Manager:</label>
							</div>
							<div className="col-md-4">
								<Select
									className="m-0 w-100"
									value={selectedManager}
									onChange={this.handleManager}
								/>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-md-2">
								<label>Team Member:</label>
							</div>
							<div className="col-md-4">
								<Select
									className="m-0 w-100"
									value={selectedMember}
									onChange={this.handleMember}
								/>
							</div>
							<div className="col-md-2">
								<button className="add-member ml-auto"> Add Member</button>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-md-2">
								<label>Comments:</label>
							</div>
							<div className="col-md-6">
								<textarea
									type="text"
									className="form-input m-0 w-100"
									name="comments"
									value={comments}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Enter Comments" />
								{
									errors.commentsError &&
									<span className="errorMsg">Please enter comments</span>
								}
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-md-3">
								<button className="btn-success team-btn"> Submit</button>
							</div>
							<div className="col-md-3">
								<button className="btn-danger team-btn"> Cancel</button>
							</div>
							<div className="col-md-3">
								<button className="add-member"> Initiate KRA</button>
							</div>
						</div>


					</section>
				</main>
			</div>
		)
	}
}

export default TeamManagement