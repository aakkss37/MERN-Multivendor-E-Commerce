import jwt from "jsonwebtoken";
import User from "../../model/userSchema.js";
import sentToken from "../../utils/jwtToken.js";

const activateAccount = async (req, res, next) => {
    try {
        const { token } = req.query;
        const newUser = jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION_SECRET_KEY);
        if(newUser) {
            const {name, email, password, avatar} = newUser;
    
            const activatedUser = await User.create({name, email, password, avatar});
            activatedUser.save();
            
            sentToken(newUser, 201, res, "Account activated successfully");
        }


    } catch (error) {
        console.log(error.message)
        res.status(498).json({msg: "Invalid Token"});
    }
}
export default activateAccount;