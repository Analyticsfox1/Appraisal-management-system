import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from '../modules/user/Dashboard';

class UserRoutes extends Component {

	render() {
		return (
			<Router >
				<Switch>
					<Route exact path='/dashboard' component={Dashboard} />					
				</Switch>
			</Router>
		)
	}
}
export default UserRoutes

