/**
 * List of allowed origins (domains) for CORS.
 * @type {string[]}
 */
export const whiteList = [
	"https://www.yourdomain.com",
	"https://www.google.com",
	"http://127.0.0.1:5500",
	"http://localhost:3500",
	"http://localhost:3000",
	"http://localhost:8000",
	"http://localhost:5173"
]

/**
 * CORS options for configuring cross-origin resource sharing.
 * @type {Object}
 */
const corsOption = {
	/**
	 * Function to determine whether the request's origin is allowed.
	 * @param {string} origin - The origin of the incoming request.
	 * @param {function} callBack - Callback function to indicate whether to allow or reject the request.
	 */
	origin: (origin, callBack) => {
		// Check if the request's origin is in the whiteList or is null
		if (whiteList.indexOf(origin) !== -1 || !origin) {
			// If the origin is allowed or it's a same-origin request, allow it
			callBack(null, true)
		} else {
			// If the origin is not in the whiteList, reject the request with an error
			callBack(new Error("Request rejected by CORS"))
		}
	},
	/**
	 * Indicates whether to include credentials (e.g., cookies, HTTP authentication) in cross-origin requests.
	 * @type {boolean}
	 */
	credentials: true,
}

// Export the CORS options object
export default corsOption