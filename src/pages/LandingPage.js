import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

class LandingPage extends Component {
	render() {
		return (
			<div className="landing-page">
				<Header />
				<section className="home-section align-items-center d-flex justify-content-center">
					<div className="container">
						<div className="white_box">
							<h3><img alt="logo" src="./assets/images/logo.png" className="logo-size" /><span>Uprise - Appraisal Management</span></h3>
						</div>
					</div>
				</section>
				<section className="w3-aboutbg w3-container pt-5">
					<h3 className="w3-center">Introduction</h3>
					<p className="text-center p-5">Manual tracking can be wrong most of the times. Due to this reason, companies across the world are relying on software to track performance. Uprise comes with various features which make performance tracking easy. This software stores data regarding employee performance. Because it is easy to use, human resource department can derive ample benefits by using it. Goal setting and revising, coaching, development and planning, everything can be done using Uprise. This is a complete appraisal tracking solution designed to ease the difficulties of human resource job.</p>
					<hr />
				</section>
				<section className="w3-aboutbg w3-container pt-5">
					<h3 className="w3-center">Our Key Features</h3>
					<div className="w3-row-padding w3-center mt-5 mb-5">
						<div className="w3-quarter">
							<i className="fas fa-sync-alt w3-margin-bottom w3-jumbo w3-center icon_light"></i>
							<p className="w3-large">Flexible set-up, easy to repeat</p>
						</div>
						<div className="w3-quarter">
							<i className="fa fa-heart w3-margin-bottom w3-jumbo icon_light"></i>
							<p className="w3-large">Makes it easy to and transparent</p>
						</div>
						<div className="w3-quarter">
							<i className="fas fa-file-alt w3-margin-bottom w3-jumbo icon_light"></i>
							<p className="w3-large">Automatically generated reports</p>
						</div>
						<div className="w3-quarter">
							<i className="fa fa-cog w3-margin-bottom w3-jumbo icon_light"></i>
							<p className="w3-large"> Good structure to the team</p>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		)
	}
}

export default LandingPage