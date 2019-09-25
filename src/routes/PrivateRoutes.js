import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router";
import { HashRouter as Router } from "react-router-dom";
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
import ManagerProbationForm from '../modules/manager/ManagerProbationForm';

const PrivateRouteUser = ({ component: Component }) => {
	return (
		<Route
			render={props =>
				sessionStorage.getItem('userData') ? (
					<Component {...props} />
				) : (
						<Redirect to={{ pathname: "/login" }} />
					)
			}
		/>
	);
};

const PrivateRouteAdmin = ({ component: Component }) => {
	return (
		<Route
			render={props =>
				sessionStorage.getItem('adminData') ? (
					<Component {...props} />
				) : (
						<Redirect to={{ pathname: "/login" }} />
					)
			}
		/>
	);
};

const PrivateRouteManager = ({ component: Component }) => {
	return (
		<Route
			render={props =>
				sessionStorage.getItem('managerData') ? (
					<Component {...props} />
				) : (
						<Redirect to={{ pathname: "/login" }} />
					)
			}
		/>
	);
};

const PrivateRouteCEO = ({ component: Component }) => {
	return (
		<Route
			render={props =>
				sessionStorage.getItem('ceoData') ? (
					<Component {...props} />
				) : (
						<Redirect to={{ pathname: "/login" }} />
					)
			}
		/>
	);
};

class PrivateRoutes extends Component {

	render() {
		return (
			<Router >
				<Switch>
					{/* User Routes  */}
					<PrivateRouteUser exact path='/dashboard' component={Dashboard} />
					<PrivateRouteUser exact path='/performance-appraisal' component={PerformanceAppraisal} />
					<PrivateRouteUser exact path='/monthly-meeting' component={MonthlyMeeting} />
					<PrivateRouteUser exact path='/account' component={MyAccount} />
					<PrivateRouteUser exact path='/update-password' component={UpdatePassword} />
					<PrivateRouteUser exact path='/probation-form' component={ProbationForm} />
					{/* Admin Routes */}
					<PrivateRouteAdmin exact path='/admin-dashboard' component={AdminDashboard} />
					<PrivateRouteAdmin exact path='/user-management' component={UserManagement} />
					<PrivateRouteAdmin exact path='/role-management' component={RoleManagement} />
					<PrivateRouteAdmin exact path='/access-management' component={AccessManagement} />
					<PrivateRouteAdmin exact path='/team-management' component={TeamManagement} />
					<PrivateRouteAdmin exact path='/member-assigned' component={MemberAssigned} />
					<PrivateRouteAdmin exact path='/member-not-assigned' component={MemberNotAssigned} />
					<PrivateRouteAdmin exact path='/new-register' component={NewRegistartion} />
					<PrivateRouteAdmin exact path='/push-notification' component={PushNotification} />
					{/* CEO Routes */}
					<PrivateRouteCEO exact path='/CEO-kra-management' component={CEOKraManagement} />
					<PrivateRouteCEO exact path='/CEO-team-management' component={CEOTeamManagement} />
					<PrivateRouteCEO exact path='/CEO-organizational-goal' component={CEOOrganizationGoal} />
					<PrivateRouteCEO exact path='/CEO-push-notification' component={CEOPushNotification} />
					{/* Manager Routes */}
					<PrivateRouteManager exact path='/manager-dashboard' component={ManagerDashboard} />
					<PrivateRouteManager exact path='/manager-team-management' component={ManagerTeamManagement} />
					<PrivateRouteManager exact path='/manager-employee-probation-management' component={ManagerEmployeeProbation} />
					<PrivateRouteManager exact path='/manager-probation-form' component={ManagerProbationForm} />
					{/* <Route path="*" component={PageNotFound} /> */}
				</Switch>
			</Router >
		)
	}
}
export default PrivateRoutes

