import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use("/", express.static("multerStorage"));
app.set('view engine', 'ejs');

// CORS HANDLING
import cors from "cors";
import corsOption, { whiteList } from "./config/cors.js";
app.use(cors(corsOption));
// Enable CORS for a specific origin
app.use((req, res, next) => {
    if (whiteList.includes(req.header.origin)) {
        res.header("Access-Control-Allow-Origin", req.header.origin);
    }
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// ROUTING
import router from "./routes/auth/route.js";
app.use("/auth", router);

// ERROR HANDLING
// app.use(ErrorHandler);

export default app;