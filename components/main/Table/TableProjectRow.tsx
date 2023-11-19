import React from 'react';
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
  Avatar
} from '@chakra-ui/react';
import { FaEllipsisV } from 'react-icons/fa';
import Image from 'next/image';

function DashboardTableRow(props: any) {
  const { logo, image,name, status, budget, progression } = props;
  console.log(logo)
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <Tr>
      <Td minWidth={{ sm: '250px' }} pl="0px">
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {logo ? (
            <Icon as={logo} h={'24px'} w={'24px'} me="18px" color="#0079FF"/>
          ) : (
            <Image src="https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/67b9ee0c-7ccf-4cfd-8581-c50d5f62384a/T1_Logo_Primary+Red.png" width="40" height="40" alt=''/>
          )}
          {/* <Icon as={logo} h={'24px'} w={'24px'} me="18px" color="red"/>  */}
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" p="0">
          {budget}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" p="0">
          {status}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            p="0"
          >{`${progression}%`}</Text>
          <Progress
            colorScheme={progression === 100 ? 'teal' : 'cyan'}
            size="xs"
            value={progression}
            borderRadius="15px"
          />
        </Flex>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
