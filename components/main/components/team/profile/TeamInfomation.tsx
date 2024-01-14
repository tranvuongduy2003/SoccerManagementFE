import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';

import { FaUserTie } from 'react-icons/fa';

import { ICoach, IPlayer } from '@/interfaces';
import Image from 'next/image';

interface TeamInformationProps {
  flag: string;
  name: string;
  coach: ICoach;
  players: IPlayer[];
}
const TeamInformation = (props: TeamInformationProps) => {
  const { flag, name, coach, players } = props;
  return (
    <>
      <Heading textAlign="center" size="lg">
        Team information
      </Heading>
      <Text textAlign="center" mb={6}>
        ({name})
      </Text>
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex flex="2">
            <Image src={flag} alt="" width={250} height={250} />
          </Flex>
          <Flex direction="column" flexGrow="2" gap="4">
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <Flex alignItems="center" gap="10px">
                <Icon as={FaUserTie} />
                <Text>Head Coach</Text>
              </Flex>
              <Box
                bgColor="gray.400"
                color="white"
                width="full"
                py="4"
                rounded="md"
                pl="10px"
              >
                {coach?.name || ''}
              </Box>
            </Flex>
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <Flex alignItems="center" gap="10px">
                <Icon as={FaUserTie} />
                <Text>Captain</Text>
              </Flex>
              <Box
                bgColor="gray.400"
                color="white"
                width="full"
                py="4"
                rounded="md"
                pl="10px"
              >
                {players.map(player => {
                  return player.captain && player.name;
                })}
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-around">
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Text fontStyle="italic">Jersey 1</Text>
            <Image
              src="https://myleague.vn/content/images/team/shirt.png"
              alt=""
              width={150}
              height={150}
              className="border border-solid border-gray p-3"
            />
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Text fontStyle="italic">Jersey 2</Text>
            <Image
              src="https://myleague.vn/content/images/team/shirt.png"
              alt=""
              width={150}
              height={150}
              className="border border-solid border-gray p-3"
            />
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Text fontStyle="italic">Jersey 3</Text>
            <Image
              src="https://myleague.vn/content/images/team/shirt.png"
              alt=""
              width={150}
              height={150}
              className="border border-solid border-gray p-3"
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default TeamInformation;
