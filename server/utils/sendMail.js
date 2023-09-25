import nodemailer from "nodemailer";
import ejs from "ejs";
import fs from "fs/promises"; // Need to use a file system module like 'fs/promises' or 'fs.promises' based on your Node.js version



/**
 * Sends an email using Nodemailer.
 *
 * @async
 * @function sentMail
 * @param {Object} options - Options for sending the email.
 * @param {string} options.email - The recipient's email address.
 * @param {string} options.subject - The subject of the email.
 * @param {string} options.text - The text content of the email.
 * @returns {Promise<void>} - A promise that resolves when the email is sent successfully.
 * @throws {Error} - Throws an error if there is an issue sending the email.
 */
const sentMail = async (options) => {
    try {
        // !SEND EMAIL FROM TEST ACCOUNT
        // const testAccount = await nodemailer.createTestAccount()
        // const transporter = nodemailer.createTransport({
        //     host: "smtp.ethereal.email",
        //     port: 587,
        //     secure: false,
        //     auth: {
        //         user: testAccount.user,
        //         pass: testAccount.pass,
        //     }
        // });

        // Read the EJS template file
        const templateContent = await fs.readFile(options.templatePath, "utf-8");
        // Render the EJS template with the provided data
        const renderedHtml = ejs.render(templateContent, {
            activationURL: options.activationURL,
            displayName: options.displayName,
        });

        // !SEND EMAIL FORM GMAIL ACCOUNT
        const transporter = nodemailer.createTransport({
            port: process.env.SMTP_PORT,
            secure: true,
            service: "gmail",
            auth: {
                user: process.env.SMTP_MAIL,
                pass: process.env.SMTP_PASSWORD,
            }
        });

    
        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: options.email,
            subject: options.subject,
            html: renderedHtml, // Use 'html' instead of 'text' to send HTML content
        };
    
        const info = await transporter.sendMail(mailOptions);
        console.log(info);
        console.log(nodemailer.getTestMessageUrl(info))
    } catch (error) {
        console.log(error)
    }
}


export default sentMail;