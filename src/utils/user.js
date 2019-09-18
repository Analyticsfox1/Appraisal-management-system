import { post, get } from "./httpInterceptor";

//user register API
export const register = data => {
	return post(`/uprise/authentication/registration`, data).then(res => {
		console.log('RESPONSE :: Register ::: ', res);
		return res;
	});
}

//user upload document API
export const uploadDoc = data => {
	const formData = new FormData();
	Object.keys(data).map(key => {
		formData[key] = data[key]
	});
	console.log("TCL: formData", formData)
	return post(`/uprise/authentication/uploadDoc`, formData).then(res => {
		console.log('RESPONSE :: Upload Document ::: ', res);
		return res;
	});
}

//user login API
export const login = data => {
	return post(`/uprise/authentication/authenticate?username=${data.email}&password=${data.password}`).then(res => {
		console.log('RESPONSE :: login ::: ', res);
		return res;
	});
}

//user logout API
export const logout = () => {
	return get(`/uprise/authentication/logout`).then(res => {
		console.log('RESPONSE :: logout ::: ', res);
		return res;
	});
}

//user Forgot Password API
export const forgotPassword = data => {
	return post(`/uprise/authentication/forgotPassword?username=${data.email}`).then(res => {
		console.log('RESPONSE :: Forgot Password ::: ', res);
		return res;
	});
}

//user Update Password API
export const updatePassword = data => {
	return post(`uprise/authentication/updatePassword?newPassword=${data.newPassword}&oldPassword=${data.oldPassword}`).then(res => {
		console.log('RESPONSE :: Update Password ::: ', res);
		return res;
	});
}

//user Dashboard API
export const getUserDashboard = () => {
	return get(`/uprise/authentication/getUserDashboard`).then(res => {
		console.log('RESPONSE :: User Dashboard ::: ', res);
		return res;
	});
}

//Add probation form API
export const addProbationForm = data => {
	return post(`/uprise/kra/addProbationForm`, data).then(res => {
		console.log('RESPONSE :: Add Probation form ::: ', res);
		return res;
	});
}

