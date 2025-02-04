import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import OTPCode from '../pages/OTPCode';
import PrivateRoutes from './PrivateRoutes';

class PublicRoutes extends Component {
	render() {
		return (
			<Router >
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/home' component={LandingPage} />
					<Route exact path='/about-us' component={AboutUs} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/forgot-password' component={ForgotPassword} />
					<PrivateRoutes />
				</Switch>
			</Router>
		)
	}
}
export default PublicRoutes

