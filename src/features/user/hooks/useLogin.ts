import { useMemo } from 'react';
import { AxiosInstance } from 'axios';
import { useSession } from 'next-auth/react';

export function useLogin(): AxiosInstance | null {
  const { data: session } = useSession();

  const client = useMemo(() => {
    if (!session?.user?.token) {
      return null;
    }

  }, [session?.user?.token]);

  return client || null;
}
