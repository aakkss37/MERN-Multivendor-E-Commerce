import jwt from "jsonwebtoken"

/**
 * Create an activation token using JSON Web Token (JWT).
 *
 * @param {object} user - The user object to encode in the token.
 * @returns {string} The JWT activation token.
 * @typedef {object} User
 * @property {string} name - The user's Display name.
 * @property {string} email - The user's email address.
 * @property {string} username - The user's username.
 * @property {object} avatar - The user's display pic. url and public_id
 */
export const createActivationToken = (user) => {

    /**
     * @type {User}
     */
    return jwt.sign(user, process.env.JWT_ACCOUNT_ACTIVATION_SECRET_KEY, {
        expiresIn: "30m"
    });
};