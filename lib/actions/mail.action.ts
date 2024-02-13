"use server";
import nodemailer from "nodemailer";

interface IMail {
  to: string;
  name: string;
  subject: string;
  body: string;
}
const MY_INBOX_MAIL = "mrigankagogoiofficial@gmail.com";

export async function sendMail({ body, name, subject, to }: IMail) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: MY_INBOX_MAIL,
      subject,
      html: `<h3>Name: ${name}</h3>\n
        <h4>Email: ${to}</h4>\n
        <h4>Message: ${body}</h4>
      `,
    });
  } catch (error) {
    console.log(error);
  }
}
