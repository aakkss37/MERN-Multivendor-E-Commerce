import jwt from "jsonwebtoken";
import User from "../../model/userSchema.js";
import sentToken from "../../utils/jwtToken.js";

const activateAccount = async (req, res, next) => {
    try {
        const { token } = req.query;
        const newUser = jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION_SECRET_KEY);
        console.log("Verified token  ===>>> ", newUser)
        if(newUser) {
            const foundEmail = await User.findOne({email: newUser.email});
            console.log("User Already Exist ===>>> ", newUser)
            if (foundEmail) {
                return res.status(401).json({msg: "Invalid | Expired Token"});
            } else {
                console.log(newUser)
                const {name, email, password, avatar} = newUser;
                const activatedUser = await User.create({name, email, password, avatar});
                activatedUser.save();
                sentToken(newUser, 201, res, "Account activated successfully");
            }
        }


    } catch (error) {
        console.log(error.message)
        return res.status(401).json({msg: "Invalid | Expired Token"});
    }
}
export default activateAccount;