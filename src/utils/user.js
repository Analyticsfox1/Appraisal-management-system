
import { post } from "./httpInterceptor";


//Add new user
export const register = data => {
	return post(`uprise/authentication/addUser`, data).then(res => {
		console.log('RESPONSE :: register ::: ', res);
		return res;
	});
}


