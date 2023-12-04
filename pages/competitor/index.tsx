//layout
import { HomeLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/interfaces';

//chakra-ui
import {
  Grid,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  Flex,
  Select,
  Box,
  Input,
  Icon,
  Center
} from '@chakra-ui/react';

//icons
import { SearchIcon } from '@chakra-ui/icons';
import { RiTeamLine } from 'react-icons/ri';
import { FaRegEye } from 'react-icons/fa';

const Competitor = () => {
  return (
    <Card maxW="sm" position="relative" paddingBottom="20px">
      <CardBody>
        <Box position="relative">
          <Image
            position="relative"
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Box
            position="absolute"
            left="-50%"
            bottom="0"
            translateX="-50%"
            translateY="-50%"
          >
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="h-[100px] w-[100px]"
            />
          </Box>
        </Box>
        <Stack mt="12" spacing="3">
          <Heading size="md" textAlign="center">
            FiFa Club WorldCup 2022
          </Heading>
          <Text textAlign="center">
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces
          </Text>
        </Stack>
        <Flex justifyContent="center" alignItems="center" gap="30px" mt="20px">
          <Flex alignItems="center" gap="10px">
            <Icon as={RiTeamLine} color="black" />
            <Text>10</Text>
          </Flex>
          <Flex alignItems="center" gap="10px">
            <Icon as={FaRegEye} color="black" />
            <Text>10</Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

const Competitors: NextPageWithLayout = () => {
  return (
    <Flex
      direction="column"
      paddingTop="150px"
      justifyContent="space-between"
      gap="50px"
      paddingLeft="30px"
      paddingRight="30px"
    >
      <Flex direction="row" justifyContent="space-between" gap="200px">
        <Flex width="20%" direction="row" alignItems="center">
          <Input placeholder="Search league" color="white" />
          <Center bgColor="blue.600" height="100%" px="4" rounded="6">
            <Icon as={SearchIcon} color="white" />
          </Center>
        </Flex>
        <Flex direction="row" gap="20px" flexGrow="1">
          <Select placeholder="Format" background="white" color="black">
            <option value="option1">Knockout</option>
            <option value="option2">Round Robin</option>
            <option value="option3">Group Stage</option>
          </Select>
          <Select placeholder="Status" background="white" color="black">
            <option value="option1">Registering</option>
            <option value="option2">Active</option>
            <option value="option3">Finished</option>
          </Select>
          <Select placeholder="Vision" background="white" color="black">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>
      </Flex>
      <Grid
        templateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
        gap="5"
        justifyContent="center"
        alignItems="center"
      >
        <Competitor />
        <Competitor />
        <Competitor />
        <Competitor />
        <Competitor />
      </Grid>
    </Flex>
  );
};

Competitors.Layout = HomeLayout;
export default Competitors;
