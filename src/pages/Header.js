import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md bg-trs navbar-dark fixed-top">
					<a className="navbar-brand"><img src="https://www.freelogodesign.org/Content/css/images/images/logo-webself.png" style={{ height: '40px', width: '200px', marginTop: '10px' }} /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link mr-md-5" to="/"><i className="fas fa-home pr-2" />Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link mr-md-5" to="/login"><i className="fas fa-sign-in-alt pr-2"></i>Sign In</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link mr-md-3" to="/register"><i className="fas fa-user pr-2"></i>Sign Up</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default Header