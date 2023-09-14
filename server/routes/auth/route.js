import express from "express";
import { upload } from "../../middleware/multer.js"
import signup from "../../controller/authController/signup.js";

const router = express.Router()

router.post("/signup", upload.single("file"), signup)

export default router;