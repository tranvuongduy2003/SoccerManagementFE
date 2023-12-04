'use client';

//chakra-ui
import {
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Icon,
  Heading,
  Box
} from '@chakra-ui/react';

//icons
import { GiChampions } from 'react-icons/gi';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaStar, FaPlane } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { AiFillThunderbolt, AiOutlineFileProtect } from 'react-icons/ai';
import { FaHands } from 'react-icons/fa6';

//components
import VoteTeamChampion from './VoteTeamChampion';
import VoteTeamFairPlay from './VoteTeamFairplay';
import VoteGoalkeeper from './VoteGoalkeeper';
import VoteDefender from './VoteDefender';
import VoteMidfielder from './VoteMidfielder';
import VoteStriker from './VoteStriker';
import VoteGoalsPlayer from './VoteGoalsPlayer';
import VoteBestPlayer from './VoteBestPlayer';

const VoteComponent = () => {
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
          <TabList flexDirection="column">
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6' }}
              minW="300px"
              gap="10px"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Icon as={GiChampions} />
              Team is the champion
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6' }}
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Icon as={IoDiamondOutline} />
              The fairplay team
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6' }}
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Icon as={FaStar} />
              The best player
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6' }}
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Icon as={IoIosRocket} />
              The most goals
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6' }}
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Icon as={AiFillThunderbolt} />
              The best striker
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6' }}
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Icon as={FaPlane} />
              The best midfielder
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6' }}
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Icon as={AiOutlineFileProtect} />
              The best defender
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6' }}
              alignItems="center"
              gap="10px"
              justifyContent="flex-start"
            >
              <Icon as={FaHands} />
              The best goalkeeper
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Heading textAlign="center" mb={6}>
                Team is the champion
              </Heading>
              <VoteTeamChampion />
            </TabPanel>
            <TabPanel>
              <Heading textAlign="center" mb={6}>
                The fairplay team
              </Heading>
              <VoteTeamFairPlay />
            </TabPanel>
            <TabPanel>
              <Heading textAlign="center" mb={6}>
                The best player
              </Heading>
              <VoteBestPlayer />
            </TabPanel>
            <TabPanel>
              <Heading textAlign="center" mb={6}>
                The most goals
              </Heading>
              <VoteGoalsPlayer />
            </TabPanel>
            <TabPanel>
              <Heading textAlign="center" mb={6}>
                The best striker
              </Heading>
              <VoteStriker />
            </TabPanel>
            <TabPanel>
              <Heading textAlign="center" mb={6}>
                The best midfielder
              </Heading>
              <VoteMidfielder />
            </TabPanel>
            <TabPanel>
              <Heading textAlign="center" mb={6}>
                The best defender
              </Heading>
              <VoteDefender />
            </TabPanel>
            <TabPanel>
              <Heading textAlign="center" mb={6}>
                The best goalkeeper
              </Heading>
              <VoteGoalkeeper />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Box>
  );
};

export default VoteComponent;
