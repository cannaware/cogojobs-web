import type { NextApiRequest, NextApiResponse } from 'next';

import type { IUser } from '@/interfaces/users';

type ApiResponseError = {
  message: string;
};

function handler(req: NextApiRequest, res: NextApiResponse<IUser | ApiResponseError>) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username } = req.query;

  if (!username) {
    return res.status(404).json({ message: 'User not found' });
  }

  return res
    .status(200)
    .json({ username: username as string, slug: username as string, name: 'Mario Colque' });
}

export default handler;
