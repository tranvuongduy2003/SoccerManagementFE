//chakra-ui
import {
  Flex,
  Heading,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from '@chakra-ui/react';

//Components
import Card from '../../Card/Card';
import CardBody from '../../Card/CardBody';
import PrizeTableRow from '../../Table/TableAwardRow';

//interface
import { IPrize } from '@/interfaces';

//Component
import SkeletonComponent from '@/components/common/skeleton';

interface TableProps {
  captions: string[];
  data: IPrize[];
}

const TablePrize = (props: TableProps) => {
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Card my="22px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px">
              {props.captions.map((caption: string, idx: number) => {
                return (
                  <Th color="#0079FF" key={idx} pl="30px">
                    <Text size="xl">{caption}</Text>
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {props.data.map((row: IPrize, index: number) => {
              return (
                <PrizeTableRow
                  key={index}
                  category={row.category}
                  image={row.image}
                  status={row.status}
                  bonus={row.bonus}
                  completion={row.completion}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

interface PrizeProps {
  prizes: IPrize[];
}

const Prizes = (props: PrizeProps) => {
  const { prizes } = props;

  return (
    <Flex direction="column" pt={{ base: '120px', md: '100px' }}>
      <Heading fontSize="3xl" color="black" fontWeight="bold" mb="6">
        Award Information
      </Heading>
      {prizes.length ? (
        <TablePrize
          captions={['Category', 'Bonus', 'Status', 'Completion']}
          data={prizes}
        />
      ) : (
        <SkeletonComponent />
      )}
    </Flex>
  );
};

export default Prizes;
