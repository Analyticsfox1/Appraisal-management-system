import axios from 'axios';

const handleResponse = (response) => {
	return {
			error: false,
			data: response.data
	};
}

const handleError = (error) => {
	const { response } = error;
	// let errorMsg = 'Sorry, something went wrong. Please try again.';
	return {
			error: true,
			message: response ? response.data.message : null,
			status: response ? response.status : null
	};
}

export const get = (url) => {
	const axiosObj = {
		url:`${url}`,
		method: 'get',
	};
	return axios(axiosObj)
		.then((response) => handleResponse(response))
		.catch((error) => handleError(error));
}

export const post = (url, bodyObj = {}) => {
	return axios.post(`${url}`, bodyObj)
		.then((response) => handleResponse(response))
		.catch((error) => handleError(error));
}