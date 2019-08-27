import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import OTPCode from '../pages/OTPCode';
import ChangePassword from '../pages/ChangePassword';
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
					<Route exact path='/OTP-code' component={OTPCode} />
					<Route exact path='/change-password' component={ChangePassword} />
					<Route exact path='/change-password' component={ChangePassword} />
					<PrivateRoutes />
				</Switch>
			</Router>
		)
	}
}
export default PublicRoutes

