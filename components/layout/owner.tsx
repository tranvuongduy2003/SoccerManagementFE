import { AuthContext } from '@/contexts/AuthProvider';
import { ERole, LayoutProps } from '@/interfaces';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export function OwnerLayout({ children }: LayoutProps) {
  const authContext = useContext(AuthContext);

  const { loggedIn, getUser } = authContext!;
  const user = getUser();

  const router = useRouter();

  useEffect(() => {
    if (
      !loggedIn ||
      (user?.role !== ERole.OWNER && user?.role !== ERole.ADMIN)
    ) {
      router.push('/auth/signin');
    }
  }, [router, loggedIn, user]);

  return <div>{children}</div>;
}
