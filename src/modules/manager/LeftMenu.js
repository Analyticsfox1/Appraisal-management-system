import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LeftMenu extends Component {
  state = {
    manager: {}
  };

  componentWillMount() {
    let data = JSON.parse(sessionStorage.getItem("managerData"));
    this.setState({
      manager: data
    });
  }

  render() {
    const { manager } = this.state;
    return (
      <aside className="LeftMenu">
        <div className="logo-image"></div>
        <ul className="dash_ul">
          <div className="row px-3">
            <div>
              <img
                src="./assets/images/admin.png"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div className="text-center p-2 mt-4">
              <h6 className="title-orange">Welcome </h6>
              <h6 style={{ overflowWrap: "break-word" }} className="text-white">
                {manager ? manager.name : "PM"}
              </h6>
            </div>
          </div>
          <div className="custom-hr">
            <hr />
          </div>
          <li>
            <NavLink to="/manager-dashboard" activeClassName="active">
              <i className="fas fa-home"></i>
              <span>My Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/manager-team-management" activeClassName="active">
              <i className="fas fa-users"></i>
              <span>Team Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manager-employee-probation-management"
              activeClassName="active"
            >
              <i className="fas fa-user-clock"></i>
              <span>Employee In Probation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/manager-probation-form" activeClassName="active">
              &nbsp;<i className="fas fa-hourglass-half"></i>
              <span>&nbsp;Probation Form</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/employee-performance" activeClassName="active">
              &nbsp;<i className="fas fa-hourglass-half"></i>
              <span>&nbsp;Employee Performance</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/manager-performance" activeClassName="active">
              &nbsp;<i className="fas fa-hourglass-half"></i>
              <span>&nbsp;PerformanceAppraisal</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    );
  }
}

export default LeftMenu;
