// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';
// Custom components
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';
import TablesProjectRow from '../Table/TableProjectRow';
import React from 'react';

import {
  GiChampions,
  GiPodiumSecond,
  GiPodiumThird,
  GiKnockout,
  GiRegeneration
} from 'react-icons/gi';
import { PiNumberSquareFourFill } from 'react-icons/pi';
import { GrTable } from 'react-icons/gr';

export const dashboardTableData = [
  {
    // logo: GiChampions,
    image:
      'https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/67b9ee0c-7ccf-4cfd-8581-c50d5f62384a/T1_Logo_Primary+Red.png',
    name: 'Champion',
    members: [],
    budget: '$42/Team',
    status: 'unfinished',
    progression: 0
  },
  {
    logo: GiPodiumSecond,
    name: 'Runner',
    members: [],
    status: 'unfinished',
    budget: '$30/Team',
    progression: 0
  },
  {
    logo: GiPodiumThird,
    name: 'Grade 3',
    members: [],
    status: 'unfinished',
    budget: '$27/Team',
    progression: 0
  },
  {
    logo: PiNumberSquareFourFill,
    name: 'Grade 4',
    members: [],
    status: 'unfinished',
    budget: '$25/Team',
    progression: 0
  },
  {
    logo: GiRegeneration,
    name: 'Quarterfinals',
    members: [],
    status: 'unfinished',
    budget: '$17/Team',
    progression: 0
  },
  {
    logo: GiKnockout,
    name: 'Knockout round',
    members: [],
    status: 'unfinished',
    budget: '$13/Team',
    progression: 0
  },
  {
    logo: GrTable,
    name: 'Group stage',
    members: [],
    status: 'unfinished',
    budget: '$9/Team',
    progression: 40
  }
];

interface TableProps {
  title: string;
  captions: string[];
  data: any;
}

const TablePrize = ({ title, captions, data }: any) => {
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Card my="22px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
      <CardHeader p="6px 0px 22px 0px">
        <Flex direction="column">
          <Heading fontSize="3xl" color={textColor} fontWeight="bold">
            {title}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px">
              {captions.map((caption: any, idx: any) => {
                return (
                  <Th color="#0079FF" key={idx} pl="30px">
                    <Text size="xl">{caption}</Text>
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row: any) => {
              return (
                <TablesProjectRow
                  key={row.name}
                  name={row.name}
                  logo={row.logo ? row.logo : null}
                  image={row.image}
                  status={row.status}
                  budget={row.budget}
                  progression={row.progression}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

const Prize = () => {
  return (
    <Flex direction="column" pt={{ base: '120px', md: '100px' }}>
      <TablePrize
        title={'Award Information'}
        captions={['Category', 'Bonus', 'Status', 'Completion']}
        data={dashboardTableData}
      />
    </Flex>
  );
};

export default Prize;
