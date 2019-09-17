import React, { Component } from 'react';
import LeftMenu from '../admin/LeftMenu';
import AdminHeader from '../admin/AdminHeader';
import Select from 'react-select';
import { getRoleList, getAllPageList, addAccess, getAccessById } from '../../utils/admin';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();


class AccessManagement extends Component {

	constructor() {
		super();
		this.state = {
			roleOption: [],
			role: null,
			pageData: [],
			accessId: '',
			accessData: [],
			errors: {
				roleError: null,
			}
		}
	}

	componentDidMount() {
		this.RoleList();
		this.PageList();
	}

	PageList = () => {
		getAllPageList().then(response => {
			this.setState({
				pageData: response.data && response.data.data ? response.data.data : []
			})
		})
	}

	RoleList = () => {
		getRoleList().then(response => {
			this.setState({
				roleOption: response.data && response.data.data ? response.data.data : [], role: response.data.data[0]
			}, () => this.handleRole(response.data.data[0]))
		})
	}

	handleRole = (role) => {
		let roleObj = role ? role.roleId : null
		getAccessById(roleObj).then(response => {
			if (response.data && response.data.error === 'false') {
				let data = response.data.data;
				let newData = {};
				data.forEach(ele => {
					newData[ele.pageId] = ele
				});
				this.setState({
					accessData: newData
				});
				toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
			}
			if (response.data && response.data.error === 'true') {
				this.setState({
					accessData: ''
				})
				toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
			}
		})
		this.setState({ role });
	}

	onChanged = (e, original) => {
		const { role } = this.state;
		this.setState({
			accessData: {
				...this.state.accessData, [e.currentTarget.name]: { accessId: parseInt(e.currentTarget.value), pageId: original.pageId, roleId: role && role.roleId }
			}
		});
	}

	onValidate = (name) => {
		const { role, errors } = this.state;
		if (role === "" || role === null || role === undefined) {
			this.setState({ errors: { ...errors, roleError: true } })
		}
		else {
			this.setState({ errors: { ...errors, roleError: false } })
		}
	}

	handleSubmit = () => {
		const { errors, accessData } = this.state;
		let isAdd = true;
		for (var val in errors) {
			if (errors[val]) {
				errors[val] = true;
				isAdd = false;
			}
		}
		let obj = Object.values(accessData)
		if (isAdd) {
			addAccess(JSON.stringify(obj)).then(response => {
				if (response.data && response.data.error === 'false') {
					toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
				}
				if (response.data && response.data.error === 'true') {
					toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
				}
			})
		}
		this.setState({ errors: { ...errors } });
	}

	render() {
		const { role, roleOption, pageData, accessId, errors, accessData } = this.state;
		const columns = [
			{
				Header: 'Page Name',
				Cell: ({ original }) => {
					return (
						original.pageName ? original.pageName : null
					)
				},
			},
			{
				Header: 'Read',
				width: 250,
				Cell: ({ original }) => {
					return (
						<input
							type="radio"
							name={original.pageId}
							value="1"
							checked={accessData && accessData[original.pageId] && accessData[original.pageId].accessId == "1"}
							onChange={(e) => this.onChanged(e, original)} />
					);
				},
			},
			{
				Header: 'Write',
				width: 250,
				Cell: ({ original }) => {
					return (
						<input
							type="radio"
							name={original.pageId}
							value="2"
							checked={accessData && accessData[original.pageId] && accessData[original.pageId].accessId == "2"}
							onChange={(e) => this.onChanged(e, original)} />
					);
				},
			},
			{
				Header: 'Hide',
				width: 250,
				Cell: ({ original }) => {
					return (
						<input
							type="radio"
							name={original.pageId}
							value="3"
							checked={accessData && accessData[original.pageId] && accessData[original.pageId].accessId == "3"}
							onChange={(e) => this.onChanged(e, original)} />
					);
				},
			},
		]
		return (
			<div className="dash_grid access-page">
				<ToastContainer />
				<LeftMenu />
				<main className="bg-white">
					<AdminHeader {...this.props} />
					<section className="container-fluid">
						<h5 className="text-center mt-2 mx-auto user-box">Access Management</h5>

						<div className="row mt-4">
							<div className="col-md-4">
								<Select
									className="m-0"
									value={role}
									onChange={this.handleRole}
									onBlur={() => this.onValidate('role')}
									options={roleOption}
									valueKey="roleId"
									labelKey="roleName"
									getOptionLabel={(option) => option["roleName"]}
									getOptionValue={(option) => option["roleId"]}
									placeholder="Role"
								/>
								{
									errors.roleError &&
									<span className="errorMsg">Please select role</span>
								}
							</div>
							<div className="d-flex col-md-8">
								<button onClick={this.handleSubmit} className="add-btn ml-auto"> Add Access </button>
							</div>
						</div>

						<div className="mt-4">
							<ReactTable
								data={pageData}
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

export default AccessManagement