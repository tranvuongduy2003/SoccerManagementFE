//chakra-ui
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

//component
import BracketComponent from './Bracket';
import KnockOut from './Knockout/KnockOut';

const ScheduleComponent = () => {

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
          Chart View
        </Tab>
        <Tab _selected={{ color: 'white', bg: '#75C2F6', fontWeight: 'bold' }}>
          List View
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BracketComponent />
        </TabPanel>
        <TabPanel>
          <KnockOut />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ScheduleComponent;
