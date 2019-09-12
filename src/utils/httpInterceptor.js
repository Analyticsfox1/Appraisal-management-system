import client from './client';

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
	return client.get(`${url}`, {
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
	return client.post(`${url}`, bodyObj, {
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
