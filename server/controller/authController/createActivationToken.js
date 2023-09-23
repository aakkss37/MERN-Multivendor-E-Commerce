import jwt from "jsonwebtoken"

export const createActivationToken = (user) => {
    return jwt.sign(user, process.env.JWT_ACCOUNT_ACTIVATION_SECRET_KEY, {
        expiresIn: "5m"
    })
}