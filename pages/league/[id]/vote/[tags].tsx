'use client';

//layout
import MainLayout from '@/components/layout/main';
import { NextPageWithLayout } from '@/interfaces';

//component
import VoteComponent from '@/components/main/components/vote';

const Vote: NextPageWithLayout = () => {
  return <VoteComponent />;
};

Vote.Layout = MainLayout;

export default Vote;
