import { post, get } from "./httpInterceptor";

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
	debugger
	return post(`uprise/authentication/updatePassword?newPassword=${data.newPassword}&oldPassword=${data.oldPassword}`).then(res => {
		console.log('RESPONSE :: Update Password ::: ', res);
		return res;
	});
}



