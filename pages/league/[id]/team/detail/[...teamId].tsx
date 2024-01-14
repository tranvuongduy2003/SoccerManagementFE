'use client';

//layout
import MainLayout from '@/components/layout/main';
import { NextPageWithLayout } from '@/interfaces';

//component
import DetailTeamComponent from '@/components/main/components/team/detail';

const TeamDetail: NextPageWithLayout = () => {
  return <DetailTeamComponent />;
};

TeamDetail.Layout = MainLayout;

export default TeamDetail;
