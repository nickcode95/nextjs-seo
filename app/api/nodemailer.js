const nodemailer = require('nodemailer');

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    console.log(req.body)

    const { fullName, email, company, message } = req.body;


  let transporter = nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: "587",
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
   auth: {
    user: "[enter-email]",
    pass: process.env.PASS_WORD
    },
  });

  try {
    await transporter.sendMail({
      from: "[enter-email]",
      to: "[enter-email]",
      subject: `Contact form submission from ${fullName}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}