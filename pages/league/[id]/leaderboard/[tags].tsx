'use client';

//layout
import MainLayout from '@/components/layout/main';
import { NextPageWithLayout, IStatisticalTeam } from '@/interfaces';

//chakra-ui
import { Text } from '@chakra-ui/react';

//component
import LeaderBoardComponent from '@/components/main/components/leaderboard';

//api
import { useQuery } from '@tanstack/react-query';
import { getStatisticalTeamsByTags } from '@/apis';
import { useEffect, useState } from 'react';

//route
import { useRouter } from 'next/router';

const LeaderBoard: NextPageWithLayout = () => {
  const route = useRouter();

  const { data: statisticalTeams } = useQuery<IStatisticalTeam[]>({
    queryKey: ['statisticalTeams', route.query.tags],
    queryFn: () => getStatisticalTeamsByTags(route.query.tags),
    select: data => data.sort((a, b) => a.rank! - b.rank!)  
  });

  return (
    <>
      {statisticalTeams ? (
        <LeaderBoardComponent statisticalTeams={statisticalTeams} />
      ) : (
        <Text>Updating...</Text>
      )}
    </>
  );
};

LeaderBoard.Layout = MainLayout;

export default LeaderBoard;
