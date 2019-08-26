import React, { Component } from 'react'
import { Route } from "react-router";
import Dashboard from '../modules/user/Dashboard';
import KraManagement from '../modules/user/KraManagement';
import PerformanceAppraisal from '../modules/user/PerformanceAppraisal';
import MonthlyAppraisal from '../modules/user/MonthlyAppraisal';
import MyAccount from '../modules/user/MyAccount';

class UserRoutes extends Component {

	render() {
		console.log("called UserRoutes")
		return (
			<>
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/kra-management' component={KraManagement} />
				<Route exact path='/performance-appraisal' component={PerformanceAppraisal} />
				<Route exact path='/monthly-appraisal' component={MonthlyAppraisal} />
				<Route exact path='/account' component={MyAccount} />
			</>
		)
	}
}
export default UserRoutes

