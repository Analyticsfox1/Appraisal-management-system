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

import Dashboard from '../modules/user/Dashboard';
import KraManagement from '../modules/user/KraManagement';
import PerformanceAppraisal from '../modules/user/PerformanceAppraisal';
import MonthlyAppraisal from '../modules/user/MonthlyAppraisal';
import MyAccount from '../modules/user/MyAccount';

import UserManagement from '../modules/admin/UserManagement';
import RoleManagement from '../modules/admin/RoleManagement';
import TeamManagement from '../modules/admin/TeamManagement';
import PushNotification from '../modules/admin/PushNotification';

import UserRoutes from '../routes/UserRoutes';
import AdminRoutes from '../routes/AdminRoutes';
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

					<Route exact path='/dashboard' component={Dashboard} />
					<Route exact path='/kra-management' component={KraManagement} />
					<Route exact path='/performance-appraisal' component={PerformanceAppraisal} />
					<Route exact path='/monthly-appraisal' component={MonthlyAppraisal} />
					<Route exact path='/account' component={MyAccount} />


					<Route exact path='/user-management' component={UserManagement} />
					<Route exact path='/role-management' component={RoleManagement} />
					<Route exact path='/team-management' component={TeamManagement} />
					<Route exact path='/push-notification' component={PushNotification} />



					{/* <AdminRoutes /> */}
					{/* <UserRoutes /> */}
				</Switch>
			</Router>
		)
	}
}
export default PublicRoutes

