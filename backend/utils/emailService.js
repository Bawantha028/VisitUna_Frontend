const nodemailer = require("nodemailer");

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send contact form email to admin
exports.sendContactEmail = async (contactData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"VisitUNA Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission from ${contactData.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
          .header { background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #0ea5e9; margin-bottom: 5px; }
          .value { padding: 10px; background: #f0f9ff; border-left: 3px solid #0ea5e9; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🌴 New Contact Form Submission</h1>
            <p>VisitUNA Tourism Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${contactData.name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${contactData.email}">${contactData.email}</a></div>
            </div>
            ${
              contactData.phone
                ? `
            <div class="field">
              <div class="label">📱 Phone:</div>
              <div class="value"><a href="tel:${contactData.phone}">${contactData.phone}</a></div>
            </div>
            `
                : ""
            }
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="value">${contactData.message}</div>
            </div>
            <div class="field">
              <div class="label">📅 Received:</div>
              <div class="value">${new Date().toLocaleString()}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the VisitUNA contact form.</p>
            <p>Please respond to the customer at: ${contactData.email}</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Contact email sent to admin");
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    throw error;
  }
};

// Send auto-reply to user
exports.sendContactAutoReply = async (contactData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"VisitUNA" <${process.env.EMAIL_USER}>`,
    to: contactData.email,
    subject: "Thank you for contacting VisitUNA!",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
          .header { background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .button { display: inline-block; padding: 12px 30px; background: #0ea5e9; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🌴 Thank You for Contacting Us!</h1>
          </div>
          <div class="content">
            <p>Dear ${contactData.name},</p>
            <p>Thank you for reaching out to VisitUNA! We have received your message and our team will get back to you within 24 hours.</p>
            <p><strong>Your message:</strong></p>
            <p style="padding: 15px; background: #f0f9ff; border-left: 3px solid #0ea5e9;">${contactData.message}</p>
            <p>In the meantime, feel free to explore our website to discover more about the beautiful beaches, attractions, and activities that Unawatuna has to offer.</p>
            <a href="${process.env.CLIENT_URL}" class="button">Visit Our Website</a>
          </div>
          <div class="footer">
            <p>Best regards,<br>The VisitUNA Team</p>
            <p>📧 ${process.env.ADMIN_EMAIL} | 📱 +94 91 222 4433</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Auto-reply sent to user");
  } catch (error) {
    console.error("❌ Error sending auto-reply:", error);
    // Don't throw error for auto-reply failure
  }
};

// Send welcome email
exports.sendWelcomeEmail = async (user) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"VisitUNA" <${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "Welcome to VisitUNA! 🌴",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
          .header { background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .button { display: inline-block; padding: 12px 30px; background: #0ea5e9; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Welcome to VisitUNA!</h1>
          </div>
          <div class="content">
            <p>Hi ${user.firstName},</p>
            <p>Welcome to the VisitUNA community! We're thrilled to have you join us on this tropical adventure.</p>
            <p>Your account has been successfully created. You can now:</p>
            <ul>
              <li>🎫 Book exciting events and activities</li>
              <li>📸 Explore our stunning photo gallery</li>
              <li>🏖️ Discover hidden gems in Unawatuna</li>
              <li>💌 Receive exclusive travel tips and offers</li>
            </ul>
            <a href="${process.env.CLIENT_URL}/login" class="button">Start Exploring</a>
            <p style="margin-top: 30px;">If you have any questions, feel free to reach out to us anytime!</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Welcome email sent");
  } catch (error) {
    console.error("❌ Error sending welcome email:", error);
  }
};
