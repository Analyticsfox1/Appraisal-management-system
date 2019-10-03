import React, { Component } from "react";
import LeftMenu from "../manager/LeftMenu";
import ManagerHeader from "../manager/ManagerHeader";
import { Link } from "react-router-dom";
import { getAllPerfApprUnderManager } from "../../utils/manager";
import "react-table/react-table.css";
import ReactTable from "react-table";

export class ManagerEmployeePerformance extends Component {
  state = {
    performanceData: []
  };
  componentDidMount() {
    this.EmployeePerformanceList();
  }
  EmployeePerformanceList = () => {
    const { performanceData } = this.state;
    let obj = JSON.parse(sessionStorage.getItem("managerData"));

    getAllPerfApprUnderManager(obj ? obj.userId : null).then(response => {
      this.setState({
        performanceData:
          response.data && response.data.PerformanceAppraisalsUnderManager
            ? response.data.PerformanceAppraisalsUnderManager
            : []
      });
    });
  };
  render() {
    const { performanceData } = this.state;
    console.log(performanceData);

    const id = performanceData.map(user => user.uniqueId);
    const userid = performanceData && performanceData.find(obj => obj.uniqueId);
    console.log(userid && userid.uniqueId);
    console.log(userid);

    const columns = [
      {
        Header: "User Id",
        Cell: ({ original }) => {
          return (
            <Link to={{ pathname: "/manager-performance", userid: { userid } }}>
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
                data={performanceData}
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

export default ManagerEmployeePerformance;
