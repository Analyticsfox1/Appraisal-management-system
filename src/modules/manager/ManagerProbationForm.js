import React, { Component } from "react";
import LeftMenu from "../manager/LeftMenu";
import ManagerHeader from "../manager/ManagerHeader";
import ManagerProbationSection from "./ManagerProbationSection";

class ManagerProbationForm extends Component {
  render() {
    console.log(this.props.location.userid);

    return (
      <div className="dash_grid">
        <LeftMenu />
        <main>
          <ManagerHeader {...this.props} />
          <section className="container-fluid mt-3">
            <h5 className="text-center mx-auto mb-3 user-box">
              Probation Form{" "}
            </h5>
            <ManagerProbationSection {...this.props.location.userid} />
          </section>
        </main>
      </div>
    );
  }
}

export default ManagerProbationForm;
