'use client';

//chakra-ui
import { Flex } from '@chakra-ui/react';

//component
import SkeletonComponent from '@/components/common/skeleton';
import Groups from '@/components/main/components/overall/Group';
import NotData from '@/components/common/notData';

//routes
import { useRouter } from 'next/router';

//api
import { useQuery } from '@tanstack/react-query';
import { getTableByTags } from '@/apis';

//interface
import { ITable } from '@/interfaces';

const GroupStage = () => {
  const route = useRouter();

  const { isLoading, data: tables } = useQuery<ITable[]>({
    queryKey: ['table', route.query.tags],
    queryFn: () => getTableByTags(route.query.tags!),
    select: data => data
  });

  return isLoading ? (
    <SkeletonComponent />
  ) : (
    <Flex direction="column" pt={{ base: '120px', md: '40px' }}>
      {tables?.length ? (
        <Groups groups={tables} />
      ) : (
        <NotData text="data table" />
      )}
    </Flex>
  );
};

export default GroupStage;
