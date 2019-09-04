import React, { Component } from 'react'
import { Route } from "react-router";
import PageNotFound from '../pages/PageNotFound';

//  User Routes 
import Dashboard from '../modules/user/Dashboard';
import PerformanceAppraisal from '../modules/user/PerformanceAppraisal';
import MonthlyMeeting from '../modules/user/MonthlyMeeting';
import ProbationForm from '../modules/user/ProbationForm';
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
				<Route exact path='/performance-appraisal' component={PerformanceAppraisal} />
				<Route exact path='/monthly-meeting' component={MonthlyMeeting} />
				<Route exact path='/account' component={MyAccount} />
				<Route exact path='/probation-form' component={ProbationForm} />
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
				<Route path="*" component={PageNotFound} />
			</>
		)
	}
}
export default PrivateRoutes

