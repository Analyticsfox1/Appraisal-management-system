import React, { Component } from "react";
import LeftMenu from "../admin/LeftMenu";
import AdminHeader from "../admin/AdminHeader";
import { pushNotifcation } from "../../utils/admin";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

// const messageOption = [
//   { value: "Off", label: "Off" },
//   { value: "On", label: "On" }
// ];

// const alertType = [
//   { value: "Message", label: "Message" },
//   { value: "Email", label: "Email" }
// ];

class PushNotification extends Component {
  constructor() {
    super();
    this.state = {
      // enableMessage: messageOption[0],
      //   selectedType: alertType[0],
      alertMessage: ""
    };
  }

  // handleMessageChange = enableMessage => {
  // 	this.setState({ enableMessage });
  // };

  //   handleAlertType = selectedType => {
  //     this.setState({ selectedType });
  //   };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = e => {
    const { alertMessage } = this.state;
    let obj = { alertMessage };
    pushNotifcation(obj).then(response => {
      if (response.data && response.data.error === "false") {
        toast.success("Notification Sent Successfully", {
          type: toast.TYPE.SUCCESS,
          autoClose: 3000
        });
      }
      if (response.data && response.data.error === "true") {
        toast.error("Error While Sending Notification. Please Try again", {
          type: toast.TYPE.ERROR,
          autoClose: 3000
        });
      }
      // this.setState({
      //   alertMessage: res.data
      // });
      console.log(response.data);
      return response.data.messsage;
    });
    console.log(alertMessage);
    e.preventDefault();
    this.setState({
      alertMessage: ""
    });
  };

  render() {
    const { alertMessage } = this.state;
    return (
      <div className="dash_grid">
        <ToastContainer />
        <LeftMenu />
        <main className="bg-white">
          <AdminHeader {...this.props} />
          <section className="container-fluid">
            <h5 className="text-center mt-4 mb-4 mx-auto user-box">
              Push Notification
            </h5>
            {/* <div className="col-md-6 mt-5 d-flex align-items-center">
							<label className="notification-label">Enable Alert Message:</label>
							<Select
								value={enableMessage}
								onChange={this.handleMessageChange}
								options={messageOption}
							/>
						</div> */}
            <div className="col-md-9 mt-4 d-flex align-items-center">
              <label className="notification-label">Alert Message:</label>
              <textarea
                value={alertMessage}
                name="alertMessage"
                onChange={this.handleChange}
              />
            </div>
            {/* <div className="col-md-6 mt-4 d-flex align-items-center">
              <label className="notification-label">Alert Type:</label>
              <Select
                value={selectedType}
                onChange={this.handleAlertType}
                options={alertType}
              />
            </div> */}
            <div className="mt-4  col-md-9 d-flex justify-content-end">
              {/* <Button className="btn-success mr-2">Save</Button> */}
              <Button
                className="btn-danger text-center"
                onClick={this.handleClick}
              >
                Send Message
              </Button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default PushNotification;
