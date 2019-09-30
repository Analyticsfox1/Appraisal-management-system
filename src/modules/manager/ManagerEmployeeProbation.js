import React, { Component } from "react";
import LeftMenu from "../manager/LeftMenu";
import ManagerHeader from "../manager/ManagerHeader";
import { getAllInProbationEmployees } from "../../utils/manager";
import { Link } from "react-router-dom";
import "react-table/react-table.css";
import ReactTable from "react-table";

class ManagerEmployeeProbation extends Component {
  constructor() {
    super();
    this.state = {
      probationData: []
    };
  }

  componentDidMount() {
    this.EmployeeProbationList();
  }

  EmployeeProbationList = () => {
    const { probationData } = this.state;
    let obj = JSON.parse(sessionStorage.getItem("managerData"));

    getAllInProbationEmployees(obj ? obj.userId : null).then(response => {
      this.setState({
        probationData:
          response.data && response.data.InProbationEmployeesList
            ? response.data.InProbationEmployeesList
            : []
      });
    });
  };

  render() {
    const { probationData } = this.state;
    const id = probationData.map(user => user.uniqueId);
    const userid = probationData.find(obj => obj.uniqueId);
    console.log(userid);

    const columns = [
      {
        Header: "User Id",
        Cell: ({ original }) => {
          return (
            <Link
              to={{ pathname: "/manager-probation-form", userid: { userid } }}
            >
              {" "}
              {original.uniqueId ? original.uniqueId : null}
            </Link>
          );
        }
      },
      {
        Header: "Employee Name",
        Cell: ({ original }) => {
          return (
            <Link to={"/manager-probation-form" + id}>
              {original.employeeName ? original.employeeName : null}
            </Link>
          );
        }
      }
    ];
    return (
      <div className="dash_grid">
        <LeftMenu />
        <main className="bg-white">
          <ManagerHeader {...this.props} />
          <section className="container-fluid">
            <h5 className="text-center mt-2 mx-auto user-box">
              Employee In Probation
            </h5>
            <div className="mt-4">
              <ReactTable
                data={probationData}
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

export default ManagerEmployeeProbation;
