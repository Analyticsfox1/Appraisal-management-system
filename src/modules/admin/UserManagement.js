import React, { Component } from "react";
import LeftMenu from "../admin/LeftMenu";
import AdminHeader from "../admin/AdminHeader";
import "react-table/react-table.css";
import ReactTable from "react-table";
import ViewUserDetails from "./ViewUserDetails";
import AddEditUser from "./AddEditUser";
import { getUserList } from "../../utils/admin";
class UserManagement extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      showModal: false,
      userData: [],
      editObj: ""
    };
  }

  componentDidMount() {
    this.UserList();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  UserList = () => {
    getUserList().then(response => {
      this.setState({
        userData: response.data && response.data.data ? response.data.data : []
      });
    });
  };

  userAddEdit = val => {
    let obj = this.state.userData.find(obj => obj.uniqueId === val);
    this.setState(
      {
        showModal: !this.state.showModal,
        editObj: obj ? obj.uniqueId : null
      },
      () => this.UserList()
    );
  };

  render() {
    const { search, userData } = this.state;
    const columns = [
      {
        Header: "Employee ID",
        width: 150,
        Cell: ({ original }) => {
          return <ViewUserDetails key={original.uniqueId} data={original} />;
        }
      },
      {
        Header: "Employee Name",
        width: 150,
        Cell: ({ original }) => {
          return original.name ? original.name : null;
        }
      },
      {
        Header: "Address",
        width: 100,
        Cell: ({ original }) => {
          return original.address ? original.address : null;
        }
      },
      {
        Header: "Email ID",
        Cell: ({ original }) => {
          return original.email ? original.email : null;
        }
      },
      {
        Header: "Aadhar No.",
        width: 140,
        Cell: ({ original }) => {
          return original.aadhar ? original.aadhar : null;
        }
      },
      {
        Header: "Account No.",
        width: 150,
        Cell: ({ original }) => {
          return original.accountNo ? original.accountNo : null;
        }
      },

      {
        Header: "Status",
        width: 100,
        Cell: ({ original }) => {
          return original.status ? (
            original.status === "Active" ? (
              <img src="./assets/images/green_light.png" />
            ) : (
              <img src="./assets/images/red_light.png" />
            )
          ) : null;
        }
      },
      {
        Header: "Role",
        width: 100,
        Cell: ({ original }) => {
          return original.role ? original.role : null;
        }
      },
      {
        Header: "Action",
        accessor: "action",
        width: 100,
        Cell: ({ original }) => {
          return (
            <div className="cursor-pointer">
              <i
                onClick={() => this.userAddEdit(original.uniqueId)}
                className="fa fa-edit mr-3"
              />
            </div>
          );
        }
      }
    ];

    return (
      <div className="dash_grid user-page">
        <LeftMenu />
        <main className="bg-white">
          <AdminHeader {...this.props} />
          <section className="container-fluid">
            <h5 className="text-center mt-2 mx-auto user-box">
              User Management
            </h5>
            <div className="d-flex align-items-center mt-3">
              <div className="form-group m-0 search-input">
                <input
                  type="text"
                  className="form-input"
                  name="search"
                  value={search}
                  onChange={this.handleChange}
                  onBlur={this.handleValidate}
                  placeholder="Search..."
                />
              </div>
              <button
                onClick={() => this.userAddEdit()}
                className="add-btn ml-auto"
              >
                {" "}
                Add User{" "}
              </button>
              {this.state.showModal && (
                <AddEditUser
                  editObj={this.state.editObj}
                  userAddEdit={this.userAddEdit}
                />
              )}
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
    );
  }
}

export default UserManagement;
