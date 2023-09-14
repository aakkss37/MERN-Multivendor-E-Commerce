import multer from "multer";

/**
 * Configuration for handling file uploads using Multer.
 * @type {multer.diskStorage}
 */
const storage = multer.diskStorage({
    /**
     * Determines the directory where uploaded files will be stored.
     * @param {Express.Request} req - The Express request object.
     * @param {Express.Response} res - The Express response object.
     * @param {Function} cb - The callback function.
     */
    destination: (req, res, cb) => {
        // Specify the destination directory for storing uploaded files.
        cb(null, "multerStorage/");
    },
    /**
     * Generates the filename for uploaded files.
     * @param {Express.Request} req - The Express request object.
     * @param {Express.Multer.File} file - Information about the uploaded file.
     * @param {Function} cb - The callback function.
     */
    filename: (req, file, cb) => {
        // Generate a unique suffix based on the current timestamp and a random number.
        const uniqueSuffix = Date.now() + "_" + Math.random() * 1e9;

        // Extract the original filename and remove the file extension.
        const filename = file.originalname.split(".")[0];

        // Construct the final filename with a unique suffix and a ".png" extension.
        const finalFilename = filename + "_" + uniqueSuffix + ".png";

        // Callback with the constructed filename.
        cb(null, finalFilename);
    }
});

/**
 * Middleware for handling file uploads using Multer with a specified storage configuration.
 * @type {multer.Multer}
 */
export const upload = multer({ storage });