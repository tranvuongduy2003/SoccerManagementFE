'use client';

//layout - interface
import MainLayout from '@/components/layout/main';
import { NextPageWithLayout } from '@/interfaces';

//component
import OverallComponent from '@/components/main/components/overall';

const Overall: NextPageWithLayout = () => {
  return <OverallComponent />;
};

Overall.Layout = MainLayout;

export default Overall;
