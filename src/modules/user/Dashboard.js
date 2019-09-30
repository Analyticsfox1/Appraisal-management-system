import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import UserHeader from "./UserHeader";
import { getUserDashboard } from "../../utils/user";
import { getNotifcation } from "../../utils/admin";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
toast.configure();
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      dashboardData: []
    };
  }

  componentDidMount() {
    this.DashboardList();
    this.Notifications();
  }

  DashboardList = () => {
    getUserDashboard().then(response => {
      this.setState({
        dashboardData:
          response.data && response.data.data ? response.data.data : []
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
        toast.error(response.data.message, {
          type: toast.TYPE.ERROR,
          autoClose: 30000
        });
      }
    });
  };

  render() {
    const { dashboardData } = this.state;
    return (
      <div className="dash_grid">
        <ToastContainer />
        <LeftMenu />
        <main>
          <UserHeader {...this.props} />
          <section className="container-fluid dash_space dashboard">
            <div className="row">
              <div className="col-md-4">
                <div className="card2 bg-white">
                  <div className="card2_head d-flex align-items-center">
                    <i className="fas icon_light fa-birthday-cake"></i>
                    <h5 className="font-weight-normal m-0">Birthday</h5>
                  </div>
                  <div className="card-body">
                    {dashboardData.bdayList &&
                    dashboardData.bdayList.length > 0 ? (
                      dashboardData.bdayList.map((birthVal, index) => (
                        <div className="birthday-card mb-3" key={index}>
                          <span className="font-bold mr-5">
                            {birthVal.name}
                          </span>
                          <span>
                            {moment(birthVal.birthdate).format("DD-MM-YYYY")}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="no_data text-center">
                        <img
                          alt="birthday"
                          src="./assets/images/birthday.svg"
                        />
                        No Birthday Buddies Found.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card2 bg-white">
                  <div className="card2_head d-flex align-items-center">
                    <i className="fas icon_light fa-user-plus bg2"></i>
                    <h5 className="font-weight-normal m-0">New Joins</h5>
                  </div>
                  <div className="card-body">
                    {dashboardData.newJoinsList &&
                    dashboardData.newJoinsList.length > 0 ? (
                      dashboardData.newJoinsList.map((newJoinVal, index) => (
                        <div className="joinee-card mb-3" key={index}>
                          <span className="font-bold">{newJoinVal.name}</span>
                        </div>
                      ))
                    ) : (
                      <div className="no_data text-center">
                        <img alt="user" src="./assets/images/user.png" />
                        No New Joinees in past 15 days.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card2 bg-white">
                  <div className="card2_head d-flex align-items-center">
                    <i className="fas fa-bullhorn bg4 icon_light"></i>
                    <h5 className="font-weight-normal m-0">Announcement</h5>
                  </div>
                  <div className="card-body">
                    <div className="no_data text-center">
                      <img
                        alt="announcement"
                        src="./assets/images/announcement.svg"
                      />
                      No Announcement Found.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-4">
                <div className="card2 bg-white">
                  <div className="card2_head d-flex align-items-center">
                    <i className="fas icon_light fa-users bg3"></i>
                    <h5 className="font-weight-normal m-0">Teams</h5>
                  </div>
                  <div className="card-body">
                    {dashboardData.teams && dashboardData.teams.length > 0 ? (
                      dashboardData.teams.map((teamVal, index) => (
                        <div className="team-card mb-3" key={index}>
                          <span className="d-flex justify-content-between ml-4 font-bold">
                            {teamVal.projectName}
                            <span className="mr-4">
                              {teamVal.status === "Active" ? (
                                <img src="./assets/images/green_light.png" />
                              ) : (
                                <img src="./assets/images/red_light.png" />
                              )}
                            </span>
                          </span>
                          <span className="ml-4 text-justify">
                            {teamVal.comment}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="no_data text-center">
                        <img alt="team" src="./assets/images/team.png" />
                        No Teams are Found.
                      </div>
                    )}
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

export default Dashboard;
