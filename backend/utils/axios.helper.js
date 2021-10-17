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
    const { response } = error;
    if (response) {
      const { status, data } = response;
      if (status === 400) {
        return Promise.reject(new BadRequestError(data.message));
      } else if (status === 401) {
        return Promise.reject(new UnAuthorizedError(data.message));
      } else if (status === 403) {
        return Promise.reject(new ForbiddenError(data.message));
      } else if (status === 404) {
        return Promise.reject(new NotFoundError(data.message));
      } else if (status === 500) {
        return Promise.reject(new InternalServerError(data.message));
      } else if (status === 502) {
        return Promise.reject(new BadGatewayError(data.message));
      }
    } else {
      return Promise.reject(new InternalServerError());
    }
  }
);

module.exports = axios;
