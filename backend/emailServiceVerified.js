const nodemailer = require('nodemailer');

/**
 * @param {string} recipientName - The recipient's name.
 * @returns {string} - The HTML content of the email.
 */
function verifiedEmail(recipientName) {
  return `
      <main style="margin: 0; padding: 0; overflow-x: hidden; font-family: Arial, sans-serif;">
          <img src="https://res.cloudinary.com/drrz1wz3s/image/upload/v1737905331/procom_header_kgr95b.png" 
              style="max-width: 100%; height: auto; display: block; margin: 0 auto; border: none; padding: 0;" 
              alt="Procom 2025 logo">

          <header style="text-align: center; padding: 20px;">
              <h1>PROCOM 2025 Invitation</h1>
          </header>

          <section style="max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6;">
              <p>Dear Team  ${recipientName} Leader,</p>

              <p>Your payment has been successfully verified. On behalf of the entire <strong>PROCOM 2025</strong> team, we want to express our sincere appreciation for your participation in this year's event. Your enthusiasm and support are vital as we prepare for what promises to be an extraordinary experience.</p>

              <p>As a token of our gratitude, we have prepared a special <a href="https://www.canva.com/design/DAGeQish_8k/LBZoxNQCGJzGX5siTOBwiw/view?utm_content=DAGeQish_8k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" target="_blank">Canva template</a> designed for you to customize with your name and picture. We would be honored if you could share this template on your social media platforms, including LinkedIn, to showcase your excitement for <strong>PROCOM 2025</strong>.</p>

              <h2>Suggested LinkedIn Caption:</h2>
              <blockquote style="background: #f8f8f8; padding: 15px; border-left: 5px solid #007bff; font-style: italic;">
                  <p>
                      "I am eagerly anticipating <strong>PROCOM 2025</strong>, where we make IT happen! 
                      Heartfelt thanks to the PROCOM team for orchestrating what promises to be an amazing event. 
                      I am thrilled at the prospect of being a part of this unforgettable experience and eagerly 
                      anticipate the opportunities it will unfold for me. <br>
                      <strong>#PROCOM2025 #WeMakeITHappen</strong>"
                  </p>
              </blockquote>

              <p>Your anticipation and support are crucial to the success of <strong>PROCOM 2025</strong>, and we look forward to sharing this incredible journey with you. We can't wait for the event to unfold and to see your posts as we collectively build the memories of <strong>PROCOM 2025</strong> together!</p>

              <p>Best regards,<br><strong>PROCOM 2025 Team</strong></p>
          </section>
      </main>
  `;
}




/**
 * @param {string} recipientEmail
 * @param {string} recipientName 
 * @returns {Promise<void>}
 */
const sendEmailVerified = async (recipientEmail,recipientName) => {
  const senderEmail = 'procom.net@nu.edu.pk';
  const appPassword =  process.env.APP_PASSWORD;
  const subject = 'PROCOM \'25 Invitation';
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: appPassword,
      },
    });

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: subject,
      html: verifiedEmail(recipientName),
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {sendEmailVerified};