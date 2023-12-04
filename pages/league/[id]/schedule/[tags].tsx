'use client';

import { useEffect } from 'react';

//layout interface
import MainLayout from '@/components/layout/main';
import { IRound, NextPageWithLayout } from '@/interfaces';

//chakra-ui
import { Text } from '@chakra-ui/react';

//component
import ScheduleComponent from '@/components/main/components/schedule';

//api
import { useQuery } from '@tanstack/react-query';
import { getRoundByTags } from '@/apis/round.api';

//route
import { useRouter } from 'next/router';

//store
import { useRoundStore } from '@/stores';

const Schedule: NextPageWithLayout = () => {
  const route = useRouter();
  const round = useRoundStore(state => state.setRounds);

  const { data: rounds } = useQuery<IRound[]>({
    queryKey: ['round', route.query.tags],
    queryFn: () => getRoundByTags(route.query.tags),
    select: data => data
  });

  useEffect(() => {
    if (rounds) {
      round(rounds);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rounds]);

  return (
    <>{!rounds ? <Text mt="100">Updating...</Text> : <ScheduleComponent />}</>
  );
};

Schedule.Layout = MainLayout;

export default Schedule;
