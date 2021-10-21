// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { EMAIL_TEMPLATES, isValidEmail, sendEmail } from '@/utils/api/mailer';

type ResponseMessage = {
  message: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseMessage>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  const mailerResponse = await sendEmail({
    to: email,
    subject: 'Nuevo contacto!',
    template: EMAIL_TEMPLATES.BASE,
  });

  console.log('mailerResponse', mailerResponse.ok, mailerResponse.statusText);
  return res.json({ message: 'Email sent OK' });
}

export default handler;
