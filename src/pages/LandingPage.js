import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

class LandingPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="home-section align-items-center d-flex justify-content-center">
					<div className="container">
						<div className="white_box">
							<h3>Appraisal Management System</h3>
							<p className="text-justify mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default LandingPage