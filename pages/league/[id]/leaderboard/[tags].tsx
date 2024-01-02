'use client';

//layout
import MainLayout from '@/components/layout/main';
import { NextPageWithLayout, IStatisticalTeam } from '@/interfaces';

//component
import LeaderBoardComponent from '@/components/main/components/leaderboard';

//api
import { useQuery } from '@tanstack/react-query';
import { getStatisticalTeamsByTags } from '@/apis';

//route
import { useRouter } from 'next/router';
import SkeletonComponent from '@/components/common/skeleton';

const LeaderBoard: NextPageWithLayout = () => {
  const route = useRouter();

  const { data: statisticalTeams, isLoading } = useQuery<IStatisticalTeam[]>({
    queryKey: ['statisticalTeams', route.query.tags],
    queryFn: () => getStatisticalTeamsByTags(route.query.tags),
    select: data => data.sort((a, b) => b.point! - a.point!)
  });

  return isLoading ? (
    <SkeletonComponent />
  ) : (
    <LeaderBoardComponent statisticalTeams={statisticalTeams!} />
  );
};

LeaderBoard.Layout = MainLayout;

export default LeaderBoard;
