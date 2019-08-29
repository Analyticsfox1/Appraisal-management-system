import React, { Component } from 'react'

class ProbationSectionB extends Component {

	state = {
		rating1: null
	}
	render() {
		return (
			<section className="tab-body dash_space text-justify">
				<div className="row">
					<div className="col-md-7 rating-box">
						<h6 className="title-orange text-center">Rating Description</h6>
						<div className="row mt-3">
							<span className="col-md-4"> 1. Below Expectations</span>
							<span className="col-md-8"> Performing in some areas only, needs significant improvement to achieve the required standard.  There are weaknesses apparent in the performance of the employee which can/cannot be overcome at this time.</span>
						</div>
						<div className="row mt-2">
							<span className="col-md-4"> 2. Met Expectations</span>
							<span className="col-md-8"> Good performance, all objectives were delivered and expectations were met to the required standard. Overall staff member is effective in the role.</span>
						</div>
						<div className="row mt-2">
							<span className="col-md-4"> 3. Expectations met at high standard</span>
							<span className="col-md-8"> Very good performance, employee performing very well to a noticeably good quality, with a high level of output to a high standard.</span>
						</div>
						<div className="row mt-2">
							<span className="col-md-4"> 4. Not relevant to the role</span>
							<span className="col-md-8"> Competency is not relevant to the role.</span>
						</div>
					</div>
					<div className="col-md-5 rating-box">
						<h6 className="title-orange text-center">Notes</h6>
						<div className="row mt-3">
							<span className="col-md-12"> 1. Rate the employee's performance against the competencies, concluding with the overall rating for this probation review. </span>
						</div>
						<div className="row mt-3">
							<span className="col-md-12"> 2. If the competency is not relevant, select "Not relevant to the role". </span>
						</div>
						<div className="row mt-3">
							<span className="col-md-12"> 3. For ratings that are "Below Expectations", agree for Performance Improvement Plan (PIP) for the employee </span>
						</div>
					</div>
				</div>

				<div className="row mt-4">
					<div className="col-md-4">
						<p className="title-orange"> Competency & Competency Description </p>
					</div>
					<div className="col-md-2">
						<p className="title-orange"> Rating </p>
					</div>
					<div className="col-md-3">
						<p className="title-orange"> Manager Comments </p>
					</div>
					<div className="col-md-3">
						<p className="title-orange"> Employee Comments </p>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-md-4">
						<p className="font-weight-bold"> 1. Time Keeping </p>
						<p className="mt-2"> Adheres to the time-keeping and attendance requirements of the section as outlined in the employment contract;  prompt /on-time for required meetings. </p>
					</div>
					<div className="col-md-2">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
				</div>
				<hr />
				<div className="row mt-4">
					<div className="col-md-4">
						<p className="font-weight-bold"> 2. Knowledge of Testing/ Development Process </p>
						<p className="mt-2"> Knowledge of all procedures and policies required to do the job. </p>
					</div>
					<div className="col-md-2">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
				</div>
				<hr />
				<div className="row mt-4">
					<div className="col-md-4">
						<p className="font-weight-bold"> 3. Motivation, Flexibility and Dependability </p>
						<p className="mt-2"> Shows interest in the job. Can be trusted to work independently and unsupervised. Willing to listen and carry out instructions. Adaptable to the requirements of the post, shows commitment to the job and team members at all times. </p>
					</div>
					<div className="col-md-2">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
				</div>
				<hr />
				<div className="row mt-4">
					<div className="col-md-4">
						<p className="font-weight-bold"> 4. Initiative and openness to learning </p>
						<p className="mt-2"> Adaptable to the requirements of the post, shows commitment to the job and team members at all times.  Demonstrates wilingness to learn.  Looks to participate in training – quick learner. </p>
					</div>
					<div className="col-md-2">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
				</div>
				<hr />
				<div className="row mt-4">
					<div className="col-md-4">
						<p className="font-weight-bold"> 5. Communication Skills /Interpersonal Skills </p>
						<p className="mt-2"> Effectively communicates to provide information, clear and concise, gains understanding and maintains effective working relationships.  Demonstrates good manners and politeness even in potentially difficult situations. Comfortable in liaising with people within and outside of team. </p>
					</div>
					<div className="col-md-2">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
					<div className="col-md-3">
						<p>  </p>
					</div>
				</div>
				<hr />

			</section>
		)
	}
}

export default ProbationSectionB