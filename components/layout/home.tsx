import { LayoutProps } from '@/interfaces';
import { Navbar } from '../landing-page';

export function HomeLayout({ children }: LayoutProps) {
  return (
    <div className="font-fontLanding bg-body-color min-h-screen">
      <Navbar />
      {children}
    </div>  
  );
}
