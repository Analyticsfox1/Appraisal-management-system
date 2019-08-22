import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

class Routes extends Component {

	render() {
		return (
			<Router >
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/home' component={LandingPage} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/forgot-password' component={ForgotPassword} />
				</Switch>
			</Router>
		)
	}
}
export default Routes

