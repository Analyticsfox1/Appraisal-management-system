import React, { Component } from "react";
import LeftMenu from "../admin/LeftMenu";
import AdminHeader from "../admin/AdminHeader";
import "react-table/react-table.css";
import ReactTable from "react-table";
import AddRole from "./AddRole";
import EditRole from "./EditRole";
import { getRoleList, deleteRole } from "../../utils/admin";
import ViewRoleDetails from "./ViewRoleDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class RoleManagement extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      showAddModal: false,
      showEditModal: false,
      roleData: []
    };
  }

  componentDidMount() {
    this.RoleList();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  RoleList = () => {
    getRoleList().then(response => {
      this.setState({
        roleData: response.data && response.data.data ? response.data.data : []
      });
    });
  };

  addRole = () => {
    this.setState(
      {
        showAddModal: !this.state.showAddModal
      },
      () => this.RoleList()
    );
  };

  editRole = () => {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  };

  deleteRoleData = obj => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes, Delete it!",
          onClick: () => {
            deleteRole(obj).then(response => {
              if (response.data.error === "false") {
                toast.success("Role Deleted Successfully", {
                  type: toast.TYPE.SUCCESS,
                  autoClose: 2000
                });
                this.RoleList();
              }
            });
          }
        },
        {
          label: "No",
          onClick: () => alert("Click On Ok")
        }
      ]
    });

    // deleteRole(obj).then(response => {
    //   if (response.data.error === "true") {
    //     toast.error(response.data.message, {
    //       type: toast.TYPE.ERROR,
    //       autoClose: 2000
    //     });
    //     return false;
    //   }
    //   if (response.data.error === "false") {
    //     toast.success("Role Deleted Successfully", {
    //       type: toast.TYPE.SUCCESS,
    //       autoClose: 2000
    //     });
    //     this.RoleList();
    //   }
    // });
  };

  render() {
    const { search, roleData } = this.state;
    const columns = [
      {
        Header: "Role ID",
        width: 150,
        Cell: ({ original }) => {
          return original.roleId;
        }
      },
      {
        Header: "Role Name",
        width: 250,
        Cell: ({ original }) => {
          return <ViewRoleDetails key={original.roleId} data={original} />;
        }
      },
      {
        Header: "Description",
        Cell: ({ original }) => {
          return original.description;
        }
      },
      {
        Header: "Action",
        accessor: "action",
        width: 150,
        Cell: ({ original }) => {
          return (
            <div>
              <i
                onClick={() => this.deleteRoleData(original.roleId)}
                className="fa fa-trash"
              />
            </div>
          );
        }
      }
    ];

    return (
      <div className="dash_grid">
        <ToastContainer />
        <LeftMenu />
        <main className="bg-white">
          <AdminHeader {...this.props} />
          <section className="container-fluid">
            <h5 className="text-center mt-2 mx-auto user-box">
              Role Management
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
              <button onClick={this.addRole} className="add-btn ml-auto">
                {" "}
                Add Role{" "}
              </button>
              {this.state.showAddModal && <AddRole addRole={this.addRole} />}
            </div>
            <div className="mt-4">
              <ReactTable
                data={roleData}
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

export default RoleManagement;
