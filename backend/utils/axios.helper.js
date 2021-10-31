const axios = require("axios");

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw new Error(error)
  }
);

module.exports = axios;
