import { LayoutProps } from '@/interfaces';
import authService from '@/services/authService';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter();

  useEffect(() => {
    if (!authService.isAuthenticated() || !authService.isAdmin()) {
      router.push('/auth/signin');
    }
  }, [router]);

  return <div>{children}</div>;
}
