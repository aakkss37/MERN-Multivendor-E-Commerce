import express from "express";
import { upload } from "../../middleware/multer.js"
import signup from "../../controller/AuthController/signup.js";
import activateAccount from "../../controller/authController/activateAccount.js";
import login from "../../controller/authController/login.js";
import { validateCookiesAndGetUser } from "../../controller/authController/validateCookies.js";
import { isAuthenticated } from "../../middleware/Auth.js";

const router = express.Router()

router.post("/login", login)
router.post("/signup", upload.single("file"), signup)
router.get('/activate-account', activateAccount)
router.get("/validate-cookies", isAuthenticated, validateCookiesAndGetUser)

export default router;