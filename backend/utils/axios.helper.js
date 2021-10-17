const axios = require("axios");
const {
  BadRequestError,
  InternalServerError,
  BadGatewayError,
  UnAuthorizedError,
  ForbiddenError,
  NotFoundError,
} = require("../utils/appError");

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw new Error(error)
  }
);

module.exports = axios;
