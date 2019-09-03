import { post, get } from "./httpInterceptor";

//get User list API
export const getUserList = () => {
	return get(`/uprise/authentication/getAllUsers`).then(res => {
		console.log('RESPONSE :: UserList ::: ', res);
		return res;
	});
}

// get user details by unique id
export const getUserById = data => {
	return get(`/uprise/authentication/getUserByUniqueId?uniqueId=${data}`).then(res => {
		console.log('RESPONSE :: User Details ::: ', res);
		return res;
	});
}

// add User API
export const addUser = data => {
	return post(`/uprise/authentication/addUser`, data).then(res => {
		console.log('RESPONSE :: Add User ::: ', res);
		return res;
	});
}

//get Role list API
export const getRoleList = () => {
	return get(`/uprise/access/getAllRoles`).then(res => {
		console.log('RESPONSE :: RoleList ::: ', res);
		return res;
	});
}

// get role details by name
export const getRoleByName = data => {
	return get(`/uprise/access/getRoleByName?roleName=${data}`).then(res => {
		console.log('RESPONSE :: Role Details ::: ', res);
		return res;
	});
}

// add Role API
export const addRole = data => {
	return post(`/uprise/access/addRole`, data).then(res => {
		console.log('RESPONSE :: Add Role ::: ', res);
		return res;
	});
}

// delete Role by ID API
export const deleteRole = data => {
	return post(`/uprise/access/deleteRoleById?roleId=${data}`).then(res => {
		console.log('RESPONSE :: Delete Role ::: ', res);
		return res;
	});
}