'use client'

import { LayoutProps } from '@/interfaces';
import { Navbar } from '../landing-page';

// import dynamic from 'next/dynamic';
// const Navbar = dynamic(() => import('../../components/landing-page/Navbar'), {
//   ssr: false
// });

export function HomeLayout({ children }: LayoutProps) {
  return (
    <div className="font-fontLanding bg-body-color min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
