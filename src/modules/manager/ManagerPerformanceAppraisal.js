import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import ManagerHeader from "./ManagerHeader";
import ManagerPerformance from "./ManagerPerformance";

export class ManagerPerformanceAppraisal extends Component {
  render() {
    return (
      <div className="dash_grid">
        <LeftMenu />
        <main>
          <ManagerHeader {...this.props} />
          <section className="container-fluid">
            <h5 className="text-center mt-2 mx-auto user-box">
              Performance Appraisal
            </h5>
            <ManagerPerformance {...this.props.location.userid} />
          </section>
        </main>
      </div>
    );
  }
}

export default ManagerPerformanceAppraisal;
