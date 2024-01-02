//chakra-ui
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

//component
import BracketComponent from './Bracket';
import KnockOut from './Knockout/KnockOut';
import GroupStage from './GroupStage/GroupStage';

//store
import { useTournamentStore } from '@/stores';
import ChartView from './GroupStage/ChartView';

const ScheduleComponent = () => {
  const tournament = useTournamentStore(state => state.tournament);
  return (
    <Tabs
      mt="100px"
      p="20px"
      colorScheme="purple"
      variant="enclosed"
      align="center"
    >
      <TabList>
        {tournament.formula === 'GROUP STAGE' && (
          <>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}
            >
              Table View
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}
            >
              Chart View
            </Tab>
          </>
        )}
        {tournament.formula === 'KNOCKOUT' && (
          <>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}
            >
              Chart View
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}
            >
              List View
            </Tab>
          </>
        )}
        {tournament.formula === 'ROUND FIGHT' && (
          <>
            <Tab
              _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}
            >
              List View
            </Tab>
          </>
        )}
      </TabList>

      {tournament.formula === 'GROUP STAGE' && (
        <TabPanels>
          <TabPanel>
            <GroupStage />
          </TabPanel>
          <TabPanel>
            <ChartView />
          </TabPanel>
        </TabPanels>
      )}
      {tournament.formula === 'KNOCKOUT' && (
        <TabPanels>
          <TabPanel>
            <BracketComponent />
          </TabPanel>
          <TabPanel>
            <KnockOut />
          </TabPanel>
        </TabPanels>
      )}
      {tournament.formula === 'ROUND FIGHT' && (
        <TabPanels>
          <TabPanel>
            <KnockOut />
          </TabPanel>
        </TabPanels>
      )}
    </Tabs>
  );
};

export default ScheduleComponent;
