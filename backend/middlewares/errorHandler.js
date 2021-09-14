const { NotFoundError, BadRequestError } = require('../utils/appError');

const sendErrorInDev = (errorObject, res) => {
  console.log('✖ | Error:'.red.bold, errorObject);
  res.status(errorObject.statusCode).json({
    status: errorObject.status, message: errorObject.message, error: errorObject, stack: errorObject.stack
  })
}

const sendErrorInProduction = (errorObject, res) => {
  let details;
  
  // Joi validation errors
  if (errorObject.name === 'ValidationError') {
    const errorDetails = errorObject.details;
    errorObject = new BadRequestError('Validation failed. Please enter all required values correctly');

    details = errorDetails.reduce((previous, { message }) => ({ ...previous, message }), {});
  }


  if (errorObject.name === 'ForbiddenError' && errorObject.code === 'EBADCSRFTOKEN') {
    errorObject = new BadRequestError('Invalid CSRF token');
  }


  if (errorObject?.error) {
    if (errorObject?.error.code === 'ENOTFOUND' || errorObject?.error.code === 'ECONNRESET') {
      errorObject = new AppError('An error occured while connecting to a required external service', 500);
    }
  }


  res.status(errorObject.statusCode || 500).json({
    status: errorObject.status || 'failure', message: errorObject.message || 'Internal server error', details
  })
}

module.exports = (errorObject, req, res, next) => {
  errorObject.statusCode = errorObject.statusCode || 500;
  errorObject.status = errorObject.status || 'error';
  
  (process.env.NODE_ENV !== 'production') && sendErrorInDev(errorObject, res);
  (process.env.NODE_ENV === 'production') && sendErrorInProduction(errorObject, res);
}