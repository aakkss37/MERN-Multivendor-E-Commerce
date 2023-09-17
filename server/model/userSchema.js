/**
 * User Schema and Model
 *
 * This module defines the Mongoose schema for the User model, including user information,
 * password hashing, JWT token generation, and password comparison.
 *
 * @module User
 */

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * Mongoose schema for the User model.
 *
 * @typedef {Object} UserSchema
 * @property {string} name - The user's name.
 * @property {string} email - The user's email address.
 * @property {string} password - The hashed user password.
 * @property {number} phoneNumber - The user's phone number (optional).
 * @property {Array<Object>} addresses - An array of user addresses.
 * @property {string} role - The user's role (default: "user").
 * @property {Object} avatar - The user's avatar information.
 * @property {string} avatar.public_id - The public ID of the user's avatar.
 * @property {string} avatar.url - The URL to the user's avatar image.
 * @property {Date} createdAt - The date when the user account was created (default: current date).
 * @property {string} resetPasswordToken - Token for resetting the user's password.
 * @property {Date} resetPasswordTime - Time for resetting the user's password.
 */

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Display name must contain at least 3 characters (Only letters and spaces allowed.)"],
        validate: {
            validator: function(value) {
                // Custom validation function for name
                const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
                return nameRegex.test(value) && value.length >= 3;
            },
            message: "Invalid name format or length",
        },
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        validate: {
            validator: function(value) {
                // Custom validation function for email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
                return emailRegex.test(value);
            },
            message: "Invalid email format",
        },
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [4, "Password should be greater than 4 characters"],
        select: false,
    },
    phoneNumber: {
        type: Number,
    },
    addresses: [{
        country: {
            type: String,
        },
        city: {
            type: String,
        },
        address1: {
            type: String,
        },
        address2: {
            type: String,
        },
        zipCode: {
            type: Number,
        },
        addressType: {
            type: String,
        },
    }],
    role: {
        type: String,
        default: "user",
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
});


/**
 * Middleware to hash the user's password before saving it to the database.
 *
 * @function
 * @name hashPassword
 * @memberof module:User~UserSchema
 */
userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

/**
 * A method to generate a JWT token for the user.
 *
 * @function
 * @name getJwtToken
 * @memberof module:User~UserSchema
 * @returns {string} JWT token for the user.
 */
userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});


/**
 * A method to compare a provided password with the user's stored hashed password.
 *
 * @function
 * @name comparePassword
 * @memberof module:User~UserSchema
 * @param {string} enteredPassword - The password to compare.
 * @returns {Promise<boolean>} A promise that resolves to true if the passwords match, or false otherwise.
 */
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};




/**
 * Mongoose model for the User.
 * 
 * Have Middleware to hash the user's password before saving it to the database.
 * 
 * A method to generate a JWT token for the user.
 * 
 * A method to compare a provided password with the user's stored hashed password.
 * @function
 * @name hashPassword
 * @memberof module:User~UserSchema
 * @typedef {Object} User
 * @property {UserSchema} userSchema - The User schema.
 */
const User = mongoose.model("User", userSchema);

export default User;