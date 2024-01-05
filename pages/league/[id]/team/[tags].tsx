/* eslint-disable react-hooks/exhaustive-deps */
'use client';

//chakra-ui
import { Box, Text } from '@chakra-ui/react';

//layout
import MainLayout from '@/components/layout/main';
import { ITeam, NextPageWithLayout } from '@/interfaces';

//component
import TeamComponent from '@/components/main/components/team';

//api
import { useQuery } from '@tanstack/react-query';
import { getTeamByTags } from '@/apis';

//route
import { useRouter } from 'next/router';
import SkeletonComponent from '@/components/common/skeleton';

const Team: NextPageWithLayout = () => {
  const route = useRouter();

  const { data: teams, isLoading } = useQuery<ITeam[]>({
    queryKey: ['teams', route.query.tags],
    queryFn: () => getTeamByTags(route.query.tags),
    select: data => data
  });

  return (
    <>
      {isLoading ? (
        <Box mt="100px">
          <SkeletonComponent />
        </Box>
      ) : (
        <TeamComponent teams={teams!} />
      )}
    </>
  );
};

Team.Layout = MainLayout;

export default Team;
