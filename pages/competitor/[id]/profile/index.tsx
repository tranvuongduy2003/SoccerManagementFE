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
import { FaUsers } from 'react-icons/fa';
import { ITeam, NextPageWithLayout } from '@/interfaces';
import { HomeLayout } from '@/components/layout';

import TeamInformation from '@/components/owner/information';
import MemberTeam from '@/components/owner/member';

//route
import { useRouter } from 'next/router';

//react-query
import { useQuery } from '@tanstack/react-query';
import { getTeamById } from '@/apis';
import SkeletonComponent from '@/components/common/skeleton';
const TeamProfile: NextPageWithLayout = () => {
  const route = useRouter();
  const teamId: any = route.query.id;

  const { data: team, isLoading } = useQuery<ITeam>({
    queryKey: ['team', teamId],
    queryFn: () => getTeamById(teamId)
  });

  return (
    <Box className="h-screen relative">
      <Tabs
        rounded={20}
        top="25%"
        p="20px"
        colorScheme="purple"
        variant="enclosed"
        direction="ltr"
        boxShadow="dark-lg"
        minH="80%"
        align="start"
        bgColor="white"
        bottom="0"
      >
        <Flex height="full">
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
              <Icon as={FaUsers} />
              Member
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {isLoading ? (
                <SkeletonComponent />
              ) : (
                <>
                  <Heading textAlign="center" mb={6}>
                    Team information
                  </Heading>
                  <TeamInformation team={team!} />
                </>
              )}
            </TabPanel>
            <TabPanel>
              <Heading textAlign="center" mb={6}>
                Member
              </Heading>
              {team! && <MemberTeam players={team?.players} idTeam={team._id!}/>}
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Box>
  );
};
TeamProfile.Layout = HomeLayout;

export default TeamProfile;
