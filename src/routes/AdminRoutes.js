import React, { Component } from 'react'
import { Route } from "react-router";
import UserManagement from '../modules/admin/UserManagement';
import RoleManagement from '../modules/admin/RoleManagement';
import TeamManagement from '../modules/admin/TeamManagement';
import PushNotification from '../modules/admin/PushNotification';

class AdminRoutes extends Component {

	render() {
		console.log("called admin")
		return (
			<>
				<Route exact path='/user-management' component={UserManagement} />
				<Route exact path='/role-management' component={RoleManagement} />
				<Route exact path='/team-management' component={TeamManagement} />
				<Route exact path='/push-notification' component={PushNotification} />
			</>

		)
	}

}


export default AdminRoutes

