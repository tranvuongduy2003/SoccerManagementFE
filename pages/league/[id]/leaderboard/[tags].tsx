'use client';

//layout
import MainLayout from '@/components/layout/main';
import { IStatisticalTeam, NextPageWithLayout } from '@/interfaces';

//component
import LeaderBoardComponent from '@/components/main/components/leaderboard';

//api
import { getStatisticalTeamsByTags } from '@/apis';
import { useQuery } from '@tanstack/react-query';

//route
import SkeletonComponent from '@/components/common/skeleton';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const LeaderBoard: NextPageWithLayout = () => {
  const route = useRouter();

  const { data: statisticalTeams, isLoading } = useQuery<IStatisticalTeam[]>({
    queryKey: ['statisticalTeams', route.query.tags],
    queryFn: () => getStatisticalTeamsByTags(route.query.tags!),
    select: data => data.sort((a, b) => b.point! - a.point!)
  });

  return isLoading ? (
    <Box mt="100px">
      <SkeletonComponent />
    </Box>
  ) : (
    <LeaderBoardComponent statisticalTeams={statisticalTeams!} />
  );
};

LeaderBoard.Layout = MainLayout;

export default LeaderBoard;
