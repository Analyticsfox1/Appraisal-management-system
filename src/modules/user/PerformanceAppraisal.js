import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import UserHeader from "./UserHeader";
// import PerformanceTabMenu from "../../components/PerformanceTabMenu";
import Performance from "./Performance";

class PerformanceAppraisal extends Component {
  render() {
    return (
      <div className="dash_grid">
        <LeftMenu />
        <main>
          <UserHeader {...this.props} />
          <section className="container-fluid">
            <h5 className="text-center mt-2 mx-auto user-box">
              Performance Appraisal
            </h5>
            <Performance />
          </section>
        </main>
      </div>
    );
  }
}

export default PerformanceAppraisal;
