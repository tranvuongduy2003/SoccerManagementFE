import React from 'react';
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
// import { FaEllipsisV } from 'react-icons/fa';
import Image from 'next/image';
import { ETypeStatusPrize } from '@/interfaces';

interface PrizeTableProps {
  category: string;
  image: string;
  bonus: string;
  status: ETypeStatusPrize;
  completion: number;
}
function PrizeTableRow(props: PrizeTableProps) {
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Tr>
      <Td minWidth={{ sm: '250px' }} pl="0px">
        <Flex
          alignItems="center"
          py=".8rem"
          minWidth="100%"
          flexWrap="nowrap"
          gap="10px"
        >
          <Image src={props.image} width="40" height="40" alt="" />

          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {props.category}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" p="0">
          {props.bonus}
        </Text>
      </Td>
      <Td>
        <Text
          fontSize="md"
          color={props.status === 'FINISHED' ? 'green.400' : 'yellow.400'}
          fontWeight="bold"
          p="0"
        >
          {props.status}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            p="0"
          >{`${props.completion}%`}</Text>
          <Progress
            colorScheme={props.completion === 100 ? 'teal' : 'cyan'}
            size="xs"
            value={props.completion}
            borderRadius="15px"
          />
        </Flex>
      </Td>
    </Tr>
  );
}

export default PrizeTableRow;
