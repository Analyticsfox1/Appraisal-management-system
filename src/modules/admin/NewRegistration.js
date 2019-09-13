import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import { getNewRegisteredList } from '../../utils/admin';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

class NewRegistartion extends Component {
	constructor() {
		super();
		this.state = {
			registerData: []
		}
	}

	componentDidMount() {
		this.NewRegistartionList();
	}

	NewRegistartionList = () => {
		getNewRegisteredList().then(response => {
			this.setState({
				registerData: response.data && response.data.data ? response.data.data : []
			})
		})
	}

	render() {
		const { registerData } = this.state;
		const columns = [
		
			{
				Header: 'Name',
				Cell: ({ original }) => {
					return (
						original.name
					);
				},
			},
			{
				Header: 'Email Id',
				Cell: ({ original }) => {
					return (
						original.email
					);
				},
			},
			{
				Header: 'Mobile No.',
				Cell: ({ original }) => {
					return (
						original.primaryMobile
					);
				},
			},
			{
				Header: 'Status',
				Cell: ({ original }) => {
					return (
						original.status
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
						<h5 className="text-center mt-2 mx-auto user-box">New Registration</h5>
						<div className="mt-4">
							<ReactTable
								data={registerData}
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

export default NewRegistartion