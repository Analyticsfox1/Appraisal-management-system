var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://13.126.20.61:8080',
});

module.exports = axiosInstance;