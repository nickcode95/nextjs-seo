import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const nodemailer = require('nodemailer');

export async function POST(req) {
  const body = await req.json()

  const { fullName, email, company, number, message } = body;
  console.log(body)

  let transporter = nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: "587",
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.USER_NAME,
      pass: process.env.PASS_WORD
    },
  });

  try {
    console.log(fullName, email, company, number, message)
    await transporter.sendMail({
      from: process.env.USER_NAME,
      to: process.env.RECIPIENT,
      subject: `Contact form submission from ${fullName}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Email: </strong> ${company}</p><br>
        <p><strong>Number: </strong> ${number}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>`
    });

  } catch (error) {
      console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
  }
  return NextResponse.json({ message: "Success: email was sent" })
}
