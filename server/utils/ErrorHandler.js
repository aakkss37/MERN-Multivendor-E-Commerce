/**
 * Custom error class for handling errors with status codes.
 * @class
 * @extends Error
 */
class ErrorHandler extends Error {
	/**
	* Creates an instance of ErrorHandler.
	* @param {string} message - The error message.
	* @param {number} statusCode - The HTTP status code to associate with the error.
	*/
	constructor (message, statusCode) {
		super(message);
		this.statusCode = statusCode;
		Error.captureStackTrace(this, this.constructor)
	}
}

export default ErrorHandler