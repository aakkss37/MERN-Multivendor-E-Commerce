import jwt  from "jsonwebtoken";
import User from "../../model/userSchema.js";

export const validateCookiesAndGetUser = async(req, res, next) => {
    try {
        const user = req.user;
        res.status(200).json({user: user, msg: "User Authenticated"});        
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Internal server error!", error: error.message});
    }
};