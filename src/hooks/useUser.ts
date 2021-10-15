import { useEffect, useState } from 'react';

import { IUser } from '@/interfaces/users';

type UseUserProp = {
  username: string;
};

function useUser({ username }: UseUserProp) {
  const [data, setData] = useState<IUser | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/users/${username}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [username]);

  return { data, error, loading };
}

export default useUser;
