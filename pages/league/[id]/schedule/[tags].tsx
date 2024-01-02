'use client';

import { useEffect } from 'react';

//layout interface
import MainLayout from '@/components/layout/main';
import { IRound, NextPageWithLayout } from '@/interfaces';

//chakra-ui
import { Text } from '@chakra-ui/react';

//component
import ScheduleComponent from '@/components/main/components/schedule';
import SkeletonComponent from '@/components/common/skeleton';

//api
import { useQuery } from '@tanstack/react-query';
import { getRoundByTags } from '@/apis';

//route
import { useRouter } from 'next/router';

//store
import { useRoundStore } from '@/stores';

const Schedule: NextPageWithLayout = () => {
  const route = useRouter();
  const round = useRoundStore(state => state.setRounds);

  const { isLoading, data: rounds } = useQuery<IRound[]>({
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

  return <>{isLoading ? <SkeletonComponent /> : <ScheduleComponent />}</>;
};

Schedule.Layout = MainLayout;

export default Schedule;
