import React, { Component } from "react";
import { updatePassword } from "../../utils/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UpdatePassword extends Component {
  constructor() {
    super();
    this.state = {
      newPassword: "",
      oldPassword: "",
      confPassword: "",
      invalidPassword: false,
      invalidConfPassword: false,
      errors: {
        oldPasswordError: null,
        newPasswordError: null,
        confPasswordError: null
      }
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleValidate = e => {
    const { errors } = this.state;
    let name = e.target.name;
    let value = e.target.value;

    if (value === "" || value === null || value === undefined) {
      this.setState({ errors: { ...errors, [name + "Error"]: true } });
      console.log(errors);
    } else {
      this.setState({ errors: { ...errors, [name + "Error"]: false } });
      console.log(errors);
    }

    if (name === "newPassword") {
      let passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (value && !value.match(passwordRegx)) {
        this.setState({
          invalidPassword: true
        });
      } else {
        this.setState({
          invalidPassword: false
        });
      }
    }
    if (name === "confPassword") {
      if (value && value !== this.state.newPassword) {
        this.setState({
          invalidConfPassword: true
        });
      } else {
        this.setState({
          invalidConfPassword: false
        });
      }
    }
  };
  // componentDidMount() {
  //   if (sessionStorage.getItem("userData")) {
  //     this.userData();
  //   }
  // }

  handleSubmit = e => {
    const {
      errors,
      invalidPassword,
      invalidConfPassword,
      oldPassword,
      newPassword
    } = this.state;

    let isSuccess = true;
    for (var val in errors) {
      if (errors[val] === null || errors[val]) {
        errors[val] = true;
        isSuccess = false;
      }
    }
    // if (invalidPassword || invalidConfPassword) {
    //   isSuccess = false;
    // }

    let USER = JSON.parse(sessionStorage.getItem("userData"));
    // let UserData = sessionStorage.setItem("USER", USER);
    console.log(USER);
    console.log(USER.officialEmail);
    var username = USER.officialEmail;

    // console.log(UserData.password);

    let obj = { newPassword, oldPassword, username };
    if (isSuccess) {
      debugger;
      updatePassword(obj).then(response => {
        console.log("res------------>", response);
        if (response.data && response.data.error === "false") {
          toast.success(response.data.message, {
            type: toast.TYPE.SUCCESS,
            autoClose: 2000
          });
        }
        if (response.data && response.data.error === "true") {
          toast.error(response.data.message, {
            type: toast.TYPE.ERROR,
            autoClose: 2000
          });
          // return false;
        }
      });
    }

    this.setState({ errors: { ...errors } });
    e.preventDefault();
    this.setState({
      newPassword: "",
      oldPassword: "",
      confPassword: ""
    });
  };

  render() {
    const {
      newPassword,
      oldPassword,
      confPassword,
      invalidPassword,
      invalidConfPassword,
      errors
    } = this.state;
    return (
      <section className="tab-body">
        <ToastContainer />
        <div className="row">
          <div style={{ width: "400px" }} className="content col-md-5">
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                name="oldPassword"
                value={oldPassword}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
                placeholder="Old password"
              />
              {errors.oldPasswordError && (
                <span className="errorMsg">Please enter old password</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                name="newPassword"
                value={newPassword}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
                placeholder="New password"
              />
              {errors.newPasswordError && (
                <span className="errorMsg">Please enter new password</span>
              )}
              {invalidPassword && (
                <span className="errorMsg">
                  Password must contain at least 8 characters, including
                  uppercase, lowercase and numbers
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                name="confPassword"
                value={confPassword}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
                placeholder="Confirm password"
              />
              {errors.confPasswordError && (
                <span className="errorMsg">Please enter confirm password</span>
              )}
              {invalidConfPassword && (
                <span className="errorMsg">
                  Confirm password does not match
                </span>
              )}
            </div>
            <div className="form-group">
              <button onClick={this.handleSubmit} className="form-submit">
                Update Password
              </button>
            </div>
          </div>
          <div className="col-md-7">
            <img className="px-5" src="./assets/images/update-password.jpg" />
          </div>
        </div>
      </section>
    );
  }
}

export default UpdatePassword;
