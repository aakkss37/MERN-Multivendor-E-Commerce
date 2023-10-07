import jwt from "jsonwebtoken";

/**
 * Generate and send a JWT token in a cookie and respond with a JSON message.
 *
 * @param {object} user - The user object to encode in the JWT token.
 * @param {number} statusCode - The HTTP status code to be sent in the response.
 * @param {object} res - The Express response object.
 * @param {string} msg - The message to include in the JSON response.
 */
const sentToken = (user, statusCode, res, msg) => {
    /**
     * Generate a JSON Web Token (JWT) for the provided user.
     *
     * @param {object} user - The user object to encode in the JWT token.
     * @param {string} process.env.JWT_SECRET_KEY - The JWT secret key.
     * @returns {string} The generated JWT token.
     */
    console.log(user)
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY);

    // Set a cookie with the JWT token.
    res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        secure: true,
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    })
    .status(statusCode)
    .json({ user: user, msg: msg });
};

export default sentToken;
