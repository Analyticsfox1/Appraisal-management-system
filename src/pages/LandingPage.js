import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LandingPage extends Component {
	render() {
		return (
			<div>
				<span className="fs-16">	Welcome to LandingPage </span>
				<div>
					<Link to="/login">Sign In</Link>
				</div>
				<div>
					<Link to="/register">Sign Up</Link>
				</div>
			</div>
		)
	}
}

export default LandingPage