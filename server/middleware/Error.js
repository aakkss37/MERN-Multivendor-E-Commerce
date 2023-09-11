import ErrorHandler from "../utils/ErrorHandler.js";

/**
 * Error handling middleware for handling various types of errors.
 * @param {Error} err - The error object.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 * @param {Express.NextFunction} next - The next middleware function.
 */
export default (err, req, res, next) => {
	// Set a default status code and error message if not provided
	err.statusCode = err.statusCode || 500;
	err.message = err.message || "Internal Server Error";

	// Handle wrong MongoDB ID error (CastError)
	if (err.name === "CastError") {
		const message = `Resource not found with this ID. Invalid ${err.path}`;
		err = new ErrorHandler(message, 400);
	}

	// Handle duplicate key error (MongoDB Error Code 11000)
	if (err.code === 11000) {
		const message = `Duplicate key entered for ${Object.keys(err.keyValue)}`;
		err = new ErrorHandler(message, 400);
	}

	// Handle invalid JSON Web Token error (JsonWebTokenError)
	if (err.name === "JsonWebTokenError") {
		const message = "Invalid Token";
		err = new ErrorHandler(message, 400);
	}

	// Handle JWT token expiration error (TokenExpiredError)
	if (err.name === "TokenExpiredError") {
		const message = "Token has expired";
		err = new ErrorHandler(message, 400);
	}

	// Respond with the appropriate status code and error message
	res.status(err.statusCode).json({
		success: false,
		message: err.message,
	});
}