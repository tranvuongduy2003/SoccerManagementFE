'use client';
import { useEffect, useState } from 'react';

//chakra-ui
import { List, Flex, Button, Text } from '@chakra-ui/react';

//component
import ProgressBar from '@ramonak/react-progress-bar';

//image
import Image from 'next/image';

//api
import { useQuery } from '@tanstack/react-query';
import { getTeamByTags } from '@/apis';

//route
import { useRouter } from 'next/router';

//interface
import { ITeam } from '@/interfaces';
import SkeletonComponent from '@/components/common/skeleton';

interface BoxTeamProps {
  team: ITeam;
}

const BoxTeam = (props: BoxTeamProps) => {
  const { team } = props;
  return (
    <Flex alignItems="center" shadow="dark-lg" py="16px" flexGrow="1">
      <Flex
        w="30%"
        justifyContent="flex-start"
        alignItems="center"
        gap="20px"
        pl="20px"
      >
        <Image
          src={
            team.flag
              ? team.flag
              : 'https://res.cloudinary.com/dadvtny30/image/upload/v1700848826/Kpe7yYs0NdySRd7jzwHaiYehQnhqz2ks26XFPwus_l3w0a4.jpg'
          }
          alt=""
          width={50}
          height={50}
        />
        <Text>{team.name}</Text>
      </Flex>
      <Flex flexGrow="1" alignItems="center" justifyContent="space-around">
        <ProgressBar width="300px" completed={80} bgColor="#00DFA2" />
        <Button colorScheme="blue">Vote</Button>
      </Flex>
    </Flex>
  );
};

const VoteTeamChampion = () => {
  const route = useRouter();

  const { isLoading, data: teams } = useQuery<ITeam[]>({
    queryKey: ['teams', route.query.tags],
    queryFn: () => getTeamByTags(route.query.tags),
    select: data => data
  });

  if (isLoading) {
    return <SkeletonComponent />;
  }

  return (
    <List spacing={6}>
      {!teams ? (
        <Text mt="100">No data...</Text>
      ) : (
        teams.map((team, index) => <BoxTeam key={index} team={team} />)
      )}
    </List>
  );
};

export default VoteTeamChampion;
