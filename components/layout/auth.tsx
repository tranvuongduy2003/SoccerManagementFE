import { AuthContext } from '@/contexts/AuthProvider';
import { LayoutProps } from '@/interfaces';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export function AuthLayout({ children }: LayoutProps) {
  const authContext = useContext(AuthContext);

  const { loggedIn } = authContext!;

  const router = useRouter();

  useEffect(() => {
    if (loggedIn) {
      router.push('/');
    }
  }, [router, loggedIn]);

  return <>{children}</>;
}
