//chakra-ui
import {
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Table,
  Td,
  Flex,
  Box,
  Text
} from '@chakra-ui/react';

//image
import Image from 'next/image';

//interface
import { ETypeHistory, IStatisticalTeam } from '@/interfaces';

interface StatisticalTeamProps {
  statisticalTeam: IStatisticalTeam;
}
const StatisticalTeam = (props: StatisticalTeamProps) => {
  const { statisticalTeam } = props;

  return (
    <Tr>
      <Td textAlign="center">{statisticalTeam.rank}</Td>
      <Td textAlign="center">
        <Flex alignItems="center" justifyContent="flex-start" gap="4">
          <Image
            src={statisticalTeam.team?.flag}
            alt=""
            width="50"
            height="50"
          />
          <Text
            textColor="yellow.700"
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            {statisticalTeam.team.name}
          </Text>
        </Flex>
      </Td>
      <Td textAlign="center">{statisticalTeam.matches}</Td>
      <Td textAlign="center">
        {statisticalTeam.wins} - {statisticalTeam.draws} -{' '}
        {statisticalTeam.losses}
      </Td>
      <Td textAlign="center">
        <Flex alignItems="center" justifyContent="center" gap="1">
          {statisticalTeam.goals} / {statisticalTeam.losts}
          <Text
            color={
              statisticalTeam.goals! - statisticalTeam.losts! > 0
                ? 'green.400'
                : 'red.400'
            }
          >
            ({statisticalTeam.goals! - statisticalTeam.losts! > 0 && '+'}
            {statisticalTeam.goals! - statisticalTeam.losts!})
          </Text>
        </Flex>
      </Td>
      <Td textAlign="center">
        {statisticalTeam.yellowCards} / {statisticalTeam.redCards}
      </Td>
      <Td textAlign="center">
        {statisticalTeam.point}
      </Td>
      <Td textAlign="center">
        <Flex alignItems="center" justifyContent="center" gap="1">
          {statisticalTeam.history?.map((value: ETypeHistory, index) => (
            <Box
              key={index}
              bg={
                (value === 'WIN' && 'blue.300') ||
                (value === 'LOSSES' && 'gray.300') ||
                (value === 'DRAW' && 'green.300') ||
                undefined
              }
              rounded="4px"
              p="1"
              px={
                (value === 'WIN' && '1') ||
                (value === 'LOSSES' && '2') ||
                (value === 'DRAW' && '2')||undefined
              }
            >
              {(value === 'WIN' && 'W') ||
                (value === 'LOSSES' && 'L') ||
                (value === 'DRAW' && 'D')}
            </Box>
          ))}
        </Flex>
      </Td>
    </Tr>
  );
};

interface LeaderBoardComponentProps {
  statisticalTeams: IStatisticalTeam[];
}

const LeaderBoardComponent = (props: LeaderBoardComponentProps) => {
  const { statisticalTeams } = props;

  return (
    <TableContainer mt="100px">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead bgColor="#75C2F6">
          <Tr>
            <Th textAlign="center" color="white">
              #
            </Th>
            <Th textAlign="center" color="white">
              Team
            </Th>
            <Th textAlign="center" color="white">
              Game played
            </Th>
            <Th textAlign="center" color="white">
              {/* WDL */}
              <Flex alignItems="center" justifyContent="center" gap="1">
                <Box bg="blue.800" rounded="4px" p="1">
                  W
                </Box>
                -
                <Box bg="blue.300" rounded="4px" p="1">
                  D
                </Box>
                -
                <Box bg="gray" rounded="4px" p="1">
                  L
                </Box>
              </Flex>
            </Th>
            <Th textAlign="center" color="white">
              Goal difference
            </Th>
            <Th textAlign="center" color="white">
              <Flex alignItems="center" justifyContent="center" gap="1">
                <Box bg="yellow" rounded="2px" py="3" px="2" />
                <Text fontSize="20px" color="white">
                  /
                </Text>
                <Box bg="red" rounded="2px" py="3" px="2" />
              </Flex>
            </Th>
            <Th textAlign="center" color="white">
            Points	
            </Th>
            <Th textAlign="center" color="white">
              History
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {statisticalTeams.map((statisticalTeam, index) => (
            <StatisticalTeam key={index} statisticalTeam={statisticalTeam} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default LeaderBoardComponent;
