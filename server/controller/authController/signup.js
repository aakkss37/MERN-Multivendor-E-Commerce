import path from "path";
import User from "../../model/userSchema.js";
// import ErrorHandler from "../../utils/ErrorHandler.js";
import { v4 as uuidv4 } from "uuid";

const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const signup = async(req, res, next) => {
    console.log("connected");
    console.log(req.body);
    const { displayName, email, password } = req.body;
    try {
        const foundEmail = await User.findOne({ email });
        if (foundEmail) {
            // return next(new ErrorHandler("User already exist", 400));
            res.status(409).json({ msg: "User already exist." });
        } else if (!passwordPattern.test(password)) {
            res.status(400).json({
                msg: "Password must contain a special character, number, uppercase, lowercase and alteast 8 character long.",
            });
        } else {
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
            res.status(201).json({ success: true, newUser });
        }
    } catch (error) {
        console.log("error ======>>>>>", error);
        res.status(500).json({ msg: "Internal server error", error: error });
    }
};
export default signup;