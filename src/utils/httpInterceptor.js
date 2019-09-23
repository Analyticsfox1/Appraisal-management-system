import axios from 'axios';

const baseURL = "http://13.126.20.61:8080"

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

export const get = (apiURL) => {
	return axios.get(`${baseURL}${apiURL}`, {
		headers:
			{
				'Access-Control-Allow-Method': 'get',
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

export const post = (apiURL, bodyObj = {}, contentType) => {
	return axios.post(`${baseURL}${apiURL}`, bodyObj, {
		headers:
			{
				'Access-Control-Allow-Method': 'post',
				'Access-Control-Allow-Origin': '*',
				'Content-Type': contentType ||  'application/json',
				accessToken: 'roS0SOXGlvRDLoNtacLXjrI2Rh8NcmDl',
				tokenId: 'nih.patil@gmail.com'
			},
		data: {}
	})
		.then((response) => handleResponse(response))
		.catch((error) => handleError(error));
}
