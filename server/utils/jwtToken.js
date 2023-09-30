import jwt  from "jsonwebtoken";

const sentToken = (user, statusCode, res, msg) => {
    const token = jwt.sign(user, process.env.JWT_ACCOUNT_ACTIVATION_SECRET_KEY)
    console.log(token);
    res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        secure: true,
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    })
    .status(statusCode)
    .json({user: user, msg: msg})
}
export default sentToken;