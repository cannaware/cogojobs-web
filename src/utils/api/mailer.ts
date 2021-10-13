import nodemailer from 'nodemailer';
import mailgunTransport from 'nodemailer-mailgun-transport';

const DEFAULT_FROM = process.env.EMAIL_FROM || '"Cogojobs" <info@cogojobs.com>';

const transportOptions = {
  auth: {
    api_key: process.env.MG_API_KEY!,
    domain: process.env.MG_DOMAIN_NAME!,
  },
};

// INFO: set default transporter
const transporter = nodemailer.createTransport(mailgunTransport(transportOptions));

export const EMAIL_TEMPLATES = {
  BASE: 'template-base',
};

export function isValidEmail(email: string | undefined): boolean {
  if (!email) return false;
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

export type EmailData = {
  from?: string;
  to: string[];
  subject: string;
  template: string;
};

export async function sendEmail({ from = DEFAULT_FROM, to, subject, template }: EmailData) {
  const mailOptions = {
    from,
    to: to.join(', '),
    subject,
    template,
  };
  const response = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', response.messageId);
  return response;
}
