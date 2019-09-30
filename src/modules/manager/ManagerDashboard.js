import React, { Component } from "react";
import LeftMenu from "../manager/LeftMenu";
import ManagerHeader from "../manager/ManagerHeader";
import { Link } from "react-router-dom";
import { getManagerDashboard } from "../../utils/manager";
import { getNotifcation } from "../../utils/admin";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

class ManagerDashboard extends Component {
  constructor() {
    super();
    this.state = {
      managerDashboardData: []
    };
  }

  componentDidMount() {
    this.managerDashboardList();
    this.Notifications();
  }

  managerDashboardList = () => {
    let obj = JSON.parse(sessionStorage.getItem("managerData"));
    getManagerDashboard(obj ? obj.userId : null).then(response => {
      this.setState({
        managerDashboardData: response && response.data ? response.data : []
      });
    });
  };

  Notifications = () => {
    getNotifcation().then(response => {
      if (response.data && response.data.error === "false") {
        toast.success(response.data.alertMessage, {
          type: toast.TYPE.SUCCESS,
          autoClose: 30000
        });
      }
      if (response.data && response.data.error === "true") {
        console.log("error while sending notification");
      }
    });
  };

  render() {
    const { managerDashboardData } = this.state;
    return (
      <div className="dash_grid">
        <ToastContainer />
        <LeftMenu />
        <main>
          <ManagerHeader {...this.props} />
          <section className="container-fluid dash_space admin-dashboard">
            <div className="row">
              <div className="col-md-3">
                <div className="card2 bg-white">
                  <div className="card-body">
                    <div className="text-center">
                      <div className="d-flex justify-content-center">
                        <i className="fas fa-users bg1 fa-3x m-0"></i>
                      </div>
                      <p className="font-weight-normal mt-3">Teams</p>
                      <p className="font-weight-normal fs-24">
                        <Link
                          className="title-orange"
                          to="/manager-team-management"
                        >
                          {managerDashboardData
                            ? managerDashboardData.teamCount
                            : "No teams are found"}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card2 bg-white">
                  <div className="card-body">
                    <div className="text-center">
                      <div className="d-flex justify-content-center">
                        <i className="fas fa-user-clock fa-3x bg2 m-0"></i>
                      </div>
                      <p className="font-weight-normal mt-3">
                        Employee in probation
                      </p>
                      <p className="font-weight-normal fs-24">
                        <Link
                          className="title-orange"
                          to="/manager-employee-probation-management"
                        >
                          {managerDashboardData
                            ? managerDashboardData.inProbEmpCount
                            : "No employees are found"}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default ManagerDashboard;
