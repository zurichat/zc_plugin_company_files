const formatMessage = objectOrMessage => {
	return typeof(objectOrMessage) === 'string'
		? objectOrMessage
		: (typeof(objectOrMessage) === 'object' && objectOrMessage?.message)
			? objectOrMessage.message
			: '';
}

const createResponse = (objectOrMessage, data, status = false, additionalData) => {
	return {
		status: status === false ? 'failure' : 'success',
		message: objectOrMessage ? formatMessage(objectOrMessage) : undefined,
		...additionalData,
		data
	}
}


module.exports = createResponse;
