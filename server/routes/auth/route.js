import express from "express";
import { upload } from "../../middleware/multer.js"
import signup from "../../controller/AuthController/signup.js";
import activateAccount from "../../controller/authController/activateAccount.js";
import login from "../../controller/authController/login.js";

const router = express.Router()

router.post("/login", login)
router.post("/signup", upload.single("file"), signup)
router.get('/activate-account', activateAccount)

export default router;