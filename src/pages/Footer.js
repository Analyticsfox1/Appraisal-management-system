import React, { Component } from 'react'

class Footer extends Component {
	render() {
		return (
			<section className="footer-bg text-center">
				<div className="row">
					<div className="col-md-12">
						<div className="mt-4 mb-2 social-network">
							<a href="https://www.facebook.com/analyticsfoxsoftwares" target="_blank"><i className="fab fa-facebook-square mr-2"></i></a>
							<a href="https://www.linkedin.com/company/analytics-fox" target="_blank"><i className="fab fa-linkedin"></i></a>
						</div>
						<p className="text-white">Copyright © 2019 <a className="title-orange" href="https://analyticsfoxsoftwares.com">AnalyticsFox</a>. &nbsp;All Rights Reserved.</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Footer