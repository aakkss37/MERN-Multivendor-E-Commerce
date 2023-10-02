import express from "express";
import { upload } from "../../middleware/multer.js"
import signup from "../../controller/AuthController/signup.js";
import activateAccount from "../../controller/authController/activateAccount.js";

const router = express.Router()

router.post("/signup", upload.single("file"), signup)
router.get('/activate-account', activateAccount)

export default router;