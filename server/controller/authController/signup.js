import express from "express";
import path from "path";
import User from "../../model/userSchema.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const signup = async(req, res, next) => {
    console.log("connected");
    console.log(req.body);
    const { displayName, email, password } = req.body;
    try {
        const foundEmail = await User.findOne({ email });
        if (foundEmail) {
            return next(new ErrorHandler("User already exist", 400));
        };
        const filename = req.file.filename;
        const fileURL = path.join(filename);
        const newUser = {
            name: displayName,
            email: email,
            password: password,
            avatar: fileURL,
        };
        console.log(newUser);
    } catch (error) {
        console.log(error)
    }
}
export default signup;