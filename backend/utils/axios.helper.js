const axios = require('axios');
const { BadRequestError, InternalServerError, BadGatewayError, UnAuthorizedError, ForbiddenError, NotFoundError } = require('../utils/appError');


axios.interceptors.response.use(response => {
  // Maybe process response here
  return response.data;
},({ message, request, response }) => {
  // console.log('-- message', message);
  // console.log('-- response', response);
  // console.log('-- request', request);

  if (request) {
    throw new InternalServerError('An error occured while connecting to a required service.');
  }

  if (message) {
    throw new InternalServerError('An unexpected error occured. Please contact an admin.');
  }

  if (Number(response)) {
    switch (response.status) {
      case 400:
        throw new BadRequestError();
      case 401:
        throw new UnAuthorizedError();
      case 403:
        throw new ForbiddenError();
      case 404:
        throw new NotFoundError();
      case 422:
        throw new InternalServerError('An error occured while processing a request sent to Zuri Chat core.', 422);
      case 502:
        throw new BadGatewayError();
      default:
        throw new InternalServerError('An unexpected error occured. Please contact an admin.');
    }
  }
})

module.exports = axios;
