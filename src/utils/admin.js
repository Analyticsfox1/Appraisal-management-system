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