import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express()
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());

import ErrorHandler from "./utils/ErrorHandler.js";

// CORS HANDLING
import cors from "cors"
import corsOption, { whiteList } from "./config/cors.js";
app.use(cors(corsOption));
// Enable CORS for a specific origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', whiteList);
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

// ROUTING
import router from "./routes/auth/route.js";
app.use("/", router)

// ERROR HANDLING
app.use(ErrorHandler);


export default app;