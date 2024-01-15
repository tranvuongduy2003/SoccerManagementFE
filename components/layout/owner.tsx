import { AuthContext } from '@/contexts/AuthProvider';
import { ERole, LayoutProps } from '@/interfaces';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Navbar } from '../landing-page';

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

  return (
    <div className="font-fontLanding bg-body-color min-h-screen relative p-4">
      <Navbar />
      <div className="pt-[120px]">{children}</div>
    </div>
  );
}
