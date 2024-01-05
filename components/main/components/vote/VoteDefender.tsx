'use client';
import { useEffect, useState } from 'react';

//chakra-ui
import { List, Flex, Button, Text, Center } from '@chakra-ui/react';

//component
import ProgressBar from '@ramonak/react-progress-bar';

//image
import Image from 'next/image';
import playerDefault from '@/public/images/team/playerDefault.png';

//api
import { useQuery } from '@tanstack/react-query';
import { getPlayerByTagsAndPosition } from '@/apis';

//route
import { useRouter } from 'next/router';

//interface
import { IPlayer } from '@/interfaces';
import SkeletonComponent from '@/components/common/skeleton';
import NotData from '@/components/common/notData';

interface BoxUserProps {
  player: IPlayer;
}
const BoxUser = (props: BoxUserProps) => {
  const { player } = props;
  return (
    <Flex alignItems="center" shadow="dark-lg" py="16px" flexGrow="1">
      <Flex
        w="40%"
        justifyContent="flex-start"
        alignItems="center"
        gap="20px"
        pl="20px"
      >
        <Image
          src={player.avatar ? player.avatar : playerDefault}
          alt=""
          width={50}
          height={50}
        />
        <Text>{player.name}</Text>
        <Text>({player.number})</Text>
      </Flex>
      <Flex flexGrow="1" alignItems="center" justifyContent="space-around">
        <ProgressBar width="300px" completed={80} bgColor="#00DFA2" />
        <Button colorScheme="blue">Vote</Button>
      </Flex>
    </Flex>
  );
};

const VoteDefender = () => {
  const route = useRouter();

  const { data: players, isLoading } = useQuery<IPlayer[]>({
    queryKey: ['players', route.query.tags, 'Defender'],
    queryFn: () => getPlayerByTagsAndPosition(route.query.tags, 'Defender'),
    select: data => data
  });

  return (
    <List spacing={6}>
      {isLoading ? (
        <SkeletonComponent />
      ) : players?.length ? (
        players.map((player, index) => <BoxUser key={index} player={player} />)
      ) : (
        <Center>
          <NotData text='data defender' />
        </Center>
      )}
    </List>
  );
};

export default VoteDefender;