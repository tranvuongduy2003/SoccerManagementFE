'use client';
//chakra-ui
import { Box } from '@chakra-ui/react';

//layout
import MainLayout from '@/components/layout/main';
import {
  IStatisticalPLayer,
  IStatisticalTeam,
  NextPageWithLayout
} from '@/interfaces';

//component
import StatisticComponent from '@/components/main/components/statistic';

//api
import { getStatisticalPlayersByTags, getStatisticalTeamsByTags } from '@/apis';
import { useQuery } from '@tanstack/react-query';

//route
import SkeletonComponent from '@/components/common/skeleton';
import { useRouter } from 'next/router';

const Statistic: NextPageWithLayout = () => {
  const route = useRouter();

  const { data: statisticalTeams, isLoading: isLoadingTeam } = useQuery<
    IStatisticalTeam[]
  >({
    queryKey: ['statisticalTeams', route.query.tags],
    queryFn: () => getStatisticalTeamsByTags(route.query.tags!),
    select: data => data
  });

  const { data: statisticalPlayers, isLoading: isLoadingPlayer } = useQuery<
    IStatisticalPLayer[]
  >({
    queryKey: ['statisticalPlayers', route.query.tags],
    queryFn: () => getStatisticalPlayersByTags(route.query.tags!),
    select: data => data.sort((a, b) => b.goals! - a.goals!)
  });

  return isLoadingTeam || isLoadingPlayer ? (
    <Box mt="100px">
      <SkeletonComponent />
    </Box>
  ) : (
    <StatisticComponent
      statisticalTeams={statisticalTeams!}
      statisticalPlayers={statisticalPlayers!}
    />
  );
};

Statistic.Layout = MainLayout;

export default Statistic;
