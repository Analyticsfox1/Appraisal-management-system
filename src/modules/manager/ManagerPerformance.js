import React, { Component } from 'react';
import Select from 'react-select';
import { addPerformance, getPerformance } from '../../utils/user';
import StarRatingComponent from 'react-star-rating-component';
import { ToastContainer, toast } from 'react-toastify';
toast.configure();

export class ManagerPerformance extends Component {
    constructor() {
		super();
		this.state = {
            user: {},
			goal: '',
			managerGoalDescription: '',
			employeeAchievement: '',
			managerFeedback: '',
			employeeSelfRating: 0,
            managerRating: 0,
            thingsManagerShouldStart: "",
            thingsManagerShouldStop: "",
            thingsManagerShouldContinue: "",
            thingsTheyShouldStart: "",
            thingsTheyShouldStop: "",
            thingsTheyShouldContinue: "",
            overallRating: 0,
			errors: {
				// goalError: null,
				managerGoalDescriptionError: null,
				// employeeAchievementError: null,
				managerFeedbackError: null,
				// employeeSelfRatingError: null,
                managerRatingError: null,
                // thingsManagerShouldStartError: null,
                // thingsManagerShouldStopError: null,
                // thingsManagerShouldContinueError: null,
                thingsTheyShouldStartError: null,
                thingsTheyShouldStopError: null,
                thingsTheyShouldContinueError: null
			}
		}
    }
    componentDidMount(){
        if (this.props.userid && this.props.userid) {
			this.PerformanceFormData();
		}   
    }

