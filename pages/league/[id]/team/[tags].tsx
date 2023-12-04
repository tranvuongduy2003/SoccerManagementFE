/* eslint-disable react-hooks/exhaustive-deps */
'use client';

//chakra-ui
import { Text } from '@chakra-ui/react';

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

const Team: NextPageWithLayout = () => {
  const route = useRouter();

  const { data: teams } = useQuery<ITeam[]>({
    queryKey: ['teams', route.query.tags],
    queryFn: () => getTeamByTags(route.query.tags),
    select: data => data
  });

  return (
    <>
      {!teams ? (
        <Text mt="100">Updating...</Text>
      ) : (
        <TeamComponent teams={teams} />
      )}
    </>
  );
};

Team.Layout = MainLayout;

export default Team;
