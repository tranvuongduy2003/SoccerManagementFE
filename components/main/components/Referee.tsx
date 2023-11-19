import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
  Grid,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import React from 'react';

const Referee = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://www.thesun.co.uk/wp-content/uploads/2023/06/english-referee-anthony-taylor-gestures-842222747.jpg?strip=all&quality=100&w=1920&h=1440&crop=1"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="w-full"
        />
        <Stack mt="3" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Age: 38
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              dob: 1978-03-21
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              nation: Australia
            </ListItem>
          </List>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            View
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

const Referees = () => {
  return (
    <Box>
      <Heading size="xl" mb="20px">
        Referees
      </Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(15rem, 1fr))"
        gap="5"
        justifyContent="center"
      >
        <Referee />
        <Referee />
        <Referee />
        <Referee />
        <Referee />
        <Referee />
        <Referee />
        <Referee />
        <Referee />
        <Referee />
        <Referee />
      </Grid>
    </Box>
  );
};

export default Referees;
