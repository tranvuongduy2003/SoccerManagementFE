import { LayoutProps } from '@/types';
import { Navbar } from '../common';

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
