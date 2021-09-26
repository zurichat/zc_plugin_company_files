const axios = require('axios');
const { BadRequestError, InternalServerError, BadGatewayError, UnAuthorizedError, ForbiddenError, NotFoundError } = require('../utils/appError');


axios.interceptors.response.use(response => {
  // Maybe process response here
  return response.data;
},({ message, request, response }) => {
  if (request) {
    throw new InternalServerError('An error occured while connecting to a required service.');
  }

  if (message) {
    throw new InternalServerError('An unexpected error occured. Please contact an admin.');
  }

  if (response) {
    switch (response.status) {
      case 400:
        throw new BadRequestError();
      case 401:
        throw new UnAuthorizedError();
      case 403:
        throw new ForbiddenError();
      case 404:
        throw new NotFoundError();
      case 502:
        throw new BadGatewayError();
      default:
        throw new InternalServerError('An unexpected error occured. Please contact an admin.');
    }
  }
})

module.exports = axios;
