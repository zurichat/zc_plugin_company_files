class AppError extends Error {
	constructor(message, statusCode = 500) {
		super(message);
		this.name = 'PluginError';
		this.statusCode = statusCode;
		this.isOperational = true;
		this.date = new Date();

		if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
	}
}

class BadRequestError extends AppError {
	constructor(message = 'Bad request', statusCode = 400) {
		super(message, statusCode);
	}
}

class InternalServerError extends AppError {
	constructor(message = 'Something wrong happened', statusCode = 500) {
		super(message, statusCode);
	}
}

class UnAuthorizedError extends AppError {
	constructor(message = 'Not authorized', statusCode = 401) {
		super(message, statusCode);
	}
}

class ForbiddenError extends AppError {
	constructor(message = 'Access forbidden', statusCode = 403) {
		super(message, statusCode);
	}
}

class ExpectationFailedError extends AppError {
	constructor(message = 'Expected inputs were not supplied', statusCode = 417) {
		super(message, statusCode);
	}
}

class NotFoundError extends AppError {
  constructor(message = 'Requested resource not found', statusCode = 404) {
    super(message, statusCode);
  }
}

class InvalidError extends AppError {
	constructor(message = 'Invalid input', statusCode = 422) {
		super(message, statusCode);
	}
}

class DuplicateError extends AppError {
	constructor(message = 'Duplicate value entered', statusCode = 406) {
		super(message, statusCode);
	}
}

module.exports = {
	BadRequestError,
	InternalServerError,
	UnAuthorizedError,
	ForbiddenError,
	ExpectationFailedError,
	NotFoundError,
	InvalidError,
	DuplicateError
}