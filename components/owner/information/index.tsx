import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { FaUserTie } from 'react-icons/fa';

import { ITeam } from '@/interfaces';
import Image from 'next/image';

import teamImg from '@/public/images/common/team.png';

interface TeamInformationProps {
  team: ITeam;
}
const TeamInformation = (props: TeamInformationProps) => {
  const { team } = props;

  console.log(team);
  return (
    <Box>
      <Flex alignItems="center">
        <Flex flexGrow={1}>
          <Image
            src={team.flag ? team.flag : teamImg}
            alt=""
            width={250}
            height={250}
          />
        </Flex>
        <Flex flexGrow={2} gap={10}>
          <Flex flexDirection="column" gap={3} fontWeight={700}>
            <Text>Representative:</Text>
            <Text>Phone number:</Text>
            <Text>Email:</Text>
            <Text>Members:</Text>
            <Text>Level:</Text>
            <Text>Area Activity:</Text>
          </Flex>
          <Flex flexDirection="column" fontStyle="italic" gap={3}>
            <Text>
              {team.representative?.username
                ? team.representative?.username
                : 'No data'}
            </Text>
            <Text>
              {team.representative?.phone
                ? team.representative?.phone
                : 'No data'}
            </Text>
            <Text>
              {team.representative?.email
                ? team.representative?.email
                : 'No data'}
            </Text>
            <Text>{team.players.length} Player</Text>
            <Text>{team.level ? team.level : 'No data'}</Text>
            <Text>{team.area ? team.area : 'No data'}</Text>
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
              {team.coach?.name ? team.coach?.name : 'No data'}
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
              No data
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="space-around" mt="40px">
        {team.uniform.map((uniform, index) => (
          <Flex
            key={index}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontStyle="italic">Jersey 3</Text>
            <Image
              src={
                uniform
                  ? uniform
                  : 'https://myleague.vn/content/images/team/shirt.png'
              }
              alt=""
              width={150}
              height={150}
              className="border border-solid border-gray p-3 w-[150px] h-[150px] object-contain"
            />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default TeamInformation;
