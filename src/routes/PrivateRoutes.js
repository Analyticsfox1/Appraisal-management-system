import React, { Component } from 'react'
import { Route } from "react-router";
import PageNotFound from '../pages/PageNotFound';

//  User Routes 
import Dashboard from '../modules/user/Dashboard';
import PerformanceAppraisal from '../modules/user/PerformanceAppraisal';
import MonthlyMeeting from '../modules/user/MonthlyMeeting';
import ProbationForm from '../modules/user/ProbationForm';
import MyAccount from '../modules/user/MyAccount';
import UpdatePassword from '../modules/user/UpdatePassword';
//  Admin Routes 
import AdminDashboard from '../modules/admin/AdminDashboard';
import UserManagement from '../modules/admin/UserManagement';
import RoleManagement from '../modules/admin/RoleManagement';
import AccessManagement from '../modules/admin/AccessManagement';
import TeamManagement from '../modules/admin/TeamManagement';
import PushNotification from '../modules/admin/PushNotification';
import MemberAssigned from '../modules/admin/MemberAssigned';
import MemberNotAssigned from '../modules/admin/MemberNotAssigned';
import NewRegistartion from '../modules/admin/NewRegistration';
//  CEO Routes 
import CEOKraManagement from '../modules/ceo/KraManagement';
import CEOTeamManagement from '../modules/ceo/TeamManagement';
import CEOOrganizationGoal from '../modules/ceo/OrganizationGoal';
import CEOPushNotification from '../modules/ceo/PushNotification';
//  Manager Routes 
import ManagerDashboard from '../modules/manager/ManagerDashboard';
import ManagerTeamManagement from '../modules/manager/ManagerTeamManagement';
import ManagerEmployeeProbation from '../modules/manager/ManagerEmployeeProbation';

class PrivateRoutes extends Component {

	render() {
		return (
			<>
				{/* User Routes  */}
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/performance-appraisal' component={PerformanceAppraisal} />
				<Route exact path='/monthly-meeting' component={MonthlyMeeting} />
				<Route exact path='/account' component={MyAccount} />
				<Route exact path='/update-password' component={UpdatePassword} />
				<Route exact path='/probation-form' component={ProbationForm} />
				{/* Admin Routes */}
				<Route exact path='/admin-dashboard' component={AdminDashboard} />
				<Route exact path='/user-management' component={UserManagement} />
				<Route exact path='/role-management' component={RoleManagement} />
				<Route exact path='/access-management' component={AccessManagement} />
				<Route exact path='/team-management' component={TeamManagement} />
				<Route exact path='/member-assigned' component={MemberAssigned} />
				<Route exact path='/member-not-assigned' component={MemberNotAssigned} />
				<Route exact path='/new-register' component={NewRegistartion} />
				<Route exact path='/push-notification' component={PushNotification} />
				{/* CEO Routes */}
				<Route exact path='/CEO-kra-management' component={CEOKraManagement} />
				<Route exact path='/CEO-team-management' component={CEOTeamManagement} />
				<Route exact path='/CEO-organizational-goal' component={CEOOrganizationGoal} />
				<Route exact path='/CEO-push-notification' component={CEOPushNotification} />
				{/* Manager Routes */}
				<Route exact path='/manager-dashboard' component={ManagerDashboard} />
				<Route exact path='/manager-team-management' component={ManagerTeamManagement} />
				<Route exact path='/manager-employee-probation-management' component={ManagerEmployeeProbation} />
				
				{/* <Route path="*" component={PageNotFound} /> */}
			</>
		)
	}
}
export default PrivateRoutes

