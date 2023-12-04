'use client';
//chakra-ui
import { Text } from '@chakra-ui/react';

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
import { useQuery } from '@tanstack/react-query';
import { getStatisticalTeamsByTags } from '@/apis';
import { getStatisticalPlayersByTags } from '@/apis/statisticalPlayer.api';

//route
import { useRouter } from 'next/router';

const Statistic: NextPageWithLayout = () => {
  const route = useRouter();

  const { data: statisticalTeams } = useQuery<IStatisticalTeam[]>({
    queryKey: ['statisticalTeams', route.query.tags],
    queryFn: () => getStatisticalTeamsByTags(route.query.tags),
    select: data => data
  });

  const { data: statisticalPlayers } = useQuery<IStatisticalPLayer[]>({
    queryKey: ['statisticalPlayers', route.query.tags],
    queryFn: () => getStatisticalPlayersByTags(route.query.tags),
    select: data => data.sort((a, b) => b.goals! - a.goals!)
  });

  return statisticalTeams && statisticalPlayers ? (
    <StatisticComponent
      statisticalTeams={statisticalTeams!}
      statisticalPlayers={statisticalPlayers!}
    />
  ) : (
    <Text>Updating</Text>
  );
};

Statistic.Layout = MainLayout;

export default Statistic;
