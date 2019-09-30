import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

class SelfDevelopmentGoal extends Component {
  constructor() {
    super();
    this.state = {
      thingsManagerShouldStart: "",
      thingsManagerShouldStop: "",
      thingsManagerShouldContinue: "",
      thingsTheyShouldStart: "",
      thingsTheyShouldStop: "",
      thingsTheyShouldContinue: "",
      overallRating: 0,
      errors: {
        thingsManagerShouldStartError: null,
        thingsManagerShouldStopError: null,
        thingsManagerShouldContinueError: null,
        thingsTheyShouldStartError: null,
        thingsTheyShouldStopError: null,
        thingsTheyShouldContinueError: null
      }
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ [name]: nextValue });
  };

  handleValidate = e => {
    const { errors } = this.state;
    let name = e.target.name;
    let value = e.target.value;
    if (value === "" || value === null || value === undefined) {
      this.setState({ errors: { ...errors, [name + "Error"]: true } });
    } else {
      this.setState({ errors: { ...errors, [name + "Error"]: false } });
    }
  };

  render() {
    const {
      thingsManagerShouldStart,
      thingsManagerShouldStop,
      thingsManagerShouldContinue,
      thingsTheyShouldStart,
      thingsTheyShouldStop,
      thingsTheyShouldContinue,
      overallRating,
      errors
    } = this.state;
    return (
      <div>
        <section className="tab-body">
          <h6>Employee Feedback</h6>
          <div className="row mt-3">
            <p className="col-md-4">
              1. What are three things that you think manager should start
              doing.
            </p>
            <div className="col-md-8">
              <input
                type="text"
                className="form-input"
                name="thingsManagerShouldStart"
                value={thingsManagerShouldStart}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
                placeholder="Enter Answer"
              />
              {errors.thingsManagerShouldStartError && (
                <span className="errorMsg">Please enter answer</span>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <p className="col-md-4">
              2. What are three things that you think manager should stop doing.
            </p>
            <div className="col-md-8">
              <input
                type="text"
                className="form-input"
                name="thingsManagerShouldStop"
                value={thingsManagerShouldStop}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
                placeholder="Enter Answer"
              />
              {errors.thingsManagerShouldStopError && (
                <span className="errorMsg">Please enter answer</span>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <p className="col-md-4">
              3. What are three things that you think manager should continue
              doing.
            </p>
            <div className="col-md-8">
              <input
                type="text"
                className="form-input"
                name="thingsManagerShouldContinue"
                value={thingsManagerShouldContinue}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
                placeholder="Enter Answer"
              />
              {errors.thingsManagerShouldContinueError && (
                <span className="errorMsg">Please enter answer</span>
              )}
            </div>
          </div>
        </section>
        <section className="tab-body">
          <h6>Manager Feedback</h6>
          <div className="row mt-3">
            <p className="col-md-4">
              1. What are three things that you think he/she should start doing.
            </p>
            <div className="col-md-8">
              <input
                type="text"
                className="form-input"
                name="thingsTheyShouldStart"
                value={thingsTheyShouldStart}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
                disabled
                placeholder="Enter Answer"
              />
              {errors.thingsTheyShouldStartError && (
                <span className="errorMsg">Please enter answer</span>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <p className="col-md-4">
              2. What are three things that you think he/she should stop doing.
            </p>
            <div className="col-md-8">
              <input
                type="text"
                className="form-input"
                name="thingsTheyShouldStop"
                value={thingsTheyShouldStop}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
                disabled
                placeholder="Enter Answer"
              />
              {errors.thingsTheyShouldStopError && (
                <span className="errorMsg">Please enter answer</span>
              )}
            </div>
          </div>
          <div className="row mt-3">
            <p className="col-md-4">
              2. What are three things that you think he/she should continue
              doing.
            </p>
            <div className="col-md-8">
              <input
                type="text"
                className="form-input"
                name="thingsTheyShouldContinue"
                value={thingsTheyShouldContinue}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
                disabled
                placeholder="Enter Answer"
              />
              {errors.thingsTheyShouldContinueError && (
                <span className="errorMsg">Please enter answer</span>
              )}
            </div>
          </div>
        </section>
        <section className="tab-body">
          <div className="row d-flex align-items-center justify-content-center star-rating">
            <label className="fix_label_width mr-3">Overall Rating: </label>
            <StarRatingComponent
              name="overallRating"
              starCount={5}
              renderStarIcon={() => (
                <span>
                  <i className="fas fa-star"></i>
                </span>
              )}
              value={overallRating}
              onStarClick={this.onStarClick}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default SelfDevelopmentGoal;
