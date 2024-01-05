import { LayoutProps } from '@/interfaces';
import authService from '@/services/authService';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function AuthLayout({ children }: LayoutProps) {
  const router = useRouter()

  useEffect(() => {
    if (authService.isAuthenticated()) {
      router.push('/');
    }
  }, [router]);

  return <>{children}</>;
}
