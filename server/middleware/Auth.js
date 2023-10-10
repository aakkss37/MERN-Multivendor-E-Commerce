import jwt  from "jsonwebtoken";
import User from "../model/userSchema.js";

export const isAuthenticated = async(req, res, next) => {
    try {   
        const {access_token} = req.cookies;
        console.log("access token --==-->>",access_token);
        if(!access_token) return (res.status(401).json({msg: "Credentials were not provided"}));
        const decoded = jwt.verify(access_token, process.env.JWT_SECRET_KEY);
        console.log("decoded---->>>", decoded._id);
        const foundUser = await User.findById(decoded._id);
        console.log("foundUser---->>>", foundUser);
        if(!foundUser) return res.status(404).json({msg: "No user found whit the provided credential"});
        req.user = foundUser;
        next();
    } catch (error) {
        console.log("error---->>>-", error);
        return res.status(500).json({msg: "Internal server error"});
    }
} 
