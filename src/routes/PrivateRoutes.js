import React, { Component } from 'react'
import { Route } from "react-router";
//  User Routes 
import Dashboard from '../modules/user/Dashboard';
import KraManagement from '../modules/user/KraManagement';
import PerformanceAppraisal from '../modules/user/PerformanceAppraisal';
import MonthlyAppraisal from '../modules/user/MonthlyAppraisal';
import MyAccount from '../modules/user/MyAccount';
//  Admin Routes 
import UserManagement from '../modules/admin/UserManagement';
import RoleManagement from '../modules/admin/RoleManagement';
import TeamManagement from '../modules/admin/TeamManagement';
import PushNotification from '../modules/admin/PushNotification';
//  CEO Routes 
import CEOKraManagement from '../modules/ceo/KraManagement';
import CEOTeamManagement from '../modules/ceo/TeamManagement';
import CEOOrganizationGoal from '../modules/ceo/OrganizationGoal';
import CEOPushNotification from '../modules/ceo/PushNotification';

class PrivateRoutes extends Component {

	render() {
		return (
			<>
				{/* User Routes  */}
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/kra-management' component={KraManagement} />
				<Route exact path='/performance-appraisal' component={PerformanceAppraisal} />
				<Route exact path='/monthly-appraisal' component={MonthlyAppraisal} />
				<Route exact path='/account' component={MyAccount} />
				{/* Admin Routes */}
				<Route exact path='/user-management' component={UserManagement} />
				<Route exact path='/role-management' component={RoleManagement} />
				<Route exact path='/team-management' component={TeamManagement} />
				<Route exact path='/push-notification' component={PushNotification} />
				{/* CEO Routes */}
				<Route exact path='/CEO-kra-management' component={CEOKraManagement} />
				<Route exact path='/CEO-team-management' component={CEOTeamManagement} />
				<Route exact path='/CEO-organizational-goal' component={CEOOrganizationGoal} />
				<Route exact path='/CEO-push-notification' component={CEOPushNotification} />
			</>
		)
	}
}
export default PrivateRoutes

