import express from "express";
import path from "path";
import User from "../../model/userSchema.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import { v4 as uuidv4 } from "uuid";

const signup = async(req, res, next) => {
    console.log("connected");
    console.log(req.body);
    const { displayName, email, password } = req.body;
    try {
        const foundEmail = await User.findOne({ email });
        if (foundEmail) {
            return next(new ErrorHandler("User already exist", 400));
        }
        const filename = req.file.filename;
        const fileURL = path.join(filename);
        const newAccountData = {
            name: displayName,
            email: email,
            password: password,
            avatar: {
                public_id: uuidv4() + fileURL,
                url: fileURL,
            },
        };
        console.log(newAccountData);
        const newUser = await User.create(newAccountData);
        res.status(201).json({ sucess: true, newUser });
    } catch (error) {
        console.log(error);
    }
};
export default signup;