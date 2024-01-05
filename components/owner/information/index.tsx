import { Flex, Heading, Text, Box, Icon } from '@chakra-ui/react';

import { FaUserTie } from 'react-icons/fa';

import Image from 'next/image';
import { ICoach, IPlayer } from '@/interfaces';
import Team from '@/pages/league/[id]/team/[tags]';

import team from '@/public/images/common/team.png';

interface TeamInformationProps {
  flag: string;
  name: string;
  coach: ICoach;
  players: IPlayer[];
}
const TeamInformation = () => {
  //   const { flag, name, coach, players } = props;
  return (
      <Box>
        <Flex alignItems="center">
          <Flex flexGrow={1}>
            <Image src={team} alt="" width={250} height={250} />
          </Flex>
          <Flex flexGrow={2} gap={10}>
            <Flex flexDirection="column" gap={3} fontWeight={700}>
              <Text>Representative:</Text>
              <Text>Phone number:</Text>
              <Text>Email:</Text>
              <Text>Members:</Text>
              <Text>Level:</Text>
              <Text>Average age:</Text>
            </Flex>
            <Flex flexDirection="column" fontStyle='italic' gap={3}>
              <Text>Anh Quoc</Text>
              <Text>07024765814</Text>
              <Text>Not update</Text>
              <Text>0 User</Text>
              <Text>Professional</Text>
              <Text>15-20</Text>
            </Flex>
          </Flex>
          <Flex direction="column" flexGrow={2} gap="4">
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
                {/* {coach.name} */}
                Anh Quoc
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
                {/* {players.map(player => {
                  return player.captain && player.name;
                })} */}
                Anh Quoc
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-around" mt='40px'>
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
  );
};

export default TeamInformation;
