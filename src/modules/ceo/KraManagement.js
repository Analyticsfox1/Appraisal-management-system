import React, { Component } from "react";
import LeftMenu from "../ceo/LeftMenu";
import CeoHeader from "../ceo/CeoHeader";
import { getNotifcation } from "../../utils/admin";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

class KraManagement extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.Notifications();
  }

  Notifications = () => {
    getNotifcation().then(response => {
      if (response.data && response.data.error === "false") {
        toast.success(response.data.alertMessage, {
          type: toast.TYPE.SUCCESS,
          autoClose: 30000
        });
        console.log(response.data.alertMessage);
      }
      if (response.data && response.data.error === "true") {
        console.log("Error while sending notification");
      }
    });
  };

  render() {
    return (
      <div className="dash_grid">
        <ToastContainer />
        <LeftMenu />
        <main className="bg-white">
          <CeoHeader {...this.props} />
          <section className="container-fluid">
            <h5 className="text-center mt-2 mx-auto user-box">
              KRA Management
            </h5>
          </section>
        </main>
      </div>
    );
  }
}

export default KraManagement;
