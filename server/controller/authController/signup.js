import path from "path";
import User from "../../model/userSchema.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs"
import sentMail from "../../utils/sendMail.js";
import { createActivationToken } from "./createActivationToken.js";


const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const signup = async(req, res, next) => {
    console.log(req.body);
    const { displayName, email, password } = req.body;
    try {
        const foundEmail = await User.findOne({ email });
        if (foundEmail) {
            // DELETING THE DISPLAY PIC FROM THE STORAGE IF EMAIL ALREADY EXIST
            // BECAUSE DISPLAY PIC WILL GET STORED BEFORE ANY VALIDATION AS 
            // MULTER MIDDLEWARE WILL RUN FIRST AND THEN THIS CONTROLLER WILL RUN.
            if(req?.file){
                const filename = req.file.filename;
                const filePath = `multerStorage/${filename}`
                fs.unlink(filePath, (err) => {console.log(err)})
            }

            // return next(new ErrorHandler("User already exist", 409));
            res.status(409).json({ msg: "User already exist." });

        } else if (!passwordPattern.test(password)) {
            res.status(400).json({
                msg: "Password must contain minimum 8 letter password, with at least a symbol, upper and lower case letters and a number",
            });
        } else {
            let fileURL = ""
            console.log()
            if (req?.file?.filename) {
                const filename = req.file.filename;
                fileURL = path.join(filename);
            }
            const newAccountData = {
                name: displayName,
                email: email,
                password: password,
                avatar: {
                    public_id: uuidv4() + fileURL,
                    url: fileURL,
                },
            };

            const activationToken = createActivationToken(newAccountData)
            const activationURL = `http://localhost:5173/activate-account/?token=${activationToken}`
            try {
                await sentMail({
                    email: email,
                    subject: "Activate your account.",
                    templatePath: "../server/views/ActivationMail/activateAccount.ejs", // Use templatePath instead of emailTemplate
                    displayName,
                    activationURL,
                })
                res.status(200).json({success: true, msg: "Activation email sent."})                
            } catch (error) {
                console.log(error)
                res.status(500).json({msg: "Internal server error."})
            }
            // const newUser = await User.create(newAccountData);
            // res.status(201).json({ success: true, newUser });
        }
    } catch (error) {
        console.log("error ======>>>>>", error);
        res.status(500).json({ msg: "Internal server error", error: error });
    }
};
export default signup;