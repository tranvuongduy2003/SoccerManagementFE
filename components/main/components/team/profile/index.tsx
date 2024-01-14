//chakra-ui
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';

//icons
import { FaUserFriends } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdOutlineMedicalInformation } from 'react-icons/md';

//routes
import { useRouter } from 'next/navigation';
import Members from './Member';
import TeamInformation from './TeamInfomation';

//store
import { useTeamStore } from '@/stores/useTeamStore';

const ProfileTeamComponent = () => {
  const route = useRouter();

  const team = useTeamStore(state => state.team);

  return (
    <Box mt="100px">
      <Tabs
        mt="40px"
        p="20px"
        colorScheme="purple"
        variant="enclosed"
        direction="ltr"
        boxShadow="dark-lg"
        minH="600px"
        align="start"
      >
        <Flex>
          <Flex flexDirection="column" gap="10px">
            <Button bg="transparent" onClick={() => route.back()}>
              <Flex w="full" alignItems="center">
                <Icon as={IoMdArrowRoundBack} />
                <Text textAlign="left">Back</Text>
              </Flex>
            </Button>
            <TabList flexDirection="column">
              <Tab
                _selected={{ color: 'white', bg: '#75C2F6' }}
                minW="300px"
                gap="10px"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Icon as={MdOutlineMedicalInformation} />
                Team information
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: '#75C2F6' }}
                alignItems="center"
                gap="10px"
                justifyContent="flex-start"
              >
                <Icon as={FaUserFriends} />
                Member
              </Tab>
            </TabList>
          </Flex>

          <TabPanels>
            <TabPanel>
              <TeamInformation
                flag={team.flag}
                name={team.name || ''}
                coach={team.coach!}
                players={team.players}
              />
            </TabPanel>
            <TabPanel>
              <Heading textAlign="center" size="lg">
                Member
              </Heading>
              <Heading textAlign="center" mb={6}>
                ({team.name || ''})
              </Heading>
              <Members players={team.players} />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Box>
  );
};

export default ProfileTeamComponent;
