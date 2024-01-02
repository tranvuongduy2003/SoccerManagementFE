'use client';

//chark-ui
import { TabList, Tabs, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';

//interface
import { IStatisticalPLayer, IStatisticalTeam } from '@/interfaces';

//component
import TablePlayer from './StatisticalPlayer';
import TableTeam from './StatisticalTeam';
import NotData from '@/components/common/notData';

interface StatisticComponentProps {
  statisticalTeams: IStatisticalTeam[];
  statisticalPlayers: IStatisticalPLayer[];
}

let tableTeam: IStatisticalTeam[];
let tablePlayer: IStatisticalPLayer[];

const StatisticComponent = (props: StatisticComponentProps) => {
  const { statisticalTeams, statisticalPlayers } = props;
  // const tableTeam: IStatisticalTeam[] = statisticalTeams.map(item => {
  //   return {
  //     ...item,
  //     WDL: `${item.wins} - ${item.draws} - ${item.losses}`
  //   };
  // });
  // const tablePlayer: IStatisticalPLayer[] = statisticalPlayers;

  if (statisticalTeams) {
    tableTeam = statisticalTeams.map(item => {
      return {
        ...item,
        WDL: `${item.wins} - ${item.draws} - ${item.losses}`
      };
    });
  }

  if (statisticalPlayers) {
    tablePlayer = statisticalPlayers;
  }

  return (
    <Tabs
      mt="100px"
      p="20px"
      colorScheme="purple"
      variant="enclosed"
      align="center"
    >
      <TabList>
        <Tab _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}>
          Team
        </Tab>
        <Tab _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}>
          Player
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TableTeam statisticalTeams={tableTeam} />
        </TabPanel>
        <TabPanel>
          <TablePlayer statisticalPlayers={tablePlayer} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default StatisticComponent;
