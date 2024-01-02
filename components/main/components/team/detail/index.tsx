//chakra-ui
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Heading,
  Text,
  Avatar
} from '@chakra-ui/react';

//component
import Matches from './Matches';
import Member from './Member';

//image
import Image from 'next/image';

//store
import { useTeamStore } from '@/stores/useTeamStore';
const DetailTeamComponent = () => {
  const team = useTeamStore(state => state.team);

  const matches = team.matches.sort(function (a, b) {
    const timeA = new Date(a.time);
    const timeB = new Date(b.time);
    return timeB.getTime() - timeA.getTime();
  });

  return (
    <Box mt="100px">
      <Flex w="full" bg="gray.200" py="3" rounded="10px">
        <Box px="30px">
          <Image src={team.flag} alt="" width={200} height={200} />
        </Box>
        <Flex flexDirection="column" justifyContent="space-around">
          <Heading color="#00A9FF">{team.name}</Heading>
          <Flex gap="40px">
            <Box>
              <Text color="gray.400">Respresentative</Text>
              <Flex alignItems="center" gap="10px">
                <Avatar src={team.coach.avatar} />
                <Text>{team.coach.name}</Text>
              </Flex>
            </Box>
            <Box>
              <Text color="gray.400">Team link</Text>
              <Text>Not linked </Text>
            </Box>
            <Box>
              <Text color="gray.400">Matches played</Text>
              <Text>{team.statistical.matches} match</Text>
            </Box>
            <Box>
              <Text color="gray.400">Wins - Draws - Losses</Text>
              <Flex>
                <Text color="green.400"> {team.statistical.wins} </Text> -
                <Text> {team.statistical.draws} </Text> -
                <Text color="red.400"> {team.statistical.losses} </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Tabs p="20px" colorScheme="purple" variant="enclosed" align="center">
        <TabList>
          <Tab
            _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}
          >
            Match
          </Tab>
          <Tab
            _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}
          >
            Player
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Matches matches={matches} />
          </TabPanel>
          <TabPanel>
            <Member players={team.players} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DetailTeamComponent;