    PerformanceFormData = () => {
        let userObj = this.props.userid && this.props.userid
		this.setState({
			user: userObj
		})
        console.log(userObj);
        getPerformance(userObj ? userObj.uniqueId : null).then(response => {
            if(response.data && response.data.error === 'false'){
                let data =  response.data.data;
				console.log(data);
				this.setState({
					thingsManagerShouldStart: data.selfDevlopmentGoal.thingsManagerShouldStart,
					thingsManagerShouldStop: data.selfDevlopmentGoal.thingsManagerShouldStop,
					thingsManagerShouldContinue: data.selfDevlopmentGoal.thingsManagerShouldContinue,
					thingsTheyShouldStart: data.selfDevlopmentGoal.thingsTheyShouldStart,
					thingsTheyShouldStop: data.selfDevlopmentGoal.thingsTheyShouldStop,
					thingsTheyShouldContinue: data.selfDevlopmentGoal.thingsTheyShouldContinue,
					goal: data.kraSettings.goals[0].goal,
					employeeAchievement: data.kraSettings.goals[0].employeeAchievement,
					managerGoalDescription: data.kraSettings.goals[0].managerGoalDescription,
					managerFeedback: data.kraSettings.goals[0].managerFeedback

                });
                toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 })
            };
            if (response.data && response.data.error === 'true') {
				toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
			}
        })
        
    }

    onStarClick = (nextValue, prevValue, name) => {
		this.setState({ [name]: nextValue });
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleValidate = (e) => {
		const { errors } = this.state;
		let name = e.target.name;
		let value = e.target.value;
		if (value === "" || value === null || value === undefined) {
			this.setState({ errors: { ...errors, [name + 'Error']: true } });
		}
		else {
			this.setState({ errors: { ...errors, [name + 'Error']: false } });
		}
	}

	handleSubmit = () => {
        const {managerGoalDescription, managerFeedback, user, thingsTheyShouldStart,  thingsTheyShouldStopError,
            thingsTheyShouldContinueError ,managerRating, errors  } = this.state;
        
        let userUniqueId = user ? user.uniqueId : null;
        console.log(userUniqueId);
        debugger;
        
        let selfDevlopmentGoal = {
            thingsTheyShouldStart,  thingsTheyShouldStopError,
            thingsTheyShouldContinueError
        }
        let kraSettings = {
            goals: [{
                managerGoalDescription, managerFeedback
            }]
        };

        let obj = 	{ kraSettings, selfDevlopmentGoal, userUniqueId}
   
           addPerformance(obj).then(response => {
           if (response.data && response.data.error === 'false') {
               toast.success(response.data.message, { type: toast.TYPE.SUCCESS, autoClose: 2000 });
           }
           
           
           if (response.data && response.data.error === 'true') {
               toast.error(response.data.message, { type: toast.TYPE.ERROR, autoClose: 2000 })
           }
       })

       
        
		// let isAdd = true;
		// for (var val in errors) {
		// 	if (errors[val] === null || errors[val]) {
		// 		errors[val] = true;
		// 		isAdd = false;
		// 	}
		// }
		// if (managerRating === 0) {
		// 	this.setState({ errors: { ...errors, managerRatingError: true } })
		// }
		// else {
		// 	this.setState({ errors: { ...errors, managerRatingError: false } })
		// }
		// this.setState({ errors: { ...errors } });
	}

	restrictAlphabets = (e) => {
		const regx = "^[0-9]*$"
		if (e.key.match(regx)) {
			return true
		}
		else {
			e.preventDefault()
		}
    }
    
    render() {
        const { goal, managerGoalDescription, employeeAchievement, managerFeedback, employeeSelfRating, managerRating,thingsManagerShouldStart,
            thingsManagerShouldStop,
            thingsManagerShouldContinue,
            thingsTheyShouldStart,
            thingsTheyShouldStop,
            thingsTheyShouldContinue,
            overallRating, errors } = this.state;
        return (
            <div>
                <ToastContainer />
                <section className="tab-body mt-5 mb-5">
					<div className="row">
						<div className="col-md-12 text-right">
							<button type="button" onClick={this.handleSubmit} className="btn btn-rounded btn-success new">
								<span className="fa fa-plus"></span> Add Goal</button>
						</div>
						<div className="col-md-6 mt-4 ">
							<div>
								<label className="fix_label_width">Goal:</label>
								<div className="flex-grow-1">
									<input
										type="text"
										className="form-input"
										name="goal"
										value={goal}
										onChange={this.handleChange}
                                        onBlur={this.handleValidate}
                                        disabled={true}
										placeholder="Enter Goal" />
									{
										errors.goalError &&
										<span className="errorMsg">Please enter goal</span>
									}
								</div>
							</div>
						</div>

						<div className="col-md-6 mt-4">
							<div>
								<label className="fix_label_width">Manager Goal Description:</label>
								<div className="flex-grow-1">
									<textarea
										type="text"
										className="form-input"
										name="managerGoalDescription"
										value={managerGoalDescription}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										
										placeholder="Enter Manager Goal Description" />
									{
										errors.managerGoalDescriptionError &&
										<span className="errorMsg">Please enter manager goal description</span>
									}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 mt-4">
							<div>
								<label className="fix_label_width">Employee Achievement:</label>
								<div className="flex-grow-1">
									<textarea
										type="text"
										className="form-input"
										name="employeeAchievement"
										value={employeeAchievement}
										onChange={this.handleChange}
                                        onBlur={this.handleValidate}
                                        disabled={true}
										placeholder="Enter Employee Achievement" />
									{
										errors.employeeAchievementError &&
										<span className="errorMsg">Please enter employee achievement</span>
									}
								</div>
							</div>
						</div>
						<div className="col-md-6 mt-4">
							<div>
								<label className="fix_label_width">Manager Feedback:</label>
								<div className="flex-grow-1">
									<textarea
										type="text"
										className="form-input"
										name="managerFeedback"
										value={managerFeedback}
										onChange={this.handleChange}
										onBlur={this.handleValidate}
										
										placeholder="Enter Manager Feedback" />
									{
										errors.managerFeedbackError &&
										<span className="errorMsg">Please enter manager feedback</span>
									}
								</div>
							</div>
						</div>
					</div>
					<div className="row star-rating">
						<div className="col-md-6 mt-4 ">
							<div className="d-flex align-items-center">
								<label className="fix_label_width mr-3">Employee Self Rating: </label>
								<StarRatingComponent
									name="employeeSelfRating"
									starCount={5}
									renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
									value={employeeSelfRating}
                                    onStarClick={this.onStarClick}
                                    emptyStarColor={"lightgray"}
									editing={false}
								/>
							</div>
								{
									errors.employeeSelfRatingError &&
									<span className="errorMsg">Please enter employee rating</span>
								}
						</div>
						<div className="col-md-6 mt-4 ">
							<div className="d-flex align-items-center">
								<label className="fix_label_width mr-3">Manager Rating: </label>
								<StarRatingComponent
									name="managerRating"
									starCount={5}
									renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
									value={managerRating}
									onStarClick={this.onStarClick}
									
								/>
							</div>
						</div>
					</div>

				</section>
                {/* self development */}
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
                        disabled
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
                        disabled
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
                        disabled
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
                        placeholder="Enter Answer"
                    />
                    {errors.thingsTheyShouldStopError && (
                        <span className="errorMsg">Please enter answer</span>
                    )}
                    </div>
                </div>
                <div className="row mt-3">
                    <p className="col-md-4">
                    3. What are three things that you think he/she should continue
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
        <div className="d-flex justify-content-center mt-5 mb-5">
			<div className="form-group mb-0">
			    <button onClick={this.handleSubmit} className="btn btn-success btn-lg"> Submit</button>
		    </div>
		</div>               
    </div>
        )
    }
}

export default ManagerPerformance
