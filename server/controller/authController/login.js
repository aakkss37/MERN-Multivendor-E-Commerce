import User from "../../model/userSchema.js";

const login = async (req, res, next) => {
    const {email, password} = req.body;
    console.log({email, password})
    try {
        if(!email, !password) {
            return res.status(400).json({success: false, msg: "Insufficient detail were provided"});
        }
        const foundUser = await User.findOne({email}).select("+password");
        console.log("foundUser ====>>>>> ", foundUser)
        if(!foundUser) {
            return res.status(404).json({success: false, error: "email", msg: "User not found."});
        };
        const idPasswordValid = await foundUser.comparePassword(password);
        if(!idPasswordValid) {
            return res.status(401).json({success: false, error: "password", msg: "Wrong password."});
        };
        return res.status(200).json({success: true, msg: "Login successful", user: foundUser})
    } catch (error) {
        return res.status(500).json({msg: "Internal server error!", error: error.message})
    }
}
export default login;