const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

// Middleware to parse JSON body
app.use(bodyParser.json());

// Serve static files from the Next.js build
app.use(express.static(path.join(__dirname, ".next")));

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like SendGrid, Mailgun, etc.
  auth: {
    user: "jafferali.0741@gmail.com", // Replace with your email
    pass: "iwgm ylpo wpfn jkbq",  // Use app password if 2FA is enabled
  },
});

// Route to handle the form submission and send an email
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: "jafferali.0741@gmail.com", // Replace with your email
    subject: subject || 'Contact Form Message',
    text: `
      You have received a new message from your contact form:
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email Error:", error);
      return res.status(500).json({ error: "Failed to send email." });
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).json({ message: "Email sent successfully." });
    }
  });
});

// Serve the Next.js app's build files (ensure `npm run build` has been run)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, ".next", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
