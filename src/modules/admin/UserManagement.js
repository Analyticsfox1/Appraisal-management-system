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
		}, () => this.UserList())
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
				width: 150,
				Cell: ({ original }) => {
					return (
						<ViewUserDetails id={original.uniqueId} />
					);
				},
			},
			{
				Header: 'Employee Name',
				width: 150,
				Cell: ({ original }) => {
					return (
						original.name
					);
				},
			},
			{
				Header: 'Address',
				width: 100,
				Cell: ({ original }) => {
					return (
						original.address
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
				Header: 'Aadhar No.',
				width: 140,
				Cell: ({ original }) => {
					return (
						original.aadharNo
					);
				},
			},
			{
				Header: 'Account No.',
				width: 150,
				Cell: ({ original }) => {
					return (
						original.accountNumber
					);
				},
			},
			{
				Header: 'Role',
				width: 100,
				Cell: ({ original }) => {
					return (
						original.role.roleName
					);
				},
			},
			{
				Header: 'Status',
				width: 100,
				Cell: ({ original }) => {
					return (
						original.status
					);
				},
			},
			{
				Header: 'Action',
				accessor: 'action',
				width: 100,
				Cell: <div className="cursor-pointer"><i onClick={this.editUser} className="fa fa-edit mr-3" /></div>
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
								defaultPageSize={10}
							/>
						</div>
					</section>
				</main>
			</div>
		)
	}
}

export default UserManagement