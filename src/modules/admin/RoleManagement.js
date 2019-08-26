import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

class RoleManagement extends Component {
	constructor() {
		super();
		this.state = {
			search: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { search } = this.state;
		const data = [{
			role: 'Admin',
			description: 'It have all rights',
		}, {
			role: 'CEO',
			description: 'Company Role',
		}, {
			role: 'Manager',
			description: 'It will manage everything',
		},]

		const columns = [{
			Header: 'Role Name',
			accessor: 'role',
			width: 250,
		}, {
			Header: 'Description',
			accessor: 'description',
		}, {
			Header: 'Action',
			accessor: 'action',
			width: 100,
			Cell: <div><i className="fa fa-trash" /></div>
		},]

		return (
			<div className="dash_grid">
				<LeftMenu />
				<main className="bg-white">
					<AdminHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">Role Management</h5>
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
							<button className="add-btn ml-auto"> Add Role </button>
						</div>
						<div className="mt-4">
							<ReactTable
								data={data}
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

export default RoleManagement