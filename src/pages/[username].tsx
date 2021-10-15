import { useRouter } from 'next/router';

import useUser from '@/hooks/useUser';

function Username() {
  const router = useRouter();
  const { username } = router.query;
  const { data: user, error } = useUser({ username: username as string });

  if (error) return <>Error</>;
  if (!user) return <>Loading...</>;

  return <h1>Username: {user.name}</h1>;
}

export default Username;
