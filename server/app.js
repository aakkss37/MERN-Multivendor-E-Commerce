import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express()
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(fileUpload(({useTempFiles: true})))

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

// ERROR HANDLING
app.use(ErrorHandler);


export default app;