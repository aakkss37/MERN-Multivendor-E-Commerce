import app from "./app.js";

// UNCAUGHT EXCEPTION
process.on("uncaughtException", (error) => {
	console.log("Error: ", error.message);
	console.log("Shutting down the server for handling uncought exception");
});

// ENV CONFIGURATION
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const CONNECTION_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.yxvhdcp.mongodb.net/?retryWrites=true&w=majority`;
// DATABASE CONNECTION
import mongooseConnection from "./db/db.js";
mongooseConnection(CONNECTION_URL);


const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (error) => {
	console.log("Shutting down the server for ", error.message);
	console.log("Shutting down the server for unhandled promise rejection.");
	server.close(() => {
		process.exit(1);
	});
});