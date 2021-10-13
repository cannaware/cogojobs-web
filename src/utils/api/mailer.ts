const DEFAULT_FROM = process.env.EMAIL_FROM || '"Cogojobs" <info@cogojobs.com>';
const MG_API_URL = `https://api.mailgun.net/v3/${process.env.MG_DOMAIN_NAME}/messages`;

function urlEncodeObject(obj: { [s: string]: any }) {
  return Object.keys(obj)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
    .join('&');
}

export const EMAIL_TEMPLATES = {
  BASE: 'template-base',
};

export function isValidEmail(email: string | undefined): boolean {
  if (!email) return false;
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

export interface EmailData {
  to: string;
  from?: string;
  subject: string;
  text?: string;
  html?: string;
  cc?: string;
  bcc?: string;
  'h-Reply-To'?: string;
  'o:testmode'?: boolean;
  template?: string;
  'h:X-Mailgun-Variables'?: string;
}

export function sendEmail({
  template = EMAIL_TEMPLATES.BASE,
  from = DEFAULT_FROM,
  to,
  subject,
}: EmailData): Promise<Response> {
  const dataUrlEncoded = urlEncodeObject({ from, to, subject, template });
  const authHeader = Buffer.from(`api:${process.env.MG_API_KEY}`).toString('base64');
  const fetchOpts = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': dataUrlEncoded.length.toString(),
    },
    body: dataUrlEncoded,
  };

  return fetch(MG_API_URL, fetchOpts);
}
