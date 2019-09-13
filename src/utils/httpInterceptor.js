import axios from 'axios';

let baseURL = 'http://13.126.20.61:8080';

const handleResponse = (response) => {
	return {
		data: response.data
	};
}

const handleError = (error) => {
	const { response } = error;
	return {
		message: response ? response.data.message : null,
		status: response ? response.status : null
	};
}

export const get = (url) => {
	console.log("TCL: get -> process.env.NODE_ENV", process.env.NODE_ENV)
	return axios.get(process.env.NODE_ENV === 'development' ? `${url}` : `${baseURL}${url}`, {
		headers:
			{
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json; charset=utf-8',
				accessToken: 'roS0SOXGlvRDLoNtacLXjrI2Rh8NcmDl',
				tokenId: 'nih.patil@gmail.com'
			},
		data: {}
	})
		.then((response) => handleResponse(response))
		.catch((error) => handleError(error));
}

export const post = (url, bodyObj = {}) => {
	return axios.post(process.env.NODE_ENV === 'development' ? `${url}` : `${baseURL}${url}`, bodyObj, {
		headers:
			{
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				accessToken: 'roS0SOXGlvRDLoNtacLXjrI2Rh8NcmDl',
				tokenId: 'nih.patil@gmail.com'
			},
		data: {}
	})
		.then((response) => handleResponse(response))
		.catch((error) => handleError(error));
}
