'use client';

//chakra-ui
import { Button, Center, Flex, List, Text } from '@chakra-ui/react';

//component
import ProgressBar from '@ramonak/react-progress-bar';

//image
import Image from 'next/image';

//api
import { getTeamByTags } from '@/apis';
import { useQuery } from '@tanstack/react-query';

//route
import { useRouter } from 'next/router';

//interface
import NotData from '@/components/common/notData';
import SkeletonComponent from '@/components/common/skeleton';
import { ITeam } from '@/interfaces';

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

const VoteTeamFairPlay = () => {
  const route = useRouter();

  const { data: teams, isLoading } = useQuery<ITeam[]>({
    queryKey: ['teams', route.query.tags],
    queryFn: () => getTeamByTags(route.query.tags!),
    select: data => data
  });

  return (
    <List spacing={6}>
      {isLoading ? (
        <SkeletonComponent />
      ) : teams?.length ? (
        teams.map((team, index) => <BoxTeam key={index} team={team} />)
      ) : (
        <Center>
          <NotData text="data team fairplay" />
        </Center>
      )}
    </List>
  );
};

export default VoteTeamFairPlay;
