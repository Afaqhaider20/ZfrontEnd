/* eslint-disable no-undef */
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("Handler function called");
  console.log("Request method:", req.method);
  console.log("Request body:", req.body);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("POST request received");
  const { user_name, user_email, user_phone, user_message } = req.body;
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
  // Create a transporter object using Outlook SMTP with App Password
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Verify connection configuration
    await transporter.verify();
    console.log("Server is ready to take messages");

    // Email options
    let mailOptions = {
      from: process.env.EMAIL_USER, // Must match your Outlook email
      replyTo: user_email, // User email for replying
      to: process.env.EMAIL_TO, // Your receiving email
      subject: "New message from contact form",
      text: `
        Name: ${user_name}
        Email: ${user_email}
        Phone: ${user_phone}
        Message: ${user_message}
      `,
      html: `
        <h1>New message from contact form</h1>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone}</p>
        <p><strong>Message:</strong> ${user_message}</p>
      `,
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email: ", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
}
