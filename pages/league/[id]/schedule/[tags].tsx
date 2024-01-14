'use client';

import { useEffect } from 'react';

//layout interface
import MainLayout from '@/components/layout/main';
import { IRound, NextPageWithLayout } from '@/interfaces';

//chakra-ui
import { Box } from '@chakra-ui/react';

//component
import SkeletonComponent from '@/components/common/skeleton';
import ScheduleComponent from '@/components/main/components/schedule';

//api
import { getRoundByTags } from '@/apis';
import { useQuery } from '@tanstack/react-query';

//route
import { useRouter } from 'next/router';

//store
import { useRoundStore } from '@/stores';

const Schedule: NextPageWithLayout = () => {
  const route = useRouter();
  const round = useRoundStore(state => state.setRounds);

  const { isLoading, data: rounds } = useQuery<IRound[]>({
    queryKey: ['round', route.query.tags],
    queryFn: () => getRoundByTags(route.query.tags!),
    select: data => data
  });

  useEffect(() => {
    if (rounds) {
      round(rounds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rounds]);

  return (
    <>
      {isLoading ? (
        <Box mt="100px">
          <SkeletonComponent />
        </Box>
      ) : (
        <ScheduleComponent />
      )}
    </>
  );
};

Schedule.Layout = MainLayout;

export default Schedule;
