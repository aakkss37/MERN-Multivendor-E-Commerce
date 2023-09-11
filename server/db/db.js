import mongoose from 'mongoose';

/**
 * Set Mongoose option to disable strict query mode.
 */
mongoose.set('strictQuery', false);

/**
 * Function to establish a connection to a MongoDB database using Mongoose.
 * @param {string} CONNECTION_URL - The URL to the MongoDB database.
 */
const mongooseConnection = (CONNECTION_URL) => {
	/**
	 * Options for configuring the Mongoose connection.
	 * @type {object}
	 */
	const connectionOption = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	};

	try {
		// Attempt to connect to the MongoDB database using the provided URL and options.
		mongoose.connect(CONNECTION_URL, connectionOption);

		/**
		 * Event listener for when the Mongoose connection is established.
		 * @event connected
		 */
		mongoose.connection.on('connected', () => {
			console.log('Database: ---> "connected"');
		});

		/**
		 * Event listener for when the Mongoose connection is disconnected.
		 * @event disconnected
		 */
		mongoose.connection.on('disconnected', () => {
			console.log('Database:---> "disconnected"');
		});

		/**
		 * Event listener for Mongoose connection errors.
		 * @event error
		 * @param {Error} error - The error that occurred during the connection.
		 */
		mongoose.connection.on('error', console.error.bind(console, "connection error"));
	} catch (error) {
		console.log("error while connecting to the database ---> ", error.message);
	}
}

export default mongooseConnection;