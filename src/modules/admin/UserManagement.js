import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import ViewUserDetails from './ViewUserDetails';
import AddUser from './AddUser';
import EditUser from './EditUser';
import { getUserList } from '../../utils/admin';
class UserManagement extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
			showAddModal: false,
			showEditModal: false,
			userData: []
		}
	}

	componentDidMount() {
		this.UserList();
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	UserList = () => {
		getUserList().then(response => {
			this.setState({
				userData: response.data && response.data.data ? response.data.data : []
			})
		})
	}

	addUser = () => {
		this.setState({
			showAddModal: !this.state.showAddModal
		})
	}

	editUser = () => {
		this.setState({
			showEditModal: !this.state.showEditModal
		})
	}

	render() {
		const { search, userData } = this.state;
		const columns = [
			{
				Header: 'Employee ID',
				width: 180,
				Cell: ({ original }) => {
					return (
						<ViewUserDetails id={original.uniqueId} />
					);
				},
			},
			{
				Header: 'Employee Name',
				width: 200,
				Cell: ({ original }) => {
					return (
						original.name
					);
				},
			},
			{
				Header: 'Email ID',
				Cell: ({ original }) => {
					return (
						original.officialEmail
					);
				},
			},
			{
				Header: 'Role',
				width: 160,
				Cell: ({ original }) => {
					return (
						original.role.roleName
					);
				},
			},
			{
				Header: 'Status',
				width: 160,
				Cell: ({ original }) => {
					return (
						original.status
					);
				},
			},
			{
				Header: 'Action',
				accessor: 'action',
				width: 140,
				Cell: <div className="cursor-pointer"><i onClick={this.editUser} className="fa fa-edit mr-3" /><i onClick={() => alert("User Deleted")} className="fa fa-trash" /></div>
			},
		]

		return (
			<div className="dash_grid">
				<LeftMenu />
				<main className="bg-white">
					<AdminHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">User Management</h5>
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
							<button onClick={this.addUser} className="add-btn ml-auto"> Add User </button>
							{this.state.showAddModal && <AddUser addUser={this.addUser} />}
							{this.state.showEditModal && <EditUser editUser={this.editUser} />}
						</div>
						<div className="mt-4">
							<ReactTable
								data={userData}
								columns={columns}
								defaultPageSize={5}
							/>
						</div>
					</section>
				</main>
			</div>
		)
	}
}

export default UserManagement