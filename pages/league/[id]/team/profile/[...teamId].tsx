'use client';

//layout
import MainLayout from '@/components/layout/main';
import { NextPageWithLayout } from '@/interfaces';

//component
import ProfileTeamComponent from '@/components/main/components/team/profile';

const TeamProfile: NextPageWithLayout = () => {
  return <ProfileTeamComponent />;
};

TeamProfile.Layout = MainLayout;

export default TeamProfile;
