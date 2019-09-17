import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import { getNewRegisteredList } from '../../utils/admin';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import VerifyUser from './VerifyUser';

class NewRegistartion extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			verifyObj: '',
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

	userVerify = (id) => {
		let obj = this.state.registerData.find(obj => obj.id === id);
		this.setState({
			showModal: !this.state.showModal,
			verifyObj: obj ? obj.id : null
		}, () => this.NewRegistartionList())
	}

	render() {
		const { registerData, showModal, verifyObj } = this.state;
		const columns = [
			{
				Header: 'User Id',
				Cell: ({ original }) => {
					return (
						original.id ? original.id : null
					);
				},
			},
			{
				Header: 'Name',
				Cell: ({ original }) => {
					return (
						original.name ? original.name : null
					);
				},
			},
			{
				Header: 'Email Id',
				Cell: ({ original }) => {
					return (
						original.email ? original.email : null
					);
				},
			},
			{
				Header: 'Mobile No.',
				Cell: ({ original }) => {
					return (
						original.primaryMobile ? original.primaryMobile : null
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
			{
				Header: 'Action',
				accessor: 'action',
				width: 100,
				Cell: ({ original }) => {
					return (
						<div className="cursor-pointer">
							<i onClick={() => this.userVerify(original.id)} className="fas fa-user-check" />
						</div>
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
						{showModal && <VerifyUser verifyObj={verifyObj} userVerify={this.userVerify} />}
					</section>
				</main>
			</div>
		)
	}
}

export default NewRegistartion