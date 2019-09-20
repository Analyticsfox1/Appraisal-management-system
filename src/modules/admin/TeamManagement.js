import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import AddTeam from './AddTeam';
import { getTeamList } from '../../utils/admin';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

class TeamManagement extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
			showAddModal: false,
			userData: []
		}
	}

	componentDidMount() {
		this.TeamList();
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addTeam = () => {
		this.setState({
			showAddModal: !this.state.showAddModal
		}, () => this.TeamList())
	}

	TeamList = () => {
		getTeamList().then(response => {
			this.setState({
				teamData: response.data && response.data.data ? response.data.data : []
			})
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
		const { search, teamData } = this.state;
		const columns = [
			{
				Header: 'Project Name',
				width: 250,
				Cell: ({ original }) => {
					return (
						original.projectName ? original.projectName : null
					);
				},
			},
			{
				Header: 'Manager Name',
				width: 250,
				Cell: ({ original }) => {
					return (
						original.managerName ? original.managerName : null
					);
				},
			},
			{
				Header: 'Comment',
				Cell: ({ original }) => {
					return (
						original.comment ? original.comment : null
					);
				},
			},
			{
				Header: 'Status',
				width: 200,
				Cell: ({ original }) => {
					return (
						original.status ? original.status === 'Active' ? <img src="./assets/images/green_light.png" /> : <img src="./assets/images/red_light.png" /> : null
					);
				},
			},
		]
		return (
			<div className="dash_grid user-page">
				<LeftMenu />
				<main className="bg-white">
					<AdminHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">Team Management</h5>
						<div className="d-flex align-items-center mt-3">
							<div className="form-group m-0 search-input">
								<input
									type="text"
									className="form-input"
									name="search"
									value={search}
									onChange={this.handleChange}
									onBlur={this.handleValidate}
									placeholder="Search..." />
							</div>
							<button onClick={this.addTeam} className="add-btn ml-auto"> Add Team </button>
							{this.state.showAddModal && <AddTeam addTeam={this.addTeam} />}
						</div>
						<div className="mt-4">
							<ReactTable
								data={teamData}
								columns={columns}
								defaultPageSize={10}
							/>
						</div>
					</section>

				</main>
			</div>
		)
	}
}

export default TeamManagement