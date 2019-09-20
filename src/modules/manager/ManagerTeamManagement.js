import React, { Component } from 'react';
import LeftMenu from '../manager/LeftMenu';
import ManagerHeader from '../manager/ManagerHeader';
import { getManagerTeams } from '../../utils/manager';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

class ManagerTeamManagement extends Component {
	constructor() {
		super();
		this.state = {
			teamData: []
		}
	}

	componentDidMount() {
		this.ManagerTeamList();
	}

	ManagerTeamList = () => {
		const { teamData } = this.state;
		let obj = JSON.parse(sessionStorage.getItem('managerData'));
		getManagerTeams(obj ? obj.userId : null).then(response => {
			this.setState({
				teamData: response.data && response.data.managerTeamList ? response.data.managerTeamList : []
			})
		})
	}

	render() {
		const { teamData } = this.state;
		const columns = [
			{
				Header: 'Employee Name',
				Cell: ({ original }) => {
					return (
						original.Employees ? original.Employees : null
					);
				},
			},
			{
				Header: 'Project Name',
				Cell: ({ original }) => {
					return (
						original.projectName ? original.projectName : null
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
				Cell: ({ original }) => {
					return (
						original.status ? original.status : null
					);
				},
			},
		]
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main className="bg-white">
					<ManagerHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">Team Management</h5>
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

export default ManagerTeamManagement