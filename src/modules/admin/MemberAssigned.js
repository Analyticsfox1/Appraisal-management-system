import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import { getMemberAssignedList } from '../../utils/admin';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

class MemberAssigned extends Component {
	constructor() {
		super();
		this.state = {
			memberData: []
		}
	}

	componentDidMount() {
		this.MemberAssignedList();
	}

	MemberAssignedList = () => {
		getMemberAssignedList().then(response => {
			this.setState({
				memberData: response.data && response.data.data ? response.data.data : []
			})
		})
	}

	render() {
		const { memberData } = this.state;
		const columns = [
			{
				Header: 'User ID',
				Cell: ({ original }) => {
					return (
						original.userId
					);
				},
			},
			{
				Header: 'Name',
				Cell: ({ original }) => {
					return (
						original.name
					);
				},
			},
			{
				Header: 'Role',
				Cell: ({ original }) => {
					return (
						original.role
					);
				},
			},
		]
		return (
			<div className="dash_grid">
				<LeftMenu />
				<main className="bg-white">
					<AdminHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">Member Assigned</h5>
						<div className="mt-4">
							<ReactTable
								data={memberData}
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

export default MemberAssigned